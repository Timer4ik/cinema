
<template>
  <div class="auth-wrapper">
    <div class="header">
      <h2 class="header__title title">
        {{ isLogin ? "Вход" : "Регистрация" }}
      </h2>
      <nav class="header__nav nav">
        <ul class="nav__list list">
          <li class="list__item item">
            <button class="button" @click="$emit('onClose')">Закрыть</button>
            <!-- <button @click="toggle()">Выйти</button> -->
          </li>
        </ul>
      </nav>
    </div>

    <div class="main">
      <LoginComponent v-if="isLogin" />
      <RegisterComponent v-else />
    </div>
    <a class="card__link" @click="toggleIsLogin">{{
      isLogin ? "Зарегистироваться" : "Войти"
    }}</a>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import LoginComponent from "@/components/AuthComponent/LoginComponent.vue";
import RegisterComponent from "@/components/AuthComponent/RegisterComponent.vue";

defineProps({
  title: {
    type: String,
    default: "MovieApp",
  },
});

const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};

const isLogin = ref(true);
const toggleIsLogin = () => {
  isLogin.value = !isLogin.value;
};
</script>

<style scoped lang="scss">
.auth-wrapper {
  max-width: 1280px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  color: black;
  .main {
    flex: 1 1 auto;
    overflow: auto;
  }
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav__list {
    display: flex;
    align-items: center;
    .list__item {
      margin-right: 25px;
      font-weight: 600;
      font-size: 18px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.title {
  font-size: 36px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 900;
  text-align: center;
}

.button {
  padding: 10px 40px;
  border: 2px solid black;
  border-radius: 25px;
  margin: 10px;
  font-weight: bold;
  background: black;
  color: white;

  transition: color, background 0.2s linear;
}
.button:hover {
  background: white;
  color: black;
}
</style>