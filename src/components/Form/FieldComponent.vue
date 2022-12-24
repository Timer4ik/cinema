<template>
  <div class="form__field field">
    <Field validateOnInput :model-value="value" :name="name" :id="name"
      v-slot="{ field, errorMessage }">
      <label class="field__label" :class="{ error: errorMessage }">
        {{ label }}
      </label>

      <input :="field" :placeholder="placeholder" :type="type" class="field__input" :class="{ error: errorMessage }" />

      <div class="field__error">{{ errorMessage }}</div>
    </Field>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Field } from "vee-validate";

defineProps({
  label: {
    type: String,
    required: false,
  },
  type:{
    type: String,
    default:"text"
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: false,
    defalut: "",
  },
  placeholder: {
    type: String,
    required: false,
    defalut: "",
  },
});
</script>
