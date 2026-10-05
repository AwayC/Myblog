<template>
  <div class="topo-bg" aria-hidden="true">
    <canvas ref="canvas" class="topo-canvas"></canvas>
    <div class="topo-grain"></div>
  </div>
</template>

<script>
// 全站背景：随时间缓慢流动的等高线（3D simplex 噪声 + 域扭曲），
// 鼠标在画面中拖出一条“流体”轨迹，轨迹经过的等高线被推开、点亮成橙色。
// 纯 WebGL2 实现，不依赖 three.js，保证所有页面都很轻。

const SIMPLEX = `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

const VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main(){ vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }`;

// 轨迹：上一帧轻微扩散 + 衰减，再叠加本帧鼠标线段的笔刷
const TRAIL_FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uPrev;
uniform vec2 uTexel;
uniform float uAspect;
uniform vec2 uFrom;
uniform vec2 uTo;
uniform float uStrength;
uniform float uDecay;
float segDist(vec2 p, vec2 a, vec2 b){
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-6), 0.0, 1.0);
  return length(pa - ba * h);
}
void main(){
  vec2 o = uTexel * 1.5;
  float prev = texture(uPrev, vUv).r * 0.4
    + (texture(uPrev, vUv + vec2(o.x, 0.0)).r + texture(uPrev, vUv - vec2(o.x, 0.0)).r
     + texture(uPrev, vUv + vec2(0.0, o.y)).r + texture(uPrev, vUv - vec2(0.0, o.y)).r) * 0.15;
  prev = max(prev * uDecay - 0.0015, 0.0);
  vec2 asp = vec2(uAspect, 1.0);
  float d = segDist(vUv * asp, uFrom * asp, uTo * asp);
  float brush = smoothstep(0.075, 0.0, d) * uStrength;
  outColor = vec4(min(prev + brush, 1.0), 0.0, 0.0, 1.0);
}`;

const MAIN_FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uTrail;
uniform vec2 uRes;
uniform vec2 uMouse;
uniform float uTime;
uniform float uReveal;
uniform float uDisco;
uniform float uHover;
${SIMPLEX}
vec3 hue(float h){ return clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0); }
void main(){
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(vUv.x * aspect, vUv.y);
  float t = uTime * 0.035;
  float trail = texture(uTrail, vUv).r;

  // 域扭曲 + 轨迹把等高线推开
  vec2 q = p * 1.35;
  q += 0.32 * vec2(snoise(vec3(q * 0.7, t + 3.1)), snoise(vec3(q * 0.7 + 9.2, t - 1.7)));
  float n = snoise(vec3(q, t)) * 0.72 + snoise(vec3(q * 2.2 + 4.0, t * 1.4)) * 0.22;
  n += trail * 0.55;

  float v = n * 9.0;
  float fw = fwidth(v);
  float dist = abs(fract(v - 0.5) - 0.5) / max(fw, 1e-4);
  float line = 1.0 - smoothstep(0.0, 1.15, dist);
  float isIndex = step(abs(mod(floor(v + 0.5), 5.0)), 0.5);

  // 入场：等高线自上而下显现
  float reveal = 1.0 - smoothstep(uReveal * 1.3 - 0.3, uReveal * 1.3, 1.0 - vUv.y);

  vec3 bg = vec3(0.047, 0.047, 0.039);
  vec3 ink = vec3(0.95, 0.94, 0.91);
  vec3 accent = vec3(1.0, 0.5, 0.0);
  accent = mix(accent, hue(fract(uTime * 0.12 + vUv.x * 0.6)), uDisco);

  // 光标附近的“探照灯”
  vec2 m = vec2(uMouse.x * aspect, uMouse.y);
  float halo = exp(-dot(p - m, p - m) / 0.05) * uHover;

  float baseA = mix(0.05, 0.11, isIndex);
  vec3 col = bg;
  col = mix(col, ink, line * baseA * reveal);
  col = mix(col, accent, line * clamp(trail * 1.6 + halo * 0.5, 0.0, 1.0) * reveal);
  col += accent * (trail * 0.05 + halo * 0.03) * reveal;

  vec2 c = vUv - 0.5;
  col *= 1.0 - dot(c, c) * 0.9;
  outColor = vec4(col, 1.0);
}`;

function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(sh));
  }
  return sh;
}

function program(gl, vs, fs) {
  const p = gl.createProgram();
  gl.attachShader(p, compile(gl, gl.VERTEX_SHADER, vs));
  gl.attachShader(p, compile(gl, gl.FRAGMENT_SHADER, fs));
  gl.bindAttribLocation(p, 0, 'aPos');
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
  const u = {};
  const count = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < count; i++) {
    const info = gl.getActiveUniform(p, i);
    u[info.name] = gl.getUniformLocation(p, info.name);
  }
  return { p, u };
}

