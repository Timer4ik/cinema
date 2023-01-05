<template>
  <div class="films">
      <h1>Фильмы в прокате</h1>
      <div class="films__list list flex-cards">
        <div class="list__item item card" v-for="film in rentFilms" :key="film.id">
          <div class="card__image">
            <img class="image" :src="film.image.url" alt="Изображение" />
          </div>
          <div class="films__title">
            {{ film.title }}
            {{ film.year }}
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

const props = defineProps({
  rentFilms: {
    type: Array,
  },
});

</script>

<style lang="scss">
.list__item {
  margin-bottom: 10px;
}
.films__title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
.flex-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    overflow: hidden;
    width: 250px;
    .card__image {
      height: 367px;
      width: 250px;
      border: 1px solid black;
      .image {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>