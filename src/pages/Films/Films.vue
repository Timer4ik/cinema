<template>
  <MainLayout>
    <FilmList :films="films" @addRentFilm="addRentFilm"></FilmList>
  </MainLayout>
</template>

<script setup>
import FilmList from "@/components/Films/FilmList.vue";
import { useRentFilms } from "@/composables/use-film-rent";
import { useFilms } from "@/composables/use-films";
import { onMounted, ref } from "vue";

const { films, fetchFilms } = useFilms();
const { createRentFilm, fetchRentFilms,fetchRentFilmById } = useRentFilms();

const searchText = ref("");

async function addRentFilm(data) {
  await createRentFilm({ ...data });
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