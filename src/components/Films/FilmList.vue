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
const films = [
    {
        id: 1,
        title: 'title',
        image: 'film.png',
        date: '2022 г'
    },
    {
        id: 2,
        title: 'title',
        image: 'film.png',
        date: '2022 г'
    },
    {
        id: 3,
        title: 'title',
        image: 'film.png',
        date: '2022 г'
    },
    {
        id: 4,
        title: 'title',
        image: 'film.png',
        date: '2022 г'
    },
    {
        id: 5,
        title: 'title',
        image: 'film.png',
        date: '2022 г'
    }
];
</script>

<style lang="scss" scoped>
.films {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 48px 70px;
    flex-grow: 1;

    font-weight: 700;

    padding: 60px 0;
}

.film {
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