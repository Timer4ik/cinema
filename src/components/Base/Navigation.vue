<template>
    <aside class="navigation">
        <ul class="navigation__list list">
            <li class="list__item item">
                <router-link :class="{ '_active': $route.path === '/' }" class="item__link" to="/">
                    Фильмы
                </router-link>
            </li>
            <li class="list__item">
                <router-link :class="{ '_active': $route.path === '/rentFilms' }" class="item__link" to="/rentFilms">
                    Фильмы в прокате
                </router-link>
            </li>
        </ul>
        <div class="profile">
            <router-link class="profile__link" to="/">
                <AppButton class="profile__button" styleButton="blue">
                    <span class="profile__avatar">
                        <img :src="require(`@/assets/avatar.png`)" alt="">
                    </span>
                    <span>
                        Пользователь 1
                    </span>
                    <span class="profile__arrow">
                        <svg width="48" height="38" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 16.5C1.61929 16.5 0.499996 17.6193 0.499996 19C0.499996 20.3807 1.61929 21.5 3 21.5V16.5ZM46.7678 20.7678C47.7441 19.7915 47.7441 18.2085 46.7678 17.2322L30.8579 1.32233C29.8816 0.34602 28.2986 0.34602 27.3223 1.32233C26.346 2.29864 26.346 3.88155 27.3223 4.85786L41.4645 19L27.3223 33.1421C26.346 34.1184 26.346 35.7014 27.3223 36.6777C28.2986 37.654 29.8816 37.654 30.8579 36.6777L46.7678 20.7678ZM3 21.5L45 21.5V16.5L3 16.5V21.5Z"
                                fill="white" />
                        </svg>
                    </span>
                </AppButton>
            </router-link>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
.navigation {
    background-color: #2C7079;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 30%;

    padding: 15px;
    padding-top: 30px;

    height: 100%;

    .list {
        display: flex;
        flex-direction: column;
        .item {
        margin-bottom: 15px;
        }
        .item__link {
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

    .profile {
        &__button {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 14px;

            font-weight: 700;

            padding: 11px 0;

            width: 100%;
        }

        &__avatar {
            flex-shrink: 0;

            img {
                border-radius: 50%;

                width: 38px;
                height: 38px;
            }
        }

        &__arrow {
            display: flex;
            align-items: center;
        }
    }
}
</style>