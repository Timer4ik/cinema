<template>
  <div class="film">
    <div class="card">
      <div class="card__left">
        <img
          class="left__image"
          :src="rentFilms[0]?.image.url"
          alt="Изображение"
        />
      </div>
      <div class="card__right">
        <h1 class="film__title">
          {{ rentFilms[0]?.title }} {{ rentFilms[0]?.year }}
        </h1>
        <div class="right__date">19.09.2002 - 18.10.2005</div>
        <div class="right__time">
          <ul>
            <li>18:00</li>
            <li>18:00</li>
            <li>18:00</li>
            <li>18:00</li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          modi. Atque nihil, quasi quo ipsa saepe, at, inventore minima optio
          officiis possimus cupiditate neque in obcaecati deleniti nostrum dolor
          doloribus.
        </p>
        <div class="description__price price">1900 - 5000 рублей</div>

        <SeatsGrid/>

        <button class="buy">Купить билет</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRentFilms } from "@/composables/use-film-rent";
import { onMounted } from "@vue/runtime-core";
import SeatsGrid from '@/components/Seats/SeatsGrid.vue';

const { rentFilms, fetchRentsFilm } = useRentFilms();

onMounted(async () => {
  await fetchRentsFilm();
});
</script>

<style lang="scss">
.film {
  &__title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .card {
    display: flex;
    border: 1px solid black;
    &__right {
      font-size: 24px;
      .price {
        margin-top: 15px;
        font-size: 24px;
        font-weight: bold;
      }
      .right__date {
        font-size: 16px;
        font-weight: 700;
        display: flex;

        align-items: center;
        margin-bottom: 15px;
        div {
          font-size: 16px;
          font-weight: 700;
          display: flex;
        }
      }
      .right__time ul {
        font-size: 16px;
        font-weight: 700;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        li {
          background: white;
          color: black;
          padding: 10px 5px;
          font-weight: 700;
          display: flex;
          margin-right: 20px;
        }
      }
      .buy {
        margin-top: 15px;
        font-weight: 700;
        background: white;
        font-size: 24px;
        padding: 10px 30px;
        transition: all 0.2s linear;
        &:hover {
        color: white;
        background: rgb(50, 50, 50);
        }
      }
    }
    &__left {
      flex: 1 1 50%;
      margin-right: 20px;
    }
  }
}
</style>