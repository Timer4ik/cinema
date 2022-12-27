<template>
    <MainLayout>
        <FilmList :films="films" @addRentFilm="addRentFilm"></FilmList>
    </MainLayout>
</template>

<script setup>
import FilmList from '@/components/Films/FilmList.vue';
import { useFilms } from "@/composables/use-films"
import { onMounted, ref } from 'vue';

const { films, fetchFilms } = useFilms()

const searchText = ref("")

function addRentFilm(data) {
    console.log(data);
}

const handleSubmit = async () => {
    await fetchFilms(["title", "==", searchText.value])
}

onMounted(async () => {
    await fetchFilms()
})

</script>