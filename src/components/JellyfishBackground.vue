<template>
  <div class="jellyfish-bg-container" ref="container">
    <canvas ref="canvas" class="jellyfish-canvas"></canvas>
  </div>
</template>

<script>
// 极速自包含 3D 柏林噪声 (Perlin Noise 3D) 生成器
class PerlinNoise3D {
  constructor() {
    this.p = new Uint8Array(512);
    this.permutation = [
      151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,
      8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,
      35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,
      134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,
      55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,
      18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,
      250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,
      189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,
      172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,
      228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,
      107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,
      138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
    ];
    for (let i = 0; i < 256; i++) {
      this.p[i] = this.permutation[i];
      this.p[256 + i] = this.permutation[i];
    }
  }

  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  lerp(t, a, b) {
    return a + t * (b - a);
  }

  grad(hash, x, y, z) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  noise(x, y, z) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    const A = this.p[X] + Y, AA = this.p[A] + Z, AB = this.p[A + 1] + Z;
    const B = this.p[X + 1] + Y, BA = this.p[B] + Z, BB = this.p[B + 1] + Z;

    return this.lerp(w,
      this.lerp(v,
        this.lerp(u, this.grad(this.p[AA], x, y, z), this.grad(this.p[BA], x - 1, y, z)),
        this.lerp(u, this.grad(this.p[AB], x, y - 1, z), this.grad(this.p[BB], x - 1, y - 1, z))
      ),
      this.lerp(v,
        this.lerp(u, this.grad(this.p[AA + 1], x, y, z - 1), this.grad(this.p[BA + 1], x - 1, y, z - 1)),
        this.lerp(u, this.grad(this.p[AB + 1], x, y - 1, z - 1), this.grad(this.p[BB + 1], x - 1, y - 1, z - 1))
      )
    );
  }
}

