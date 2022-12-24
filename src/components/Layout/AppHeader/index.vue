<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <router-link to="/">
                    <h1 class="header__title">
                        FilmsApp
                    </h1>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #32A3E2;

    color: #FFFFFF;

    display: flex;
    align-items: center;
    flex-shrink: 0;

    height: 122px;

    &__container {
        display: flex;
        align-items: center;
    }

    &__title {
        color: #FFFFFF;

        font-size: 40px;
    }
}
</style>