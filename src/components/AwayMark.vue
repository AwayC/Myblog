<template>
  <svg
    class="away-mark"
    :class="{ 'is-draw': draw && !loop, 'is-loop': loop }"
    viewBox="0 0 74 42"
    :width="size"
    :height="size * 42 / 74"
    aria-hidden="true"
  >
    <!-- AW 连字：斜体实心字母，A 的右腿与 W 的第一笔平行相贴 -->
    <g transform="translate(3 0) skewX(-12)">
      <path
        class="mark-a"
        d="M2 38 L13 4 H22 L33 38 H25.5 L23.6 31.5 H11.4 L9.5 38 Z M13.3 25 H21.7 L17.5 11 Z"
        fill-rule="evenodd"
      />
      <path
        class="mark-w"
        d="M27 4 H34.5 L39 23 L44.5 4 H50.5 L56 23 L60.5 4 H68 L59.5 38 H52.5 L47.5 19.5 L42.5 38 H35.5 Z"
      />
    </g>
    <rect v-if="dot" class="mark-dot" x="66" y="31" width="7" height="7" />
  </svg>
</template>

<script>
export default {
  name: 'AwayMark',
  props: {
    size: { type: Number, default: 40 },
    // 末尾的小方块（品牌的“句号”）
    dot: { type: Boolean, default: false },
    // 描边绘制动画（用于加载 / 转场）
    draw: { type: Boolean, default: false },
    // 循环播放：描边 → 填色 → 停留 → 擦除，一直重复（加载幕布用）
    loop: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.away-mark {
  display: block;
  overflow: visible;
}

.mark-a,
.mark-w {
  fill: currentColor;
}

.mark-dot {
  fill: var(--c-accent);
}

.is-draw .mark-a,
.is-draw .mark-w {
  fill-opacity: 0;
  stroke: currentColor;
  stroke-width: 1.2;
  stroke-dasharray: 260;
  stroke-dashoffset: 260;
  animation: mark-draw 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards, mark-fill 0.5s ease 0.9s forwards;
}

.is-draw .mark-w {
  animation-delay: 0.15s, 1.05s;
}

.is-draw .mark-dot {
  transform-origin: 69.5px 34.5px;
  transform: scale(0);
  animation: mark-dot 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s forwards;
}

/* 循环版：一轮 2.6s */
.is-loop .mark-a,
.is-loop .mark-w {
  stroke: currentColor;
  stroke-dasharray: 260;
  animation: mark-loop 2.6s cubic-bezier(0.65, 0, 0.35, 1) infinite both;
}

.is-loop .mark-w {
  animation-delay: 0.15s;
}

.is-loop .mark-dot {
  transform-origin: 69.5px 34.5px;
  animation: mark-dot-loop 2.6s ease infinite both;
}

@keyframes mark-loop {
  0% { stroke-dashoffset: 260; stroke-width: 1.2; fill-opacity: 0; }
  38% { stroke-dashoffset: 0; stroke-width: 1.2; fill-opacity: 0; }
  52% { stroke-dashoffset: 0; stroke-width: 0; fill-opacity: 1; }
  76% { stroke-dashoffset: 0; stroke-width: 0; fill-opacity: 1; }
  86% { stroke-dashoffset: 0; stroke-width: 1.2; fill-opacity: 0; }
  100% { stroke-dashoffset: -260; stroke-width: 1.2; fill-opacity: 0; }
}

@keyframes mark-dot-loop {
  0%, 44% { transform: scale(0); animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); }
  56%, 78% { transform: scale(1); animation-timing-function: ease-in; }
  86%, 100% { transform: scale(0); }
}

@keyframes mark-draw {
  to { stroke-dashoffset: 0; }
}

@keyframes mark-fill {
  to { fill-opacity: 1; stroke-width: 0; }
}

@keyframes mark-dot {
  to { transform: scale(1); }
}
</style>
