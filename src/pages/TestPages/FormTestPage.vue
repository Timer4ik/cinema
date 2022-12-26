<template>
  <div class="card">
    <Form :validation-schema="loginValidationSchema" @submit="handleSubmit">
      <FieldComponent
        name="email"
        placeholder="Введите email"
        label="Email"
      />
      <FieldComponent
        name="password"
        placeholder="Введите пароль"
        label="Введите пароль"
      />
      <FieldComponent
        name="birthDate"
        type="date"
        placeholder="Введите дату рождения"
        label="Дата рождения"
      />
      <button>Отправить</button>
    </Form>
  </div>
</template>

<script setup>
import { Form } from "vee-validate";
import * as Yup from "yup";

import FieldComponent from "@/components/Form/FieldComponent.vue";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required("Введите email").email("Некорректный e-mail"),
  password: Yup.string().required("Введите пароль"),
  birthDate: Yup.string().required("Введите дату рождения"),
});

const handleSubmit = (values) => {
  const { email, password } = values;
  console.log({ email, password });
  // ...fetchData({email,password})
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.form__field) {
  display: flex;
  flex-direction: column;

  margin-bottom: 50px;

  .field__input {
    border: none;
    padding: 0;
    margin: 0;
    color: rgba(0, 0, 0, 0.788);
    outline: none;

    padding: 10px 5px;
    font-size: 16px;
    border-bottom: 1px solid rgba(141, 141, 141, 0.432);

    margin-bottom: 10px;

    &::placeholder {
      color: rgb(173, 173, 173);
    }

    &.error {
      border-bottom: 1px solid red;
    }
  }

  .field__error {
    font-size: 14px;
    color: red;
  }

  .field__label {
    font-size: 14px;
    color: gray;
  }
}
</style>
