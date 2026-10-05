<template>
  <!-- 悬停时每个字母依次向上滚动、下一份从底部滚入（还原 landonorris.com 按钮效果） -->
  <span class="roll" :aria-label="text">
    <span
      v-for="(c, i) in chars"
      :key="i"
      class="roll-c"
      :style="{ '--i': i }"
      aria-hidden="true"
    ><span class="roll-in" :data-c="c">{{ c }}</span></span>
  </span>
</template>

<script>
export default {
  name: 'RollText',
  props: {
    text: { type: String, required: true },
  },
  computed: {
    chars() {
      // 空格换成不换行空格，否则 inline-block 会把它吞掉
      return Array.from(this.text).map((c) => (c === ' ' ? ' ' : c));
    },
  },
};
</script>
