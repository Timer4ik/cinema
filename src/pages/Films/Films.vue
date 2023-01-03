<template>
  <MainLayout>
    <FilmList :films="films" @addRentFilm="addRentFilm"></FilmList>
  </MainLayout>
</template>

<script setup>
import FilmList from '@/components/Films/FilmList.vue';
import { useRentFilms } from '@/composables/use-film-rent';
import { useFilms } from "@/composables/use-films"
import { onMounted, ref } from 'vue';
import FilmRentModel from "@/models/use-film-rent-model"
import useApi from "@/composables/use-api"

const { films, fetchFilms } = useFilms()

const searchText = ref("");

async function addRentFilm(data) {
    const { addRentFilm } = useApi()

    await addRentFilm(new FilmRentModel(data))
}

const handleSubmit = async () => {
  // await fetchFilms(["title", "==", searchText.value]);
};

onMounted(async () => {
  await fetchRentFilmById({id:"1be8InWuMuBbFUe26DiK"})

  // await fetchRentFilms();
  // await fetchRentFilms();
});
</script>