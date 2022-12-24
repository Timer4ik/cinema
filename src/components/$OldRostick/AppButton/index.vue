<template>
    <button class="button" :class="[styleButton === 'blue' ? 'blue' : '']">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'AppButton',
}
</script>

<script setup>
const props = defineProps({
    styleButton: String,
    require: false
})
</script>

<style lang="scss" scoped>
.button {
    background-color: #D9D9D9;

    font-size: 16px;

    &.blue {
        background-color: #32A3E2;

        color: #fff;
    }
}
</style>