<template>
  <div class="typewriter-container">
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

export default {
  name: 'typeWord',
  props: {
    speed: {
      type: Number,
      default: 100 // 每个字符出现速度（毫秒）
    },
    text: { 
        type: String, 
        default: ''
    }, 
    cursorColor: {
      type: String,
      default: '#20c997' // 光标颜色与主题一致
    }
  },
  mounted() {
    this.initAnim(); 
  },
  methods: {
    initAnim() { 
        gsap.registerPlugin(SplitText); 
        
        let split = SplitText.create(".text", { type: "words, chars" });

        // now animate the characters in a staggered fashion
        gsap.from(split.chars, {
            duration: 1, 
            y: 30,       // animate from 100px below
            autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
            stagger: {
                from: "random", 
                amount: 0.4, 
            } // 0.05 seconds between each
        });
    }
  }
}
</script>

<style scoped>
.typewriter-container {
  display: inline-block;
}

.typewriter-text {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}

.cursor {
  border-right: 2px solid;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: inherit }
}
</style>