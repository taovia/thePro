<template>
<router-view></router-view>
</template>

<style>
:root {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-grey-1: #eeeeee;
  --color-grey-2: #cccccc;
  --color-grey-3: #aaaaaa;
  --color-grey-4: #888888;
  --color-grey-5: #666666;
  --color-grey-6: #444444;
  --color-primary: #5c86d3;
  --color-primary-dark: #6484bf;
  --color-primary-light: #4c8afb;
  --height-primary: 40px;
}

body {
  margin: 0;
  padding: 20px;
  font-family: PingFang SC;
  min-width: 320px;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  background-clip: padding-box;
  border: 3px solid transparent;
  border-radius: 6px;
}
</style>
