<template>
<form @submit="handleSubmit">
  <textarea v-model="content" class="input" placeholder="请输入内容"></textarea>
  <button type="submit">提交</button>
</form>
</template>

<script setup>
import {
  ref
} from 'vue'

const content = ref("");
const emit = defineEmits(["submit"]);
const handleSubmit = (e) => {
  e.preventDefault();
  if (content.value === "") {
    alert("请输入内容");
  } else {
    emit("submit", content.value);
    content.value = "";
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  height: 80px;
  background: var(--color-grey-1);
  border: 1px solid var(--color-grey-1);
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
  resize: none;
  font-family: inherit;
  cursor: unset;
  transition: all 0.3s;
}

.input:hover,
.input:focus {
  border: 1px solid var(--color-primary);
}

button {
  width: 80px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: inherit;
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
