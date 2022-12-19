<template>
    <form class="edit" @submit.prevent>
        <div class="edit__title">
            Обработка фильма для проката
        </div>
        <div class="edit__title">
            Дата проката
        </div>
        <div class="edit__title">
            Время cеансов
        </div>
        <AppButton class="edit__save">
            Сохранить
        </AppButton>
    </form>
</template>

<script>
export default {
    name: 'AppFilmsEdit'
}
</script>

<style lang="scss" scoped>
.edit {
    flex-grow: 1;

    padding: 60px 0;

    &__tilte {
        font-size: 18px;
        font-weight: 700;
    }
}
</style>