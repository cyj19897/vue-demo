

<template>
  <div>
    <Home :menus="[{ id: 1, name: '首页', url: '/' }, { id: 2, name: '关于', url: '/about' }]" ></Home>
  </div>
 
</template>
<script setup lang="ts">
import axios from "axios";
import Home from "./views/index.vue";

axios.get('/yhdp/menu/menuList')
  .then(res => {
    console.log(res.data)

  })
  .catch(err => {
    console.error(err); 
  })
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
