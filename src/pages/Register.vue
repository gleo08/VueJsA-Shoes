<template>
<main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="card login-card">
        <div class="row no-gutters">
          <div class="col-md-7 fix">
            <img :src="registerImage" width="100%" height="auto" alt="login" class="login-card-img">
          </div>
          <div class="col-md-5">
            <div class="card-body">
              <div class="brand-wrapper">
                <img :src="logoImage" alt="logo" class="logo">
              </div>
              <p class="login-card-description" >A-Shoes</p>
                <div class="fixAlert">
                    <div v-show="isExist" class="alert alert-danger" role="alert">
                        {{message}}
                    </div>
                    <div v-show="!validate" class="alert alert-danger" role="alert">
                        "Password confirm is't match"
                    </div>
                </div>
              <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="name" class="sr-only">Name</label>
                    <input type="name" v-model="name" name="name" id="name" class="form-control" placeholder="Your fullname" required>
                  </div>
                  <div class="form-group">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" v-model="email" name="email" id="email" class="form-control" placeholder="Email address" required>
                  </div>
                  <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" v-model="password" name="password" id="password" class="form-control" placeholder="***********" required>
                  </div>
                    <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password confim</label>
                    <input type="password" v-model="passwordConfirm" @keyup="validatePassword" name="password" id="password" class="form-control" placeholder="***********" required>
                  </div>
                  <button name="login" id="login" class="btn btn-block login-btn mb-4" :disabled="!validate" type="submit" value="Login">
                    Sign up
                  </button>
                  <p class="login-card-footer-text">Did't you have an account? <router-link to="/login"> Login now</router-link></p>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {ref} from "vue"
import axios from "axios"
import { useRouter } from 'vue-router'
//@ts-ignore
import registerImage from "../asset/register.jpg"
//@ts-ignore
import logoImage from "../asset/logo.png"
export default {
    name: "Register",

    setup() {
      const name = ref("")
      const email = ref("")
      const password = ref("")
      const passwordConfirm = ref("")
      const validate = ref(true)
      const isExist = ref(false)
      const message = ref("")
      const router = useRouter();

      const submit = async () =>  {
        const {data} = await axios.post('register', {
          name: name.value,
          email: email.value,
          password: password.value
        })
        if (data["message"]) {
          isExist.value = true
          message.value = data["message"]
          setTimeout(function() {
            isExist.value = false
              }, 2000);
        } else {
          await router.push("/login")
        }
      }

      const validatePassword = () => {
        if (password.value == passwordConfirm.value) {
           validate.value = true
        } else {
          validate.value = false
        }
      }

      return {
        name,
        email,
        password,
        passwordConfirm,
        validate,
        isExist,
        registerImage,
        logoImage,
        message,
        submit,
        validatePassword,
      }
    },
}
</script>

<style scoped>
body {
  font-family: "Karla", sans-serif;
  background-color: #d0d0ce;
  min-height: 100vh; }

.brand-wrapper {
    margin-bottom: 19px; 
}
.brand-wrapper .logo {
    height: 37px; 
}

.login-card {
    border: 0;
    border-radius: 27.5px;
    box-shadow: 0 10px 30px 0 rgba(172, 168, 168, 0.43);
    overflow: hidden; 
}
.login-card-img {
    border-radius: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover; }
  .login-card .card-body {
    padding: 85px 60px 60px; }
    @media (max-width: 422px) {
      .login-card .card-body {
        padding: 35px 24px; } }
  .login-card-description {
    font-size: 25px;
    color: #000;
    font-weight: bold;
    margin-bottom: 23px; }
  .login-card form {
    max-width: 326px; }
  .login-card .form-control {
    border: 1px solid #d5dae2;
    padding: 15px 25px;
    margin-bottom: 20px;
    min-height: 45px;
    font-size: 13px;
    line-height: 15;
    font-weight: normal; }
    .login-card .form-control::-webkit-input-placeholder {
      color: #919aa3; }
    .login-card .form-control::-moz-placeholder {
      color: #919aa3; }
    .login-card .form-control:-ms-input-placeholder {
      color: #919aa3; }
    .login-card .form-control::-ms-input-placeholder {
      color: #919aa3; }
    .login-card .form-control::placeholder {
      color: #919aa3; }
  .login-card .login-btn {
    padding: 13px 20px 12px;
    background-color: #000;
    border-radius: 4px;
    font-size: 17px;
    font-weight: bold;
    line-height: 20px;
    color: #fff;
    margin-bottom: 24px; }
    .login-card .login-btn:hover {
      border: 1px solid #000;
      background-color: transparent;
      color: #000; }
  .login-card .forgot-password-link {
    font-size: 14px;
    color: #919aa3;
    margin-bottom: 12px; }
  .login-card-footer-text {
    font-size: 16px;
    color: #0d2366;
    margin-bottom: 60px; }
    @media (max-width: 767px) {
      .login-card-footer-text {
        margin-bottom: 24px; } }
  .login-card-footer-nav a {
    font-size: 14px;
    color: #919aa3; }

.footer-link {
  position: absolute;
  bottom: 1rem;
  text-align: center;
  width: 100%; }

  .spinner-border {
    border: 2px solid currentColor;
    border-right-color: transparent;
    width: 1rem;
    height: 1rem;
}

.fix {
    display: flex;
    align-items: center;
    background: #d9d9d9;
}
.fixAlert {
    height: 50px;
    margin-bottom: 15px;
}
</style>
