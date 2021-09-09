<template>
<div>
  <BlogHeader />
  <ArticleDetail />
  <Comments :article="article" />
</div>
</template>

<script setup>
import ArticleDetail from '../components/ArticleDetail.vue'
</script>

<script>
import Comments from '../components/Comments.vue'
import BlogHeader from '../components/BlogHeader.vue'

export default {
  components: { BlogHeader, Comments }
}
</script>

<style scoped>
</style>
