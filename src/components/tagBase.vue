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
.my-tag { 
    display: inline-block;
    padding: 0.25em 0.7em;
    margin: 0.2em;
    font-size: 0.75rem;
    line-height: 1;
    border-radius: 0.25rem;
    color: #3d3d3d; 
}
</style>