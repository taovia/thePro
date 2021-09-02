<template>
<div v-for="article in info.results" v-bind:key="article.url" id="articles">
  <div class="card">
    <div class="photo">
      <img src="https://source.unsplash.com/800x400/?nature">
    </div>
    <div class="content">
      <div class="title">{{ article.title }}</div>
      <div class="tag-wrap">
        <div class="tag" v-for="tag in article.tags" v-bind:key="tag">{{ tag }}</div>
        <div class="time">{{ formatted_time(article.created) }}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
</script>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      info: ''
    }
  },
  mounted() {
    axios
      .get('/api/article')
      .then(response => (this.info = response.data))
  },
  methods: {
    formatted_time: function(iso_date_string) {
      const date = new Date(iso_date_string);
      return date.toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.card {
  height: 150px;
  border-radius: 5px;
  background: var(--color-white);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: #eee;
  margin-bottom: 10px;
}

.photo {
  width: 240px;
  height: 100%;
  border-radius: 5px 0 0 5px;
  overflow: hidden;
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
}

.content {
  margin: 20px;
}

.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

.tag-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tag {
  height: 24px;
  background: var(--color-grey-4);
  border-radius: 5px;
  padding: 0 8px;
  font-size: 14px;
  color: var(--color-white);
  line-height: 24px;
}

.time {
  font-size: 14px;
}
</style>
