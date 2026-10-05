<template>
  <div class="helmet-stage" ref="container">
    <canvas ref="canvas" class="helmet-canvas"></canvas>
  </div>
</template>

<script>
// 3D 头盔舞台：暗场里自发光的橙色涂装 + 远处跟随鼠标的灯光 + 辉光(bloom)。
// 入场时先出现扫描中的线框网格，再自上而下“实体化”（还原 landonorris.com 的网格动画）。
// 模型与贴图来自 landonorris.com（helmet / disco），贴图已重新着色为橙色涂装。
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import gsap from 'gsap';

const BASE = `${process.env.BASE_URL || '/'}helmet/`;
const ACCENT = new THREE.Color('#ff8000');

// ---------- 资源缓存（跨页面复用，避免重复下载 / 解码） ----------
let dracoLoader = null;
function getGLTFLoader(manager) {
  if (!dracoLoader) {
    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(`${BASE}draco/`);
  }
  const loader = new GLTFLoader(manager);
  loader.setDRACOLoader(dracoLoader);
  return loader;
}

function loadTexture(loader, url, { srgb = false, flipY = false } = {}) {
  return loader.loadAsync(`${BASE}textures/${url}`).then((tex) => {
    tex.flipY = flipY;
    tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    return tex;
  });
}

let helmetAssets = null;
const progressListeners = new Set();
function loadHelmetAssets() {
  if (helmetAssets) return helmetAssets;
  const manager = new THREE.LoadingManager();
  manager.onProgress = (url, loaded, total) => {
    progressListeners.forEach((fn) => fn(loaded / total));
  };
  const tl = new THREE.TextureLoader(manager);
  helmetAssets = Promise.all([
    getGLTFLoader(manager).loadAsync(`${BASE}models/helmet.glb`),
    // 原站的摄影棚 HDRI，墙面压暗、只保留两盏八角柔光箱
    new HDRLoader(manager).loadAsync(`${BASE}hdri/studio-softbox.hdr`),
    loadTexture(tl, 'helmet-orange-dark.webp', { srgb: true }),
    loadTexture(tl, 'helmet-orange.webp', { srgb: true }),
    loadTexture(tl, 'helmet-normal.webp'),
    loadTexture(tl, 'helmet-metallic.webp'),
    loadTexture(tl, 'helmet-roughness.webp'),
    loadTexture(tl, 'glass-basecolor.webp', { srgb: true }),
    loadTexture(tl, 'glass-normal.webp'),
    loadTexture(tl, 'glass-roughness.webp'),
    loadTexture(tl, 'glass-metallic.webp'),
    loadTexture(tl, 'plastic-matcap.webp', { srgb: true, flipY: true }),
  ]).then(([gltf, hdr, dark, bright, normal, metallic, roughness, glassBase, glassNormal, glassRoughness, glassMetallic, plasticMatcap]) => {
    hdr.mapping = THREE.EquirectangularReflectionMapping;
    // 线框用的合并几何体（只保留位置）
    const parts = [];
    gltf.scene.traverse((o) => {
      if (!o.isMesh) return;
      const g = o.geometry.clone();
      Object.keys(g.attributes).forEach((k) => { if (k !== 'position') g.deleteAttribute(k); });
      parts.push(g);
    });
    return {
      scene: gltf.scene,
      wireGeometry: mergeGeometries(parts),
      hdr,
      liveries: { dark, bright },
      helmet: { normal, metallic, roughness },
      glass: { base: glassBase, normal: glassNormal, roughness: glassRoughness, metallic: glassMetallic },
      plasticMatcap,
    };
  }).catch((err) => {
    helmetAssets = null;
    throw err;
  });
  return helmetAssets;
}

