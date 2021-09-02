<template>
<div class="item">
  <div class="user">
    <img class="avatar" :src="avatar">
    <div class="name">
      <div class="username">{{ username }}</div>
      <div class="time">{{ time }}</div>
    </div>
  </div>
  <div class="content">
    {{ content }}
  </div>
</div>
</template>

<script setup>
defineProps(["username", "avatar", "time", "content"]);
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}

.user {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-grey-1);
}

.name {
  margin: 0 10px;
}

.username {
  font-size: 14px;
  font-weight: bold;
}

.time {
  font-size: 12px;
}

.content {
  padding: 10px 0;
}
</style>
