<template>
  <h2>Sign Up Page</h2>
  <form class="login-form" @submit.prevent="register()">
    <h1>Sign Up</h1>
    <div class="inputb">
      <label for="email">Email</label>
      <input class="forminput" type="text" id="email" placeholder="Email" v-model="registerModel.email">
    </div>
    <div class="inputb">
      <label for="username">Username</label>
      <input class="forminput username" v-model="registerModel.username" type="text" id="username" placeholder="Username">
    </div>
    <button type="submit" class="submitbtn" >Submit</button>
    <div class="bottom-text">
      <br>
      <span class="signup">
        Already a user?
        <a href="#">Sign in</a>
      </span>
    </div>
  </form>
</template>

<script>
import AllRequest from "@/model/request/allRequest";
export default {
  name:"Register-View",

  data(){
    return{
       registerModel: AllRequest.register
    }
  },

  methods:{
    register(){
      this.$store.dispatch("register", this.registerModel,{root:false})
    }
  }
}
</script>
<style scoped>
*{
  margin: 0px;
  box-sizing: border-box;
  padding: 0px;
  text-decoration: none;
  font-family: Roboto;
}
.login-form {
  width: 360px;
  height: 560px;
  background: #f1f1f1;
  padding: 80px 40px;
  border-radius: 10px;
  position: relative;
  margin: 0px auto;
}

.inputb {
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 32px 0px;
}
.inputb label {
  display: none;
}
label {
  cursor: default;
}
.inputb .forminput {
  font-size: 15px;
  color: #333;
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0px 5px;
  height: 40px;
}

.submitbtn {
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  background-color: #498af2;
  background-size: 200%;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: 0.5s;
  font-size: 16px;
}


</style>


