<template>
<div class="button" @click="showInput = !showInput">回复</div>
<Input v-if="showInput" @submit="emit('submit', $event); showInput = false;" />
</template>

<script setup>
import Input from './Input.vue'
import {
  ref
} from 'vue'

const showInput = ref(false);
const emit = defineEmits(["submit"]);
</script>

<style scoped>
.button {
  font-size: 14px;
  color: var(--color-primary-light);
  cursor: default;
  user-select: none;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.button:hover {
  color: var(--color-primary-dark);
}
</style>
