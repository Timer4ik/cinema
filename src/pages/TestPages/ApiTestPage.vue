<template>
  <div>
  </div>
</template>

<script setup>
import useApi from '@/composables/use-api';
import RentFilmModel from '@/models/use-film-rent-model';
import SeatModel from '@/models/use-seat-model';
import { onMounted } from 'vue';

const { getFilms, addFilm, updateFilm, getFilmById,addSeat } = useApi()

onMounted(async () => {

  const newFilm = new RentFilmModel({
    title: "Новый фильм",
    year: "2022",
    image: {
      height: "200",
      width: "400",
      url: "http://fsdaf/someImage.png"
    }
  })
  await addFilm(newFilm)
  await updateFilm({
    uid:"NqdAiAZmXHOednpWa238",
    name: "new updated"
  })
  console.log(await getFilmById("PeBe6zjv8Pdx448uni1w"))
})
</script>
