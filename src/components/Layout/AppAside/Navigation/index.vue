<template>
    <ul class="navigation">
        <li class="navigation__item">
            <router-link
                :class="{'_active': $router.currentRoute.value.path === '/'}"
                class="navigation__link"
                to="/"
            >
                Фильмы
            </router-link>
        </li>
        <li class="navigation__item">
            <router-link
                :class="{'_active': $router.currentRoute.value.path.substring(0, 7) === '/rental'}"
                class="navigation__link"
                to="/rental"
            >
                Фильмы в прокате
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'AppAsideNavigation'
}
</script>

<style lang="scss" scoped>
.navigation {
    display: flex;
    flex-direction: column;
    row-gap: 22px;

    &__link {
        background-color: #184158;

        color: #fff;

        display: inline-block;

        font-size: 24px;

        padding: 18px;

        transition: 200ms;

        width: 100%;

        &:hover,
        &._active {
            background-color: #32A3E2;
        }
    }
}
</style>