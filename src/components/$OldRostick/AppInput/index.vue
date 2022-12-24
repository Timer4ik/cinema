<template>
    <div class="input-block">
        <label class="input-block__label" :for="forAndId">
            <slot></slot>
        </label>
        <input class="input-block__input" :type="type" :id="forAndId">
    </div>
</template>

<script setup>
const props = defineProps({
    forAndId: {
        type: String
    },
    type: {
        type: String 
    }
})
</script>

<style lang="scss" scoped>
.input-block {
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    &__input {
        background: #F1F1F1;

        color: #424242;

        font-size: 18px;
        font-weight: 700;

        padding: 15px;

        width: 100%;

        &:disabled {
            color: #A0A0A0;
        }
    }
}
</style>