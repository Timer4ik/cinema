<template>
  <Field
    validateOnInput
    :model-value="value"
    :name="name"
    :id="name"
    v-slot="{ field, errorMessage }"
  >
    <div class="form__field field" :class="fieldClass">
      <label class="field__label" :class="{ error: errorMessage }">
        {{ label }}
      </label>

      <input
        v-bind="field"
        :placeholder="placeholder"
        :type="type"
        class="field__input"
        :class="{ error: errorMessage }"
      />

      <div class="field__error">{{ errorMessage }}</div>
    </div>
  </Field>
</template>

<script setup>
import { defineProps } from "vue";
import { Field } from "vee-validate";

defineEmits(["onClick","onChange"])

defineProps({
  label: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    default: "text",
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

  fieldClass: {
    type: String,
    required: false,
    defalut: "",
  },
});
</script>