export default {
  name: 'JellyfishBackground',
  data() {
    return {
      animationFrameId: null,
      width: 0,
      height: 0,
      dpr: 1,
      mouseX: 0,
      mouseY: 0,
      baseRotX: 0.58,
      baseRotY: 0.0,
      targetRotX: 0.58,
      targetRotY: 0.0,
      rotX: 0.58,
      rotY: 0.0,
      time: 0,
      gridNodes: [],
      // 降低网格采样密度，让单个 3D 网格块与波浪细节变大变清晰
      gridNX: 36,
      gridNZ: 36,
      perlin: new PerlinNoise3D(),
    };
  },
  mounted() {
    this.initCanvas();
    this.createGrid();
    this.addEventListeners();
    this.animate();
  },
  beforeUnmount() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    initCanvas() {
      const container = this.$refs.container;
      if (!container) return;
      
      this.dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      this.width = container.clientWidth;
      this.height = container.clientHeight;

      const canvas = this.$refs.canvas;
      canvas.width = Math.floor(this.width * this.dpr);
      canvas.height = Math.floor(this.height * this.dpr);
      canvas.style.width = `${this.width}px`;
      canvas.style.height = `${this.height}px`;

      this.ctx = canvas.getContext('2d');
      this.ctx.scale(this.dpr, this.dpr);
    },

    createGrid() {
      this.gridNodes = [];
      const nx = this.gridNX;
      const nz = this.gridNZ;

      // 保持合理的 3D 视角比例，使线条网格块大而清晰
      const sizeX = Math.min(this.width, this.height) * 1.6;
      const sizeZ = Math.min(this.width, this.height) * 1.6;

      for (let i = 0; i < nz; i++) {
        const u = (i / (nz - 1)) * 2 - 1; // -1 to 1 (Z)
        for (let j = 0; j < nx; j++) {
          const v = (j / (nx - 1)) * 2 - 1; // -1 to 1 (X)

          const distEdge = Math.max(Math.abs(u), Math.abs(v));
          const edgeAlpha = Math.max(0, 1 - Math.pow(distEdge, 2.2));

          const x = v * (sizeX * 0.5);
          const z = u * (sizeZ * 0.5);

          this.gridNodes.push({
            u,
            v,
            x,
            z,
            edgeAlpha,
            i,
            j,
          });
        }
      }
    },

    addEventListeners() {
      window.addEventListener('resize', this.handleResize, { passive: true });
      window.addEventListener('mousemove', this.handleMouseMove, { passive: true });
    },

    handleResize() {
      this.initCanvas();
      this.createGrid();
    },

    handleMouseMove(e) {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      
      this.targetRotX = 0.58 + ny * 0.2;
      this.targetRotY = 0.0 + nx * 0.3;
    },

    animate() {
      this.time += 0.008;
      
      const idleYaw = Math.sin(this.time * 0.35) * 0.035;
      
      const clampedTargetX = Math.max(0.4, Math.min(0.78, this.targetRotX));
      const clampedTargetY = Math.max(-0.3, Math.min(0.3, this.targetRotY + idleYaw));

      this.rotX += (clampedTargetX - this.rotX) * 0.05;
      this.rotY += (clampedTargetY - this.rotY) * 0.05;

      this.render();
      this.animationFrameId = requestAnimationFrame(this.animate);
    },

    // 增大波浪本身的波长与起伏，让单个波丘的大细节更加突出
    calculateDramaticTerrainHeight(x, z, t) {
      const n1 = this.perlin.noise(x * 0.0018, z * 0.0018, t * 0.3) * 240;
      const smoothWave = Math.sin(x * 0.002 + t * 0.4) * Math.cos(z * 0.002 + t * 0.3) * 90;

      return -(n1 + smoothWave);
    },

    render() {
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;

      ctx.clearRect(0, 0, w, h);

      // 投影中心向下居中呈现
      const cx = w * 0.5;
      const cy = h * 0.62;

      // 柔和背景晕
      const bgGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(w, h) * 0.52);
      bgGlow.addColorStop(0, 'rgba(140, 215, 250, 0.09)');
      bgGlow.addColorStop(0.5, 'rgba(100, 180, 240, 0.02)');
      bgGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, w, h);

      const focalLength = 560;
      const cameraZ = 540;

      const cosX = Math.cos(this.rotX);
      const sinX = Math.sin(this.rotX);
      const cosY = Math.cos(this.rotY);
      const sinY = Math.sin(this.rotY);

      const nz = this.gridNZ;
      const nx = this.gridNX;

      const projectedGrid = [];
      let idx = 0;

      for (let i = 0; i < nz; i++) {
        const projRow = [];
        for (let j = 0; j < nx; j++) {
          const node = this.gridNodes[idx++];

          const x0 = node.x;
          const z0 = node.z;
          const y0 = this.calculateDramaticTerrainHeight(node.x, node.z, this.time);

          const y1 = y0 * cosX - z0 * sinX;
          const z1 = y0 * sinX + z0 * cosX;

          const x2 = x0 * cosY + z1 * sinY;
          const z2 = -x0 * sinY + z1 * cosY;
          const y2 = y1;

          const effZ = z2 + cameraZ;
          const scale = effZ > 10 ? focalLength / effZ : 0;

          const px = cx + x2 * scale;
          const py = cy + y2 * scale;

          projRow.push({
            px,
            py,
            scale,
            z: z2,
            edgeAlpha: node.edgeAlpha,
            heightVal: -y0,
          });
        }
        projectedGrid.push(projRow);
      }

      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < nz; i++) {
        for (let j = 0; j < nx; j++) {
          const p1 = projectedGrid[i][j];
          if (p1.edgeAlpha <= 0.01) continue;

          const hRatio = Math.max(0, Math.min(1, (p1.heightVal + 120) / 300));

          // X 方向线条 (线条变粗更清晰)
          if (j < nx - 1) {
            const p2 = projectedGrid[i][j + 1];
            if (p2.edgeAlpha > 0.01) {
              const alpha = Math.min(p1.edgeAlpha, p2.edgeAlpha) * Math.max(0.08, Math.min(0.85, (p1.z + 300) / 500));
              
              if (alpha > 0.02) {
                ctx.beginPath();
                ctx.moveTo(p1.px, p1.py);
                ctx.lineTo(p2.px, p2.py);

                const lineAlpha = alpha * (0.2 + hRatio * 0.35);
                ctx.strokeStyle = `rgba(150, 220, 255, ${lineAlpha})`;
                ctx.lineWidth = Math.max(0.7, (1.0 + hRatio * 1.2) * p1.scale);
                ctx.stroke();
              }
            }
          }

          // Z 方向线条
          if (i < nz - 1) {
            const p2 = projectedGrid[i + 1][j];
            if (p2.edgeAlpha > 0.01) {
              const alpha = Math.min(p1.edgeAlpha, p2.edgeAlpha) * Math.max(0.08, Math.min(0.85, (p1.z + 300) / 500));

              if (alpha > 0.02) {
                ctx.beginPath();
                ctx.moveTo(p1.px, p1.py);
                ctx.lineTo(p2.px, p2.py);

                const lineAlpha = alpha * (0.2 + hRatio * 0.35);
                ctx.strokeStyle = `rgba(150, 220, 255, ${lineAlpha})`;
                ctx.lineWidth = Math.max(0.7, (1.0 + hRatio * 1.2) * p1.scale);
                ctx.stroke();
              }
            }
          }

          // 放大发光节点细节
          if (p1.edgeAlpha > 0.25 && (i % 2 === 0 && j % 2 === 0)) {
            if (hRatio > 0.55) {
              const dotAlpha = p1.edgeAlpha * Math.max(0.18, Math.min(0.85, (p1.z + 300) / 500));
              ctx.beginPath();
              ctx.arc(p1.px, p1.py, Math.max(0.9, (1.3 + hRatio * 1.3) * p1.scale), 0, Math.PI * 2);
              ctx.fillStyle = `rgba(180, 230, 255, ${dotAlpha * hRatio * 0.6})`;
              ctx.fill();
            }
          }
        }
      }

      ctx.globalCompositeOperation = 'source-over';
    },
  },
};
</script>

<style scoped>
.jellyfish-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: auto;
  z-index: 0;
}

.jellyfish-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
