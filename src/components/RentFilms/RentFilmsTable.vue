<template>
    <table class="film">
        <tbody class="film__tbody">
            <tr>
                <th class="film__th">
                    №
                </th>
                <th class="film__th">
                    Название
                </th>
                <th class="film__th">
                    Статус проката
                </th>
                <th class="film__th">
                    Дата начала - конца проката
                </th>
                <th class="film__th">
                    Время проката
                </th>
            </tr>
            <tr class="film__item" v-for="rentFilm in rentFilms" @key="rentFilm.uid" @click="$router.push(`/admin/rentFilmEdit/${rentFilm.uid}`)">
                <td class="film__td">
                    {{ rentFilm.uid }}
                </td>
                <td class="film__td">
                    {{ rentFilm.title }}
                </td>
                <td class="film__td">
                    {{ filmStatus[rentFilm.status] }}
                </td>
                <td class="film__td">
                    {{ rentFilm.rentStartDate?.date ? rentFilm.rentStartDate?.date : '' }}
                    -
                    {{ rentFilm.rentEndDate?.date ? rentFilm.rentEndDate?.date : '' }}
                </td>
                <td class="film__td">
                    <ul class="film__date-rental">
                        <li class="film__date-rental_item" v-for="dateRentail in rentFilm.sessionTimes">
                            {{ dateRentail }}
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import filmStatus from '@/utils/filmStatus'

defineProps({
    rentFilms: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.film {
    background: #D9D9D9;

    border: 1px solid black;
    border-spacing: 0;

    width: 100%;

    &__th,
    &__td {
        border: 1px solid black;

        text-align: center;

        padding: 8px 20px;
    }

    &__item {
        cursor: pointer;
    }

    &__date-rental {
        display: flex;
        flex-wrap: wrap;

        &_item {
            text-align: center;

            flex: 1 0 50%;
        }
    }
}
</style>