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

onMounted(async () => {
    await fetchRentsFilm()
})
</script>