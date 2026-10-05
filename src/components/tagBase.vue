<template>
  <div class="my-tag">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'tagBase',

}
</script>

<style scoped>
/* 背景色由使用方根据 tagmap 传入 */
.my-tag {
    display: inline-block;
    padding: 0.42em 0.7em 0.38em;
    margin: 0.2em;
    font-family: var(--f-mono);
    font-size: 0.66rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1;
    border-radius: 4px;
    color: #161511;
}
</style>
