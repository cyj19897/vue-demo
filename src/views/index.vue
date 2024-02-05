<template>
  <div>
    <div class="sidebar">
      <div class="xi-menu-item-label" v-for="(menu, index) in items" @click="handclick(menu)">
        <div class="xi-menu-item-text">
          {{ menu.name }}
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { router } from '../router/index';
const items = [{ id: 1, name: '首页', url: '/' }, { id: 2, name: 'test', url: '/test' }, { id: 3, name: 'testvite', url: '/app-vite' }]
function handclick(menu: any) {
  router.push(menu.url)

}
</script>

<style scoped>
.sidebar {
  width: 10%;
  height: 100vh;
  background-color: #333;
  color: #fff;
}

.xi-menu-item-label {
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
  cursor: pointer;
  transition: width 0.3s ease;
}

.content {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  transition: width 0.3s ease;
  width: 90%;
  background: #f3f7fc;
  padding: 12px;
  overflow: auto;
}

.xi-menu-item-text {
  font-size: 14px;
  font-family: PingFang SC;
  color: rgba(255, 255, 255, 0.5);
  opacity: 1;
  flex-grow: 1;
  text-align: center;
  flex-shrink: 0;
}</style>