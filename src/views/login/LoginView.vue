<template>
  <div class="login-page">
    <div class="login-form">
      <a-form :model="loginForm" @submit="handleSubmit">
        <a-form-item hide-label>
          <span class="login-title">欢迎登陆Trident系统</span>
        </a-form-item>


        <a-form-item hide-label>
          <span class="select-title">普通登陆</span>
          <span class="select-title">LDAP登陆</span>
        </a-form-item>


        <a-form-item hide-label field="username" :rules="[{required:true,message:'请输入用户名'}]">
          <a-input v-model="loginForm.username" placeholder="请输入用户名" allow-clear>
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item  hide-label field="password" :rules="[{required:true,message:'请输入密码'},{minLength:5,message:'must be greater than 5 characters'}]">
          <a-input-password v-model="loginForm.password" placeholder="请输入密码" allow-clear>
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item hide-label>
          <a-button html-type="submit" style="width: 100%" type="primary">登陆</a-button>
        </a-form-item>

      </a-form>
    </div>
  </div>
</template>

<script setup>
import axios   from "axios";
import { ref } from 'vue'
import {useRouter} from "vue-router";
import HomeView from "@/views/HomeView.vue";


//路由对象
const router = useRouter()
//定义表单数据
//表单对应的响应式数据，提交给后段的数据
// 按照vblog login api 来设计
const loginForm = ref({
  username: '',
  password: ''
})

//表单数据提交函数
const handleSubmit = async () => {

  try {
    const response = await axios.post('http://127.0.0.1:8888/login', {
      username: loginForm.value.username,
      password: loginForm.value.password
    });

    // 在这里处理登录成功的逻辑
    console.log('登录成功，服务器返回的数据:', response.data.token);

    // 请根据实际情况处理登录成功后的逻辑
    // 比如保存用户信息、跳转到其他页面等

    // 示例：保存 token 并跳转到博客列表页面
    // state.value.is_login = true;
    // state.value.token = response.data;
    router.push({ name: 'home' });
  } catch (error) {
    // 在这里处理登录失败的逻辑
    console.error('登录失败:', error);

    // 请根据实际情况处理登录失败后的逻辑
    // 比如提示用户、清空密码等
  }

}

</script>

<style lang="css" scoped>
.login-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: left bottom;
  background-image: url("../../image/login_bg.svg");
  background-repeat: no-repeat;

}

.login-form {
  display: flex;
  align-content: center;
  flex-direction: column;
  height: 400px;
  width: 400px;
}

.login-title {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 16px;
  font-weight: 550;

}
.select-title{
  display: flex;
  font-size: 16px;
  font-weight: 550;
  color: black;
  margin-right: 10px;
}
</style>
