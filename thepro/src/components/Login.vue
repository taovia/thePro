<template>
<div class="container">
  <form>
    <h1>登录</h1>
    <div>
      <input v-model="username" type="text" placeholder="用户名">
      <input v-model="password" type="password" placeholder="密码">
    </div>
    <button type="submit" @click.prevent="login">登录</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "123456") {
        this.$router.push('/');
      } else if (this.username === "" && this.password === "") {
        alert("请输入用户名或密码");
      } else {
        alert("用户名或密码输入错误");
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

form {
  width: 400px;
}

input {
  width: 100%;
  height: 40px;
  background: var(--color-grey-1);
  border: 1px solid var(--color-grey-1);
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
  font-family: inherit;
  transition: all 0.3s;
  margin-bottom: 20px;
}

input:hover,
input:focus {
  border: 1px solid var(--color-primary);
}

button {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
}

button[type="submit"] {
  background: var(--color-primary);
  color: white;
  transition: all 0.3s;
}

button[type="submit"]:hover {
  background: var(--color-primary-dark);
}
</style>
