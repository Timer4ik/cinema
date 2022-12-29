<template>
    <MainLayout>
        <RentFilmsList :rentFilms="rentFilms"></RentFilmsList>
    </MainLayout>
</template>

<script setup>
import RentFilmsList from '@/components/RentFilms/RentFilmsTable.vue'

import { useRentFilms } from "@/composables/use-film-rent"
import { onMounted } from 'vue'

const { rentFilms, fetchRentsFilm } = useRentFilms()

const films = [
    {
        id: 1,
        title: 'title',
        status: 'В прокате',
        rentStartDate: '18.12.2022',
        rentEndDate: '21.01.2023',
        sessionTimes: [
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
        rentStartDate: '18.12.2022',
        rentEndDate: '21.01.2023'
    }
];

onMounted(async () => {
    await fetchRentsFilm()
    console.log(rentFilms)
})
</script>