export default {
  name: 'TopoBackground',
  mounted() {
    this.s = {
      mouse: { x: 0.5, y: 0.6 },
      prev: { x: 0.5, y: 0.6 },
      target: { x: 0.5, y: 0.6 },
      speed: 0,
      hover: 0,
      hoverTarget: 0,
      reveal: 0,
      revealTarget: 0,
      disco: 0,
      discoTarget: 0,
      start: performance.now(),
      raf: 0,
    };
    try {
      this.init();
    } catch (err) {
      // WebGL2 不可用时保持纯色背景
      console.warn('TopoBackground disabled:', err);
      return;
    }
    window.addEventListener('pointermove', this.onPointer, { passive: true });
    document.documentElement.addEventListener('pointerleave', this.onLeave);
    window.addEventListener('resize', this.onResize);
    window.addEventListener('away:reveal', this.onReveal);
    window.addEventListener('away:disco', this.onDisco);
    document.addEventListener('visibilitychange', this.onVisibility);
    // 没收到加载器的通知时也要显示出来
    this.revealFallback = setTimeout(() => this.onReveal(), 5000);
    this.loop();
  },
  beforeUnmount() {
    const s = this.s;
    cancelAnimationFrame(s.raf);
    clearTimeout(this.revealFallback);
    clearTimeout(this.resizeTimer);
    window.removeEventListener('pointermove', this.onPointer);
    document.documentElement.removeEventListener('pointerleave', this.onLeave);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('away:reveal', this.onReveal);
    window.removeEventListener('away:disco', this.onDisco);
    document.removeEventListener('visibilitychange', this.onVisibility);
    if (s.gl) {
      const lose = s.gl.getExtension('WEBGL_lose_context');
      if (lose) lose.loseContext();
    }
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, powerPreference: 'low-power' });
      if (!gl) throw new Error('no webgl2');
      const s = this.s;
      s.gl = gl;
      s.float = !!gl.getExtension('EXT_color_buffer_float');

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

      s.main = program(gl, VERT, MAIN_FRAG);
      s.trail = program(gl, VERT, TRAIL_FRAG);
      this.resize();
    },
    makeTarget(w, h) {
      const gl = this.s.gl;
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      if (this.s.float) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.R16F, w, h, 0, gl.RED, gl.HALF_FLOAT, null);
      } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      const fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return { tex, fb, w, h };
    },
    resize() {
      const s = this.s;
      const gl = s.gl;
      if (!gl) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      s.w = Math.round(window.innerWidth * dpr);
      s.h = Math.round(window.innerHeight * dpr);
      this.$refs.canvas.width = s.w;
      this.$refs.canvas.height = s.h;
      const tw = Math.max(64, Math.round(window.innerWidth / 4));
      const th = Math.max(64, Math.round(window.innerHeight / 4));
      [s.ta, s.tb].forEach((t) => {
        if (t) { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fb); }
      });
      s.ta = this.makeTarget(tw, th);
      s.tb = this.makeTarget(tw, th);
    },
    onResize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => this.resize(), 150);
    },
    onPointer(e) {
      const s = this.s;
      s.target.x = e.clientX / window.innerWidth;
      s.target.y = 1 - e.clientY / window.innerHeight;
      s.hoverTarget = 1;
    },
    onLeave() {
      this.s.hoverTarget = 0;
    },
    onReveal() {
      clearTimeout(this.revealFallback);
      this.s.revealTarget = 1;
    },
    onDisco(e) {
      this.s.discoTarget = e.detail && e.detail.on ? 1 : 0;
    },
    onVisibility() {
      const s = this.s;
      if (document.hidden) {
        cancelAnimationFrame(s.raf);
        s.raf = 0;
      } else if (!s.raf) {
        this.loop();
      }
    },
    loop() {
      const s = this.s;
      const gl = s.gl;
      s.raf = requestAnimationFrame(this.loop);
      const time = (performance.now() - s.start) / 1000;

      s.prev.x = s.mouse.x;
      s.prev.y = s.mouse.y;
      s.mouse.x += (s.target.x - s.mouse.x) * 0.22;
      s.mouse.y += (s.target.y - s.mouse.y) * 0.22;
      const dx = s.mouse.x - s.prev.x;
      const dy = s.mouse.y - s.prev.y;
      const v = Math.sqrt(dx * dx + dy * dy);
      s.speed += (Math.min(v * 28, 1) - s.speed) * 0.25;
      s.hover += (s.hoverTarget - s.hover) * 0.05;
      s.reveal += (s.revealTarget - s.reveal) * 0.022;
      s.disco += (s.discoTarget - s.disco) * 0.04;

      // 1. 更新轨迹（ping-pong）
      gl.useProgram(s.trail.p);
      gl.bindFramebuffer(gl.FRAMEBUFFER, s.tb.fb);
      gl.viewport(0, 0, s.tb.w, s.tb.h);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, s.ta.tex);
      gl.uniform1i(s.trail.u.uPrev, 0);
      gl.uniform2f(s.trail.u.uTexel, 1 / s.ta.w, 1 / s.ta.h);
      gl.uniform1f(s.trail.u.uAspect, window.innerWidth / window.innerHeight);
      gl.uniform2f(s.trail.u.uFrom, s.prev.x, s.prev.y);
      gl.uniform2f(s.trail.u.uTo, s.mouse.x, s.mouse.y);
      gl.uniform1f(s.trail.u.uStrength, s.speed * 0.35 * s.hover);
      gl.uniform1f(s.trail.u.uDecay, 0.972);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      [s.ta, s.tb] = [s.tb, s.ta];

      // 2. 绘制等高线
      gl.useProgram(s.main.p);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, s.w, s.h);
      gl.bindTexture(gl.TEXTURE_2D, s.ta.tex);
      gl.uniform1i(s.main.u.uTrail, 0);
      gl.uniform2f(s.main.u.uRes, s.w, s.h);
      gl.uniform2f(s.main.u.uMouse, s.mouse.x, s.mouse.y);
      gl.uniform1f(s.main.u.uTime, time);
      gl.uniform1f(s.main.u.uReveal, s.reveal);
      gl.uniform1f(s.main.u.uDisco, s.disco);
      gl.uniform1f(s.main.u.uHover, s.hover);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    },
  },
};
</script>

<style scoped>
.topo-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background: var(--c-bg);
}

.topo-canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.topo-grain {
  position: absolute;
  inset: -50%;
  opacity: 0.05;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}
</style>
