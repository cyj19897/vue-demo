<template>
    <div v-if="obj.loginShow">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit" @click="test">Login</button>
      </form>
    </div>
    <div v-if="obj.loionIndex">
      <h2>Login1</h2>
    </div>
  </template>
<script setup lang="ts">
import { ref ,reactive} from 'vue'
import axios from 'axios';
import { router } from '../router/index';

const obj = reactive({
    loginShow:true,
    loionIndex:false
})
function test(){
  console.log(11111);
  axios.get('/yhdp/user/userList')
  .then(res => {
    console.log(res)
    if(res.data.length >=2){
        obj.loginShow = false
        router.push('/test')
    }
  })
  .catch(err => {
    console.error(err); 
  })
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
