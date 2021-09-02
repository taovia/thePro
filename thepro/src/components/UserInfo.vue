<template>
<div class="user">
  <input type="checkbox" id="select">
  <div class="info">
    <div class="title">{{ username }}</div>
    <i class="iconfont icon-arrow-right-circle" @click="logout"></i>
  </div>
  <label for="select" class="avatar">
    <img src="../assets/avatar/avatar_0.png">
  </label>
  <div class="back"></div>
</div>
</template>

<script setup>
</script>

<script>
export default {
  data() {
    return {
      username: 'TAOVIA'
    }
  },
  methods: {
    logout() {
      if (confirm("您确定要退出登录吗？")) {
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style scoped>
.user {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#select {
  display: none;
}

.info {
  width: 125px;
  height: 35px;
  background: var(--color-grey-1);
  border-radius: 5px;
  margin-right: -20px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: rotateY(90deg);
  transform-origin: right;
  transition: all 0.3s;
}

.title {
  font-size: 14px;
  font-weight: bold;
  margin: 0 15px;
}

.iconfont {
  color: var(--color-grey-5);
  cursor: pointer;
  transition: all 0.3s;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
}

.back {
  width: 40px;
  height: 40px;
  background: var(--color-grey-2);
  border-radius: 50%;
  position: absolute;
  transition: all 0.3s;
}

#select:checked~.info {
  transform: rotateY(0);
}

#select:checked~.avatar,
#select:checked~.avatar~.back {
  border-radius: 5px;
}

.avatar:active~.back {
  transform: scale(1.2);
}

.iconfont:active {
  color: var(--color-primary);
}

@media (any-hover: hover) {
  .avatar:hover~.back {
    transform: scale(1.2);
  }

  .iconfont:hover {
    color: var(--color-primary);
  }
}
</style>
