<template>
  <div class="login">
    <form class="form-login" @submit.prevent="login">
      <h1>Please Sign In</h1>
      <div class="alert alert-danger" role="alert" v-if="invalidCredentials">
        Invalid username and password!
      </div>
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="Username"
        v-model="user.username"
        required
        autofocus
      />
      <label for="username">Password:</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <button class="btn" type="submit">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-view",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      invalidCredentials: false,
    }
  },
  methods: {
    login(){
      if(this.user.username == "admin" && this.user.password == "admin"){
        this.$router.push("/dashboard");
      } else {
        this.invalidCredentials = true;
      }
    }

  }
}
</script>

<style scoped>
  .form-login {
    background-color: rgba(255, 255, 255, 0.839);
    box-shadow: 0 0 10px 10px rgba(97, 97, 97, 0.151);
    padding: 50px;
    width: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
    left: 0;
    right: 0;
    text-align: center;
  }

  .form-login label {
    text-align: left;
  }

  .form-login h1 {
    text-transform: uppercase;
    text-align: center;
    color: #5e6681;
  }

  .form-login input {
    box-shadow: 0 0 3px 3px rgba(97, 97, 97, 0.151);
    border: none;
    padding-left: 10px;
    margin-bottom: 20px;
    height: 30px;
  }

  .form-login button {
    margin-bottom: 20px;
    height: 35px;
    width: 30%;
    margin-left: 35%;
    background-color: #5e6681d8;
    color: #ffffff;
    box-shadow: 0 0 5px 5px rgba(97, 97, 97, 0.151);
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    text-transform: uppercase;
  }

  .form-login button:hover {
    background-color: #39a4d9df;
    box-shadow: 0 0 5px 5px rgba(97, 97, 97, 0.276);
    font-weight: 700;
  }

</style>
