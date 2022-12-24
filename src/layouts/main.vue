<template>
    <div class="wrapper container">
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
        <main class="main">
            <Navigation/>
            <div class="content">
                <slot />
            </div>
        </main>
        <footer>
            SomeFooter
        </footer>
    </div>
</template>

<script setup>
import Navigation from "@/components/Base/Navigation.vue"
</script>

<style lang="scss" scoped>
.header {
    background-color: #32A3E2;

    color: #FFFFFF;

    display: flex;
    align-items: center;
    flex-shrink: 0;

    height: 122px;

    padding: 0 15px;

    &__container {
        display: flex;
        align-items: center;
    }

    &__title {
        color: #FFFFFF;

        font-size: 40px;
    }
}
.main {
    .content {
        padding: 15px;
        flex: 1 1 auto;
    }
}
</style>