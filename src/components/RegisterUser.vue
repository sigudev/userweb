<template>
  <div>
    <form action="#"> 
      <input type="text" placeholder="用户名" v-model="userName" name="userName" >
      <br>
      <input type="password" placeholder="密码" v-model="password" name="password" autocomplete="off">
      <br>
      <input type="password" placeholder="再次输入" v-model="repassword" name="repassword" autocomplete="off">
      <br>
      <button @click="register" @click.prevent='had'>注册</button>
    </form>
  </div>
</template>

<script>
import api from '@/api/api'


export default {
  name:"RegistryUser",
  data() {
    return {
      userName:"",
      password:"",
      repassword:""
    }
  },

  methods: {
    async register(){
      if (this.userName.length == 0 || this.password == 0 || this.repassword == 0) {
        alert("请输入账号或密码")
        return
      }

      if (this.password !== this.repassword) {
        alert("两次输入的密码不一样,请重新输入")
        this.password = ""
        this.repassword = ""
        return
      }

      var userInfo = await api.userRegister({userName:this.userName, password:this.password})
      console.log("userInfo:", JSON.stringify(userInfo));
    },

    had(){
      console.log("不刷新")
    }
  },



}
</script>

<style scope>

</style>