<template>
<div v-focus>
  <i class="iconfont icon-search"></i>
  <input class="input" type="text" placeholder="搜索">
</div>
</template>

<script setup>
</script>

<script>
export default {
  directives: {
    focus: {
      mounted(el) {
        const oIcon = el.querySelector('.iconfont');
        const oInput = el.querySelector('.input');

        oInput.addEventListener('focus', function() {
          oInput.setAttribute("placeholder", "搜索关键字");
          oIcon.style.color = 'var(--color-primary)';
        }, false);

        oInput.addEventListener('blur', function() {
          oInput.setAttribute("placeholder", "搜索");
          oInput.value = '';
          oIcon.style.color = 'var(--color-white)';
        }, false);
      }
    }
  }
}
</script>

<style scoped>
.input {
  width: 80px;
  height: var(--height-primary);
  background: var(--color-primary);
  border-radius: calc(var(--height-primary) / 2);
  border: solid 1px var(--color-primary);
  outline: none;
  padding: 0;
  padding-left: 34px;
  box-sizing: border-box;
  font-family: PingFang SC;
  transition: all 0.4s;
}

.input:focus {
  width: 250px;
  background: var(--color-white);
  border-radius: 4px;
}

.input::placeholder {
  color: var(--color-white);
}

.input:focus::placeholder {
  color: var(--color-primary);
}

.iconfont {
  position: absolute;
  line-height: var(--height-primary);
  margin-left: 12px;
  color: var(--color-white);
  transition: all 0.4s;
}
</style>
