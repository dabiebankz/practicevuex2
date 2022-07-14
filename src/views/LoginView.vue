<template>
<h2>Login Page</h2>
  <form class="login-form">
    <h3>Login</h3>
    <div class="base">
      <div class="info2">Sign in to continue to Gmail
      </div>
      <div id="mailbox">
        <input placeholder="Enter your email" type="mail" name="name"
               style="width:270px; height:42px; border: solid 1px #c2c4c6;
	font-size:16px; padding-left:8px;" />
        <div><input type="submit" id="button2" value="login"/></div>
        <div id="info3">
          <a href="#">Need help?</a>
        </div>
      </div>
    </div>
  </form>

</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>
body{
  background:white;
  height:700px;
  margin:0px;
  padding:0px;

}

#button2{
  width:270px;
  height:35px;
  margin-top:10px;
  background:#498af2;
  font-family:verdana;
  font-size:14px;
  color:white;
  border-radius:5px 5px 5px 5px;
  border-width: 1px;
  border-style:solid;
  border-color: gray;
  cursor:pointer;
  outline:none;

}

#info3{
  margin-top:10px;
  font-size:13px;
  font-family: 'Open Sans', sans-serif;
  color:#498af2;
  font-weight:bold;
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
#mailbox{
  position: relative;
  margin: 32px 0px;
}

</style>