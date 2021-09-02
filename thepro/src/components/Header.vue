<template>
<div class="container">
  <div class="header">
    <h1 class="tltle">评论</h1>
    <UserInfo />
  </div>
</div>
</template>

<script setup>
import UserInfo from '../components/UserInfo.vue'
</script>

<style scoped>
.container {
  margin: 20px 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