let discoAssets = null;
function loadDiscoAssets() {
  if (discoAssets) return discoAssets;
  const tl = new THREE.TextureLoader();
  discoAssets = Promise.all([
    getGLTFLoader().loadAsync(`${BASE}models/disco.glb`),
    loadTexture(tl, 'disco-matcap.webp', { flipY: true }),
    loadTexture(tl, 'disco-mask.webp'),
    loadTexture(tl, 'disco-flare.webp', { srgb: true, flipY: true }),
    loadTexture(tl, 'helmet-disco.webp', { srgb: true }),
    new HDRLoader().loadAsync(`${BASE}hdri/studio-light.hdr`),
  ]).then(([gltf, matcap, mask, flare, livery, light]) => {
    light.mapping = THREE.EquirectangularReflectionMapping;
    return { scene: gltf.scene, matcap, mask, flare, livery, light };
  })
    .catch((err) => {
      discoAssets = null;
      throw err;
    });
  return discoAssets;
}

// ---------- 材质补丁 ----------
// 实体化：以模型局部 y 为界自上而下显现，交界处一圈橙色光边
function addSolidReveal(material, uniforms, { darkenBack = false, livery = false, key }) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uSolid = uniforms.uSolid;
    shader.uniforms.tNextLivery = uniforms.tNextLivery;
    shader.uniforms.uLiveryMix = uniforms.uLiveryMix;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        varying float vRevealY;
        varying float vRevealX;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vRevealY = position.y;
        vRevealX = position.x;`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform float uSolid;
        uniform sampler2D tNextLivery;
        uniform float uLiveryMix;
        varying float vRevealY;
        varying float vRevealX;`)
      .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
        float revealEdge = mix(0.05, -0.05, uSolid);
        if (vRevealY < revealEdge) discard;`)
      .replace('#include <map_fragment>', `${livery ? `
        // 原站的涂装切换：一条带弧度的分界线从上往下扫过
        vec4 liveryNow = texture2D(map, vMapUv);
        vec4 liveryNext = texture2D(tNextLivery, vMapUv);
        float liveryEdge = vRevealY - sin(vRevealX * PI) * sin(uLiveryMix * PI) * 0.1;
        diffuseColor *= mix(liveryNext, liveryNow, step(liveryEdge, mix(0.05, -0.05, uLiveryMix)));` : '#include <map_fragment>'}
        ${darkenBack ? 'if (!gl_FrontFacing) diffuseColor.rgb *= 0.03;' : ''}`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        // 入场时自上而下实体化的那条扫描光边
        float revealRim = smoothstep(0.0035, 0.0, abs(vRevealY - revealEdge)) * step(uSolid, 0.999);
        totalEmissiveRadiance += vec3(1.0, 0.45, 0.05) * revealRim * 6.0;`);
  };
  material.customProgramCacheKey = () => `away-solid-${key}`;
}

function createWireMaterial(uniforms, { strength = 1, own = false } = {}) {
  return new THREE.ShaderMaterial({
    wireframe: true,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: uniforms.uTime,
      uWire: own ? { value: 1 } : uniforms.uWire,
      uColor: { value: ACCENT.clone() },
      uStrength: { value: strength },
    },
    vertexShader: `
      varying float vY;
      void main() {
        vY = position.y;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uWire;
      uniform vec3 uColor;
      uniform float uStrength;
      varying float vY;
      void main() {
        // 自上而下扫过的光带
        float scan = pow(fract(-vY * 9.0 - uTime * 0.45), 5.0);
        float a = (0.035 + scan * 0.6) * uWire * uStrength;
        gl_FragColor = vec4(uColor * (0.6 + scan * 1.6), a);
      }
    `,
  });
}

