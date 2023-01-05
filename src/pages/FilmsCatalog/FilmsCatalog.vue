<template>
  <PublicLayout>
    <FilmsCatalogList :rentFilms="rentFilms" />
  </PublicLayout>
</template>

<script setup>
import FilmsCatalogList from "@/components/FilmsCatalog/FilmsCatalogList.vue";
import { useRentFilms } from "@/composables/use-film-rent";
import PublicLayout from "@/layouts/public.vue";
import { onMounted } from "@vue/runtime-core";

const { rentFilms, fetchRentsFilm } = useRentFilms();

onMounted(async () => {
  await fetchRentsFilm();
});
</script>