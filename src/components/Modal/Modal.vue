<template>
  <Transition>
    <div class="modal" v-if="isOpen">
      <div class="modal__inner">
        <div class="modal__scroll">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  isOpen: Boolean,
});
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s linear;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.close__btn {
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
}

.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.774);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal__inner {
    background-color: white;
    padding: 60px;
    margin: 40px;
    min-width: 800px;
    position: relative;
    padding-top: 35px;
  }

  &.closed {
    transition: opacity 0.2s linear;
    opacity: 0;
  }
}
</style>