function createDiscoMaterial({ matcap, mask, light }, uniforms) {
  // 与原站一致：白色高金属度镜面 + 原站的亮色摄影棚 HDRI(1.5)，再叠加镜面球 matcap 和白色 logo 遮罩
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.9,
    roughness: 0,
    transparent: true,
    envMap: light,
    envMapIntensity: 1.5,
  });
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, {
      uReveal: uniforms.uReveal,
      tDiscoMatcap: { value: matcap },
      tDiscoMask: { value: mask },
    });
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        varying vec2 vDiscoUv;
        varying vec3 vLocalPos;`)
      .replace('#include <uv_vertex>', `#include <uv_vertex>
        vDiscoUv = uv;
        vLocalPos = position;`);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform sampler2D tDiscoMatcap;
        uniform sampler2D tDiscoMask;
        uniform float uReveal;
        varying vec2 vDiscoUv;
        varying vec3 vLocalPos;`)
      .replace('#include <dithering_fragment>', `#include <dithering_fragment>
        vec3 vDir = normalize(vViewPosition);
        vec3 mx = normalize(vec3(vDir.z, 0.0, -vDir.x));
        vec3 my = cross(vDir, mx);
        vec2 matcapUv = vec2(dot(mx, vNormal), dot(my, vNormal)) * 0.495 + 0.5;
        float logo = texture2D(tDiscoMask, vDiscoUv).r;
        vec3 facets = texture2D(tDiscoMatcap, matcapUv).rgb;
        vec3 col = mix(max(facets, vec3(0.0, 0.114, 0.144)) * outgoingLight, vec3(1.0), logo);
        gl_FragColor = vec4(col, step(mix(0.0425, -0.0425, uReveal), vLocalPos.y));`);
  };
  material.customProgramCacheKey = () => 'away-disco';
  return material;
}

function createFlareMaterial(texture, uniforms) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: uniforms.uTime,
      uReveal: uniforms.uReveal,
      tFlare: { value: texture },
    },
    vertexShader: `
      attribute float aRandom;
      uniform float uTime;
      varying vec2 vUv;
      varying float vFacing;
      void main() {
        vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * vec3(0.0, 0.0, 1.0));
        vec4 center = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float size = 0.11 + aRandom * 0.12;
        float twinkle = 0.75 + 0.25 * sin(uTime * (2.0 + aRandom * 3.0) + aRandom * 40.0);
        center.xy += position.xy * size * twinkle;
        gl_Position = projectionMatrix * center;
        vUv = uv;
        vFacing = smoothstep(0.55, 0.92, n.z);
      }
    `,
    fragmentShader: `
      uniform sampler2D tFlare;
      uniform float uReveal;
      varying vec2 vUv;
      varying float vFacing;
      void main() {
        vec4 tex = texture2D(tFlare, vUv);
        gl_FragColor = vec4(tex.rgb, tex.a * vFacing * uReveal);
      }
    `,
  });
}

