<template>
<div class="reply">
  <div class="line"></div>
  <div>
    <slot />
  </div>
</div>
</template>

<script setup>
</script>

<style scoped>
.reply {
  display: flex;
}

.line {
  width: 4px;
  height: auto;
  background: var(--color-grey-1);
  margin: 0 30px 10px 0;
  border-radius: 2px;
}
</style>
