<template>
  <div class="auth">
    <div class="card">
      <Form :validation-schema="() => {}" @submit="() => {}">
        <FieldComponent
          name="name"
          placeholder="Введите имя пользователя"
          label="Имя пользователя"
        />
        <FieldComponent
          name="email"
          placeholder="Введите e-mail"
          label="E-mail"
        />
        <FieldComponent
          name="password"
          placeholder="Введите пароль"
          label="Пароль"
        />
        <button class="button">Зарегистироваться</button>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form } from "vee-validate";
import FieldComponent from "@/components/Form/FieldComponent.vue";
</script>

<style scoped lang="scss">
.auth {
  width: 100%;
}
.card {
  padding-top: 50px;
}
body {
  background: #000;
}
.card__link {
  display: block;
  color: rgb(30, 30, 255);
  text-decoration: underline;
}
:deep(.form__field) {
  display: flex;
  flex-direction: column;
  .field__input {
    border: none;
    padding: 0;
    margin: 0;
    color: black;
    outline: none;

    margin-bottom: 15px;

    padding: 25px 30px;
    font-size: 24px;
    border-bottom: 1px solid rgba(141, 141, 141, 0.432);
    // border-radius: 30px;
    margin: 20px 0;

    &::placeholder {
      color: rgb(173, 173, 173);
    }
  }

  .field__label {
    font-size: 18px;
    color: gray;
  }
}

.form__switch {
  font-size: 16px;
  background-color: none;
  background: none;
  border: none;
  margin-left: 10px;
  color: rgb(40, 53, 233);
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