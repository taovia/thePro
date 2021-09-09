<template>
<div class="container">
  <Header />
  <Comment />
</div>
</template>

<script setup>
import Comment from '../components/Comment.vue'
import Header from '../components/Header.vue'
</script>

<style scoped>
.container {
  max-width: 720px;
  margin: 0 auto;
}
</style>
