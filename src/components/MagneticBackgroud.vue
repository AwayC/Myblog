<template>
  <div class="magnetic-background-container">
    <svg class="magnetic-svg"></svg>
  </div>
</template>

<script>
// 确保您的项目已安装 gsap: npm install gsap
import gsap from 'gsap'; 

export default {
  name: 'MagneticBackground',
  data() {
    return {
      magnetic: {
        container: null, // SVG DOM 元素
        height: 0,
        width: 0,
        lines: 16, // 增加网格密度
        rows: 16,  // 增加网格密度
        top: 0,
        left: 0,
        mouse_radius: 110, // 鼠标影响范围
        balls: [], // 存储 SVG 圆形元素
      },
    };
  },
  mounted() {
    // 组件挂载后，初始化磁性动画
    // 使用 $refs 是一种更推荐的方式来获取 DOM 元素，但在这种情况下，
    // this.$el.querySelector(".magnetic-svg") 也能工作，因为 SVG 是本组件的直接子元素。
    this.magnetic.container = this.$el.querySelector(".magnetic-svg"); 
    this.initMagnetic();

    // 监听窗口大小变化以重新计算容器尺寸和重新绘制网格
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    // 组件销毁前，移除事件监听器，避免内存泄漏
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("mousemove", this.handleMouseMove); // 移除鼠标移动监听器

    // 销毁所有 GSAP 动画，防止内存泄漏
    this.magnetic.balls.forEach(ball => {
      if (ball.animation) {
        ball.animation.kill();
      }
    });
  },
  methods: {
    initMagnetic() {
      this.resizeMagnetic(); // 初始化尺寸
      this.create_yoyo(2); // 创建小球和线条，初始半径可以小一点，更有粒子感

      // 在 document 上监听鼠标移动，让动画对整个页面有效
      document.addEventListener("mousemove", this.handleMouseMove);
    },
    handleResize() {
      // 当窗口尺寸变化时，重新计算容器尺寸并重新创建动画元素
      this.resizeMagnetic();
      this.create_yoyo(2); // 重新创建小球和线条，以适应新尺寸
    },
    handleMouseMove(e) {
      this.move_balls(e.x, e.y);
    },
    resizeMagnetic() {
      // 获取 SVG 容器的实时尺寸和位置
      const rect = this.magnetic.container.getBoundingClientRect();
      this.magnetic.width = rect.width;
      this.magnetic.height = rect.height;
      this.magnetic.top = rect.top;
      this.magnetic.left = rect.left;
    },
    create_yoyo(radius) {
      // 清空旧的球体和线条，以防组件重新渲染或尺寸改变时重复创建
      this.magnetic.balls = [];
      this.magnetic.container.innerHTML = ''; // 清空 SVG 容器内的所有子元素

      for (let r = 0; r <= this.magnetic.rows; r++) {
        for (let l = 0; l <= this.magnetic.lines; l++) {
          // 计算每个点的初始位置
          let x = (this.magnetic.width / this.magnetic.lines) * l;
          let y = (this.magnetic.height / this.magnetic.rows) * (r + 1);

          // 创建 SVG 圆形 (大球，用于动画)
          const ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          ball.setAttribute("cx", x);
          ball.setAttribute("cy", y);
          ball.setAttribute("r", radius * 2); // 稍微大一点
          ball.setAttribute("fill", "#00e67650"); // 赛博朋克绿色

          // 创建 SVG 圆形 (小点，固定在原位)
          const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          point.setAttribute("cx", x);
          point.setAttribute("cy", y);
          point.setAttribute("r", radius); // 小点半径
          point.setAttribute("fill", "#00b0ff"); // 赛博朋克蓝色

          // 创建 SVG 直线 (连接小点和大球)
          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", x); // 线条起点固定在小点位置
          line.setAttribute("y1", y);
          line.setAttribute("x2", x); // 线条终点初始与起点相同
          line.setAttribute("y2", y);
          line.setAttribute("stroke", "#ccff00"); // 赛博朋克紫色线条
          line.setAttribute("stroke-width", 1); // 细一点的线条

          // 将元素添加到 SVG 容器
          this.magnetic.container.appendChild(line);
          this.magnetic.container.appendChild(point);
          this.magnetic.container.appendChild(ball);

          // 将 line 和原始坐标绑定到 ball 对象上，方便后续动画控制
          ball.line = line;
          ball.ori_x = x; // 原始 x 坐标
          ball.ori_y = y; // 原始 y 坐标
          this.magnetic.balls.push(ball); // 将 ball 存储到数组中
        }
      }
    },
    move_balls(x, y) {
      this.magnetic.balls.forEach(ball => {
        const mouse_x = x - this.magnetic.left;
        const mouse_y = y - this.magnetic.top;
        const dx = ball.ori_x - mouse_x;
        const dy = ball.ori_y - mouse_y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= this.magnetic.mouse_radius) {
          // const opacity = Math.max(0, Math.min(1, 1 - distance / this.magnetic.mouse_radius));

          ball.move_x = (dx / distance) * this.magnetic.mouse_radius + mouse_x;
          ball.move_y = (dy / distance) * this.magnetic.mouse_radius + mouse_y;

          if (ball.animation) ball.animation.kill();

          ball.animation = gsap.timeline()
            .to(ball, {
              duration: 0.5,
              ease: "power3.out",
              attr: {
                cx: ball.move_x,
                cy: ball.move_y,
                fill: `#00e676ff`,
              },
            })
            .to(ball.line, {
              duration: 0.5,
              ease: "power3.out",
              attr: {
                x2: ball.move_x,
                y2: ball.move_y,
              },
            }, "<");
        } else {
          if (ball.animation) ball.animation.kill();

          ball.animation = gsap.timeline()
            .to(ball, {
              duration: 1,
              ease: "power3.out",
              attr: {
                cx: ball.ori_x,
                cy: ball.ori_y,
                fill: `#00e67650`,
              },
            })
            .to(ball.line, {
              duration: 1,
              ease: "power3.out",
              attr: {
                x2: ball.ori_x,
                y2: ball.ori_y,
              },
            }, "<");
        }
      });
    },
  },
};
</script>

<style scoped>
/* 这里的样式是这个组件特有的 */
.magnetic-background-container {
  position: absolute; /* 固定定位，确保覆盖整个屏幕 */
  top: 0;
  left: 0;
  width: 100vw; /* 视口宽度 */
  height: 100vh; /* 视口高度 */
  overflow: hidden; /* 防止内容溢出，特别是动画元素 */
  z-index: -1; /* 确保在内容下方 */
  background-color: #171717; /* 原始背景色 */
  display: flex; /* 使用 flexbox 居中 SVG */
  justify-content: center;
  align-items: center;
}

.magnetic-svg {
  /* 这个 SVG 元素应该填满其父容器 magnetic-background-container */
  position: absolute; /* 相对于父容器定位 */
  width: 100%; 
  height: 100%;
}

/* SVG 线条的默认样式 */
.magnetic-svg line {
  fill: none; /* 线条没有填充色 */
  stroke: #f7f7f7; /* 默认线条颜色，可以被 JS 中的设置覆盖 */
  stroke-width: 2; /* 线条宽度 */
}
</style>