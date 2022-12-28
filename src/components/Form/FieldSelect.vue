<template>
  <Field
    validateOnInput
    :model-value="value"
    :name="name"
    :id="name"
    v-slot="{ field, errorMessage }"
  >
    <div class="form__field field" :class="fieldClass" @click="clickSelect(isActive)">
      <label class="field__label" :class="{ error: errorMessage }">
        {{ label }}
      </label>

      <input
        v-bind="field"
        class="field__input"
        :class="{ error: errorMessage }"
        readonly
      >

      <ul v-if="isActive" class="field__select">
        <li
          class="field__option"
          v-for="option in options"
          @key="option.id"
          @click="() => value = clickOption(option)"
        >
          {{ option.rus }}
        </li>
      </ul>

      <div class="field__error">{{ errorMessage }}</div>
    </div>
  </Field>
</template>
  
<script setup>
import { defineProps } from "vue";
import { Field } from "vee-validate";

const emit = defineEmits(["onClick"])

defineProps({
  label: {
    type: String,
    required: false,
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
  options: {
    type: Array,
    required: true
  },

  fieldClass: {
    type: String,
    required: false,
    defalut: "",
  },
  isActive: {
    type: Boolean,
    defalut: false
  }
});

const clickSelect = (isActive) => {
  emit('stateActive', !isActive)
}

const clickOption = (option) => {
  emit('selected', option)
  clickSelect(false)

  return option.rus
}
</script>
  