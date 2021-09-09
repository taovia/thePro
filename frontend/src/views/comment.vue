<template>
  <div class="container">
    <Header title="评论" />
    <Comment />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Comment from '../components/Comment.vue'
</script>

<style scoped>
.container {
  max-width: 720px;
  margin: 0 auto;
  padding: 20px;
}
</style>
