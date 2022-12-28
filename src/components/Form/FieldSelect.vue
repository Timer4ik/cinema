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

      <ul
        class="field__select"
        v-if="isActive"
        v-click-away="() => clickSelect(true)"
      >
        <li
          class="field__option"
          v-for="option in options"
          @key="option.id"
          @click="clickOption(option)"
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
}
</script>

<style lang="scss" scoped>
.field {
  cursor: pointer;

  position: relative;

  &__select {
    background-color: #fff;

    position: absolute;
    top: 100%;
    left: 0;

    min-width: 100%;
  }

  &__option {
    padding: 4px;
  }
}
</style>