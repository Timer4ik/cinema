<template>
    <ul v-if="films?.length" class="films">
        <li v-for="film in films" :key="film.id" class="films__item film">
            <div class="film__image">
                <img :src="require(`@/assets/${film.image}`)" alt="">
            </div>
            <div class="film__text">
                <div class="film__title">
                    {{ film.title }}
                </div>
                <div class="film__date">
                    {{ film.date }}
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { useFilms } from '@/composables/use-films';

const { films, fetchFilms } = useFilms({
    height: 100
})

fetchFilms();
console.log(films)

// const films = [
//     {
//         id: 1,
//         title: 'title',
//         image: 'film.png',
//         date: '2022 г'
//     },
//     {
//         id: 2,
//         title: 'title',
//         image: 'film.png',
//         date: '2022 г'
//     },
//     {
//         id: 3,
//         title: 'title',
//         image: 'film.png',
//         date: '2022 г'
//     },
//     {
//         id: 4,
//         title: 'title',
//         image: 'film.png',
//         date: '2022 г'
//     },
//     {
//         id: 5,
//         title: 'title',
//         image: 'film.png',
//         date: '2022 г'
//     }
// ];
</script>

<style lang="scss" scoped>
.films {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 30px 15px;
    justify-content: center;

    font-weight: 700;
}

.film {
    // padding-right: 15px;
    // margin-bottom: 30px;

    &:hover {
        .film__image {
            &::before {
                background-color: #C59898;

                content: "Добавить в прокат";

                opacity: 1;
            }
        }
    }

    &__image {
        position: relative;
        width: 100%;

        &::before {
            background-color: transparent;

            content: "";

            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: 0;
            left: 0;

            transition: 200ms;

            text-align: center;

            opacity: 0;

            width: 100%;
            height: 100%;
        }
    }

    &__text {
        padding: 10px 15px 0;
    }
}
</style>