// ---------- 辉光后期（保留透明背景，让光晕溢出到页面上） ----------
const QUAD_VERT = `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

function createPost(renderer) {
  const quadScene = new THREE.Scene();
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
  quad.frustumCulled = false;
  quadScene.add(quad);

  const rtOpts = { type: THREE.HalfFloatType, depthBuffer: false };
  const scene = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
  const factors = [0.5, 0.25, 0.125];
  const levels = factors.map(() => [new THREE.WebGLRenderTarget(1, 1, rtOpts), new THREE.WebGLRenderTarget(1, 1, rtOpts)]);

  const bright = new THREE.ShaderMaterial({
    uniforms: { tInput: { value: null }, uThreshold: { value: 0.8 } },
    vertexShader: QUAD_VERT,
    fragmentShader: `
      uniform sampler2D tInput;
      uniform float uThreshold;
      varying vec2 vUv;
      void main() {
        vec4 c = texture2D(tInput, vUv);
        float l = max(c.r, max(c.g, c.b));
        float w = smoothstep(uThreshold, uThreshold + 0.5, l);
        gl_FragColor = vec4(c.rgb * w, 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
  });

  const blur = new THREE.ShaderMaterial({
    uniforms: { tInput: { value: null }, uDir: { value: new THREE.Vector2() } },
    vertexShader: QUAD_VERT,
    fragmentShader: `
      uniform sampler2D tInput;
      uniform vec2 uDir;
      varying vec2 vUv;
      void main() {
        vec3 c = texture2D(tInput, vUv).rgb * 0.227027;
        c += texture2D(tInput, vUv + uDir * 1.384615).rgb * 0.316216;
        c += texture2D(tInput, vUv - uDir * 1.384615).rgb * 0.316216;
        c += texture2D(tInput, vUv + uDir * 3.230769).rgb * 0.070270;
        c += texture2D(tInput, vUv - uDir * 3.230769).rgb * 0.070270;
        gl_FragColor = vec4(c, 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
  });

  const copy = new THREE.ShaderMaterial({
    uniforms: { tInput: { value: null } },
    vertexShader: QUAD_VERT,
    fragmentShader: `
      uniform sampler2D tInput;
      varying vec2 vUv;
      void main() { gl_FragColor = vec4(texture2D(tInput, vUv).rgb, 1.0); }
    `,
    depthTest: false,
    depthWrite: false,
  });

  const composite = new THREE.ShaderMaterial({
    uniforms: {
      tScene: { value: scene.texture },
      tBloom0: { value: levels[0][0].texture },
      tBloom1: { value: levels[1][0].texture },
      tBloom2: { value: levels[2][0].texture },
      uStrength: { value: 0.75 },
    },
    vertexShader: QUAD_VERT,
    fragmentShader: `
      uniform sampler2D tScene;
      uniform sampler2D tBloom0;
      uniform sampler2D tBloom1;
      uniform sampler2D tBloom2;
      uniform float uStrength;
      varying vec2 vUv;
      void main() {
        vec4 base = texture2D(tScene, vUv);
        vec3 bloom = (texture2D(tBloom0, vUv).rgb * 0.5 + texture2D(tBloom1, vUv).rgb * 0.8 + texture2D(tBloom2, vUv).rgb * 1.1) * uStrength;
        vec3 col = base.rgb + bloom;
        float a = clamp(base.a + max(bloom.r, max(bloom.g, bloom.b)), 0.0, 1.0);
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        // 预乘 alpha：颜色不能超过透明度
        gl_FragColor.rgb = min(gl_FragColor.rgb, vec3(gl_FragColor.a));
      }
    `,
    depthTest: false,
    depthWrite: false,
    blending: THREE.NoBlending,
  });

  function pass(material, target) {
    quad.material = material;
    renderer.setRenderTarget(target);
    renderer.render(quadScene, quadCam);
  }

  return {
    scene,
    composite,
    setSize(w, h) {
      scene.setSize(w, h);
      factors.forEach((f, i) => {
        const lw = Math.max(1, Math.round(w * f));
        const lh = Math.max(1, Math.round(h * f));
        levels[i][0].setSize(lw, lh);
        levels[i][1].setSize(lw, lh);
      });
    },
    render() {
      bright.uniforms.tInput.value = scene.texture;
      pass(bright, levels[0][0]);
      let src = levels[0][0];
      levels.forEach(([a, b], i) => {
        if (i > 0) {
          copy.uniforms.tInput.value = src.texture;
          pass(copy, a);
        }
        blur.uniforms.tInput.value = a.texture;
        blur.uniforms.uDir.value.set(1 / a.width, 0);
        pass(blur, b);
        blur.uniforms.tInput.value = b.texture;
        blur.uniforms.uDir.value.set(0, 1 / a.height);
        pass(blur, a);
        src = a;
      });
      pass(composite, null);
    },
    dispose() {
      scene.dispose();
      levels.forEach((pair) => pair.forEach((t) => t.dispose()));
      [bright, blur, copy, composite].forEach((m) => m.dispose());
      quad.geometry.dispose();
    },
  };
}

// 环境贴图的基础朝向：让两盏柔光箱落在镜头一侧（头盔正前方）
const ENV_YAW = 0;

export default {
  name: 'HelmetStage',
  props: {
    // dark: 黑橙涂装（首页）; chrome: 金属橙（404）
    livery: { type: String, default: 'dark' },
    // 头盔占画面高度的比例
    fill: { type: Number, default: 0.58 },
    // 头盔中心在画面中的竖直偏移（-1 ~ 1）
    offsetY: { type: Number, default: 0 },
    // 是否允许切换 disco 头盔（由页面派发 away:disco-toggle 事件触发）
    discoEgg: { type: Boolean, default: false },
    // 小号线框头盔要画进的 DOM 元素（左下角）
    miniTarget: { type: Object, default: null },
  },
  emits: ['progress', 'ready', 'error', 'disco'],
  mounted() {
    this.t = {
      pointer: new THREE.Vector2(0, 0),
      target: new THREE.Vector2(0, 0),
      smooth: new THREE.Vector2(0, 0),
      lastPointerAt: 0,
      discoOn: false,
      intro: { value: 0 },
      disposed: false,
    };
    this.onProgress = (p) => {
      this.$emit('progress', p);
      window.dispatchEvent(new CustomEvent('away:stage-progress', { detail: p }));
    };
    progressListeners.add(this.onProgress);

    try {
      this.initRenderer();
    } catch (err) {
      console.error('WebGL 初始化失败:', err);
      this.fail(err);
      return;
    }

    loadHelmetAssets()
      .then((assets) => {
        if (this.t.disposed) return;
        this.buildScene(assets);
        // 先编译 shader 再宣布 ready，避免揭幕时卡顿
        this.t.renderer.compile(this.t.scene, this.t.camera);
        this.$emit('progress', 1);
        this.$emit('ready');
        window.dispatchEvent(new CustomEvent('away:stage-ready'));
        // 幕布没有遮挡时（转场已结束）直接开始入场动画，否则等 away:reveal
        if (!document.documentElement.classList.contains('is-covered')) this.playIntro();
      })
      .catch((err) => {
        console.error('头盔模型加载失败:', err);
        this.fail(err);
      });

    window.addEventListener('pointermove', this.onPointerMove, { passive: true });
    window.addEventListener('away:reveal', this.playIntro);
    document.addEventListener('visibilitychange', this.onVisibility);
    if (this.discoEgg) window.addEventListener('away:disco-toggle', this.toggleDisco);
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.$refs.container);
  },
  beforeUnmount() {
    const t = this.t;
    if (!t) return;
    t.disposed = true;
    progressListeners.delete(this.onProgress);
    cancelAnimationFrame(t.raf);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('away:reveal', this.playIntro);
    document.removeEventListener('visibilitychange', this.onVisibility);
    window.removeEventListener('away:disco-toggle', this.toggleDisco);
    if (this.resizeObserver) this.resizeObserver.disconnect();
    if (t.timeline) t.timeline.kill();
    if (t.uniforms) gsap.killTweensOf([t.uniforms.uReveal, t.uniforms.uLiveryMix]);
    if (t.discoOn) {
      document.documentElement.classList.remove('is-disco');
      window.dispatchEvent(new CustomEvent('away:disco', { detail: { on: false } }));
    }
    // 只释放本实例创建的 GPU 资源；共享的几何体 / 贴图留在缓存中复用
    if (t.materials) t.materials.forEach((m) => m.dispose());
    if (t.envRT) t.envRT.dispose();
    if (t.flareGeometry) t.flareGeometry.dispose();
    if (t.post) t.post.dispose();
    if (t.renderer) {
      t.renderer.dispose();
      t.renderer.forceContextLoss();
    }
  },
  methods: {
    fail(err) {
      this.$emit('error', err);
      window.dispatchEvent(new CustomEvent('away:stage-ready'));
    },

    initRenderer() {
      const t = this.t;
      const renderer = new THREE.WebGLRenderer({
        canvas: this.$refs.canvas,
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.autoClear = false;
      t.renderer = renderer;
      t.post = createPost(renderer);

      t.scene = new THREE.Scene();
      t.camera = new THREE.PerspectiveCamera(20, 1, 0.05, 50);
      t.camera.position.set(0, 0, 2);

      t.miniScene = new THREE.Scene();
      t.miniCamera = new THREE.PerspectiveCamera(22, 1, 0.05, 50);
      t.miniCamera.position.set(0, 0.02, 2);
      t.clock = new THREE.Clock();
      this.resize();
    },

    buildScene(assets) {
      const t = this.t;
      const { scene, renderer } = t;
      const chrome = this.livery === 'chrome';

      // 光照完全来自环境贴图：两盏柔光箱位于头盔正前方（镜头一侧），
      // 在高光漆面上反射出大块的窗形高光，和原站一致；鼠标移动时轻微转动环境，让反光在头盔上滑动
      const pmrem = new THREE.PMREMGenerator(renderer);
      t.envRT = pmrem.fromEquirectangular(assets.hdr);
      pmrem.dispose();
      scene.environment = t.envRT.texture;
      // 正面柔光箱的亮度：太高会把漆面上的反光烧成白块
      t.envBase = chrome ? 0.6 : 0.45;
      scene.environmentIntensity = 0;

      t.uniforms = {
        uTime: { value: 0 },
        uReveal: { value: 0 }, // disco 外壳
        uLiveryMix: { value: 0 }, // 涂装：0 橙色 → 1 白色 disco
        tNextLivery: { value: null },
        uSolid: { value: 0 }, // 实体化进度
        uWire: { value: 0 }, // 线框强度
        uAccent: { value: ACCENT.clone() },
      };

      const livery = chrome ? assets.liveries.bright : assets.liveries.dark;
      t.uniforms.tNextLivery.value = livery; // disco 涂装加载前先用自己占位
      const maxAniso = renderer.capabilities.getMaxAnisotropy();
      livery.anisotropy = maxAniso;
      assets.helmet.normal.anisotropy = maxAniso;

      // 还原原站的头盔材质：高光漆面（roughness 0.05）+ 法线 / 金属度贴图 + 环境反射 1.5
      const shell = new THREE.MeshPhysicalMaterial({
        map: livery,
        normalMap: assets.helmet.normal,
        metalnessMap: chrome ? null : assets.helmet.metallic,
        metalness: chrome ? 0.85 : 0,
        roughness: chrome ? 0.12 : 0.05,
        envMapIntensity: 1.5,
        side: THREE.DoubleSide,
      });
      addSolidReveal(shell, t.uniforms, { darkenBack: true, livery: true, key: 'shell' });

      const glass = new THREE.MeshPhysicalMaterial({
        map: assets.glass.base,
        normalMap: assets.glass.normal,
        roughnessMap: assets.glass.roughness,
        metalnessMap: assets.helmet.metallic,
        envMapIntensity: 1.5,
      });
      addSolidReveal(glass, t.uniforms, { key: 'glass' });

      const plastic = new THREE.MeshMatcapMaterial({
        matcap: assets.plasticMatcap,
        color: 0x2a2a26,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      });

      const wire = createWireMaterial(t.uniforms);
      const miniWire = createWireMaterial(t.uniforms, { strength: 0.32, own: true });
      t.materials = [shell, glass, plastic, wire, miniWire];
      t.miniWire = miniWire;
      t.shell = shell;

      const model = assets.scene.clone();
      model.traverse((child) => {
        if (!child.isMesh) return;
        if (child.name === 'helmet') child.material = shell;
        else if (child.name === 'glass') child.material = glass;
        else child.material = plastic;
      });

      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);
      t.modelSize = box.getSize(new THREE.Vector3());

      // 网格线框（略大一圈，包住头盔）
      const wireMesh = new THREE.Mesh(assets.wireGeometry, wire);
      wireMesh.position.copy(model.position);
      const wireHolder = new THREE.Group();
      wireHolder.scale.setScalar(1.006);
      wireHolder.add(wireMesh);
      wireHolder.renderOrder = 3;

      t.pivot = new THREE.Group();
      t.float = new THREE.Group();
      t.pivot.add(model, wireHolder);
      t.float.add(t.pivot);
      scene.add(t.float);
      t.model = model;

      // 左下角的小号线框头盔
      if (this.miniTarget) {
        const mini = new THREE.Mesh(assets.wireGeometry, miniWire);
        mini.position.copy(model.position);
        t.miniPivot = new THREE.Group();
        t.miniPivot.add(mini);
        t.miniPivot.scale.setScalar(0.5 / t.modelSize.y);
        t.miniScene.add(t.miniPivot);
      }

      // 不使用点光 / 方向光（它们会在漆面上反射出刺眼的小点），光照完全来自环境贴图


      this.layout();
      t.clock.start();
      this.loop();
    },

    // 入场：线框扫描 → 自上而下实体化 → 发光
    playIntro() {
      const t = this.t;
      if (!t || !t.uniforms || t.introPlayed) return;
      t.introPlayed = true;
      const u = t.uniforms;
      t.timeline = gsap.timeline()
        .to(u.uWire, { value: 1, duration: 0.8, ease: 'power2.out' }, 0)
        .to(t.intro, { value: 1, duration: 3.4, ease: 'expo.out' }, 0)
        .to(u.uSolid, { value: 1, duration: 1.8, ease: 'power3.inOut' }, 0.8)
        .to(u.uWire, { value: 0.16, duration: 1.4, ease: 'power2.inOut' }, 2.2);
    },

    layout() {
      const t = this.t;
      if (!t.float || !t.modelSize) return;
      const { camera } = t;
      const dist = camera.position.z;
      const visibleH = 2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const visibleW = visibleH * camera.aspect;
      const byHeight = (visibleH * this.fill) / t.modelSize.y;
      const byWidth = (visibleW * 0.78) / Math.max(t.modelSize.x, t.modelSize.z);
      t.float.scale.setScalar(Math.min(byHeight, byWidth));
      t.baseY = (this.offsetY * visibleH) / 2;
      t.float.position.y = t.baseY;
    },

    resize() {
      const t = this.t;
      if (!t || !t.renderer) return;
      const el = this.$refs.container;
      const w = el.clientWidth || window.innerWidth;
      const h = el.clientHeight || window.innerHeight;
      t.renderer.setSize(w, h, false);
      t.camera.aspect = w / h;
      t.camera.updateProjectionMatrix();
      const size = t.renderer.getDrawingBufferSize(new THREE.Vector2());
      t.post.setSize(size.x, size.y);
      this.layout();
    },

    onPointerMove(e) {
      const t = this.t;
      t.pointer.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
      t.lastPointerAt = performance.now();
    },
    onVisibility() {
      const t = this.t;
      if (document.hidden) {
        cancelAnimationFrame(t.raf);
        t.raf = 0;
      } else if (t.pivot && !t.raf) {
        t.clock.getDelta();
        this.loop();
      }
    },

    async toggleDisco() {
      const t = this.t;
      if (!t.pivot) return;
      t.discoOn = !t.discoOn;
      document.documentElement.classList.toggle('is-disco', t.discoOn);
      window.dispatchEvent(new CustomEvent('away:disco', { detail: { on: t.discoOn } }));
      this.$emit('disco', t.discoOn);

      if (t.discoOn && !t.disco) {
        try {
          const assets = await loadDiscoAssets();
          if (t.disposed) return;
          this.buildDisco(assets);
        } catch (err) {
          console.error('disco 模型加载失败:', err);
          return;
        }
      }
      // 与原站一致：disco 外壳和底下的涂装同时用 2 秒 expo 过渡
      gsap.to(t.uniforms.uReveal, { value: t.discoOn ? 1 : 0, duration: 2, ease: 'expo.inOut' });
      gsap.to(t.uniforms.uLiveryMix, { value: t.discoOn ? 1 : 0, duration: 2, ease: 'expo.inOut' });
    },

    buildDisco(assets) {
      const t = this.t;
      const source = assets.scene.getObjectByName('disco') || assets.scene.children[0];
      const disco = source.clone();
      const material = createDiscoMaterial(assets, t.uniforms);
      disco.material = material;
      disco.renderOrder = 2;

      const empties = disco.children.slice();
      t.flareGeometry = new THREE.PlaneGeometry(1, 1);
      const randoms = new Float32Array(empties.length).map(() => Math.random());
      t.flareGeometry.setAttribute('aRandom', new THREE.InstancedBufferAttribute(randoms, 1));
      const flareMaterial = createFlareMaterial(assets.flare, t.uniforms);
      const flares = new THREE.InstancedMesh(t.flareGeometry, flareMaterial, empties.length);
      const dummy = new THREE.Object3D();
      empties.forEach((empty, i) => {
        dummy.position.copy(empty.position);
        dummy.quaternion.copy(empty.quaternion);
        dummy.updateMatrix();
        flares.setMatrixAt(i, dummy.matrix);
      });
      flares.renderOrder = 99;
      flares.frustumCulled = false;
      empties.forEach((empty) => disco.remove(empty));
      disco.add(flares);

      t.model.add(disco);
      t.disco = disco;
      t.uniforms.tNextLivery.value = assets.livery;
      t.materials.push(material, flareMaterial);
    },

    loop() {
      const t = this.t;
      if (t.disposed) return;
      t.raf = requestAnimationFrame(this.loop);
      const dt = Math.min(t.clock.getDelta(), 0.05);
      const time = t.clock.elapsedTime;
      const intro = t.intro.value;
      const u = t.uniforms;

      // 没有鼠标（触屏 / 长时间未动）时缓慢自动摆动
      const idle = performance.now() - t.lastPointerAt > 4000;
      if (idle) t.target.set(Math.sin(time * 0.3) * 0.5, Math.sin(time * 0.2) * 0.22);
      else t.target.copy(t.pointer);
      const k = 1 - Math.pow(0.002, dt);
      t.smooth.lerp(t.target, k * 0.5);
      const { x, y } = t.smooth;

      // 头盔朝向光标，入场时从侧面转过来
      t.pivot.rotation.y = x * 0.72 - (1 - intro) * 1.6;
      t.pivot.rotation.x = -y * 0.3 + 0.06;
      t.pivot.rotation.z = -x * 0.05;
      t.float.position.y = (t.baseY || 0) + Math.sin(time * 0.8) * 0.006;


      t.scene.environmentIntensity = t.envBase * intro;
      // 柔光箱保持在头盔前方，随鼠标左右 / 上下轻轻摆动
      t.scene.environmentRotation.set(-y * 0.25, ENV_YAW + x * 0.55, 0);

      u.uTime.value = time;
      const discoActive = t.discoOn || u.uReveal.value > 0.001;
      if (t.disco) t.disco.visible = discoActive;
      // 左下角的小线框头盔：disco 时变成彩色
      if (t.miniWire) {
        if (t.discoOn) t.miniWire.uniforms.uColor.value.setHSL((time * 0.15) % 1, 1, 0.6);
        else t.miniWire.uniforms.uColor.value.copy(ACCENT);
      }

      const { renderer } = t;
      // 主场景 → 离屏 → 辉光 → 屏幕
      renderer.setRenderTarget(t.post.scene);
      renderer.setClearColor(0x000000, 0);
      renderer.clear();
      renderer.render(t.scene, t.camera);
      t.post.render();

      // 左下角线框头盔：直接画到画布的对应区域
      if (t.miniPivot && this.miniTarget) {
        const cr = this.$refs.container.getBoundingClientRect();
        const r = this.miniTarget.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) {
          const left = r.left - cr.left;
          const bottom = cr.bottom - r.bottom;
          t.miniCamera.aspect = r.width / r.height;
          t.miniCamera.updateProjectionMatrix();
          t.miniPivot.rotation.y = time * 0.6;
          t.miniPivot.rotation.x = 0.15;
          renderer.setRenderTarget(null);
          renderer.setScissorTest(true);
          renderer.setScissor(left, bottom, r.width, r.height);
          renderer.setViewport(left, bottom, r.width, r.height);
          renderer.render(t.miniScene, t.miniCamera);
          renderer.setScissorTest(false);
          renderer.setViewport(0, 0, cr.width, cr.height);
        }
      }
    },
  },
};
</script>

<style scoped>
.helmet-stage {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.helmet-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
