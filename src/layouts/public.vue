<template>
  <div class="wrapper">
    <header class="header">
      <h2 class="header__title title">MovieApp</h2>
      <nav class="header__nav nav">
        <ul class="nav__list list">
          <li class="list__item item">
            <a class="item__link link" href="#">Фильмы в прокате</a>
          </li>
          <li class="list__item item">
            <a class="item__link link" href="#">Корзина</a>
          </li>
          <li class="list__item item" v-if="true">
            <button class="button" @click="toggle()">Войти</button>
          </li>
          <li class="list__item item" v-else>
            <button class="button" @click="() => {}">Выйти</button>
            <!-- <Button @click="toggle()">Выйти</Button> -->
          </li>
        </ul>
      </nav>
      <Modal :isOpen="isOpen" >
        <AuthComponent @onClose="toggle()"/>
      </Modal>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">Footer</footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal/Modal.vue"
import AuthComponent from "@/components/AuthComponent/AuthComponent.vue"

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

</script>


<style scoped lang="scss">
.wrapper {
  max-width: 1280px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  .main {
    flex: 1 1 auto;
    overflow: auto;
  }

  background: black;
  color: white;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    color: white;
  }
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
      .item__link {
        color: white;
      }
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
}

.button {
  padding: 10px 40px;
  border: 2px solid black;
  border-radius: 25px;
  margin: 10px;
  font-weight: bold;
  background: white;
  color: black;

  transition: color, background 0.2s linear;
}
.button:hover {
  background: black;
  color: white;
}
</style>