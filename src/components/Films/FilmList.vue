<template>
    <ul class="films">
        <li v-for="film in films" :key="film.id" class="films__item film">
            <div @click="addRentFilm(film)" class="film__rent-add">
                <div v-if="film?.image?.url" class="film__image">
                    <img :src="film?.image?.url" alt="" />
                </div>
                <div v-else class="film__image">
                    <img :src="require(`@/assets/film.png`)" alt="" />
                </div>
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
defineProps({
    films: Array,
})

const emit = defineEmits([
    'click'
])

function addRentFilm(data) {
    emit('addedRentFilm', data)
}
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
    display: flex;
    flex-direction: column;
    flex: 0 1 30%;

    &:hover {
        .film__image {
            &::before {
                background-color: #c59898;

                content: "Добавить в прокат";

                opacity: 1;
            }
        }
    }

    &__rent-add {
        flex-grow: 1;
    }

    &__image {
        position: relative;

        width: 100%;
        height: 100%;

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

        img {
            object-fit: cover;
            object-position: center;

            height: 100%;
        }
    }

    &__text {
        padding: 10px 15px 0;
    }
}
</style>