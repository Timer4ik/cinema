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
            <tr v-for="film in films">
                <td class="film__td">
                    {{ film.id }}
                </td>
                <td class="film__td">
                    {{ film.title }}
                </td>
                <td class="film__td">
                    {{ film.status }}
                </td>
                <td class="film__td">
                    {{ film.date_start }}-{{ film.date_end }}
                </td>
                <td class="film__td">
                    <ul class="film__date-rental">
                        <li class="film__date-rental_item" v-for="dateRentail in film.date_rental">
                            {{dateRentail }}
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const films = [
    {
        id: 1,
        title: 'title',
        status: 'В прокате',
        date_start: '18.12.2022',
        date_end: '21.01.2023',
        date_rental: [
            '15:00-16:30',
            '12:00-13:30',
            '12:00-13:30',
            '19:00-20:30'
        ]
    },
    {
        id: 2,
        title: 'title',
        status: 'В прокате',
        date_start: '18.12.2022',
        date_end: '21.01.2023'
    }
];
</script>

<style lang="scss" scoped>
.film {
    background: #D9D9D9;

    border: 1px solid black;
    border-spacing: 0;

    margin: 60px 0;

    width: 100%;

    &__th,
    &__td {
        border: 1px solid black;

        text-align: center;

        padding: 8px 20px;
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