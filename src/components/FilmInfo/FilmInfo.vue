<template>
  <div class="film">
    <div class="card">
      <div class="card__left">
        <img
          class="left__image"
          :src="rentFilm?.image?.url"
          alt="Изображение"
        />
      </div>
      <div class="card__right">
        <h1 class="film__title">{{ rentFilm?.title }} {{ rentFilm?.year }}</h1>
        <div class="right__date">19.09.2002 - 18.10.2005</div>
        <div class="right__time">
          <ul>
            <li v-for="(time, idx) in rentFilm.sessions" :key="idx">
              {{ time }}
            </li>
          </ul>
        </div>
        <p>
          {{ rentFilm.description }}
        </p>
        <div class="description__price price">1900 - 5000 рублей</div>

        <SeatsGrid
          :handleSubmit="handleSubmit"
          :handleSeatReserve="handleSeatReserve"
          :seatsRows="seatsRows"
        />

        <button class="buy">Купить билет</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRentFilmById } from "@/composables/use-film-rent";
import { useRoute } from "vue-router";
import SeatsGrid from "@/components/Seats/SeatsGrid.vue";
import { onMounted, ref } from "vue";
import SeatStatus from "@/utils/seatStatus";
import useSeatsGrid from "@/composables/use-seats-grid";
import useApi from "@/composables/use-api";
import useReserveSeats from "@/composables/use-reserve-seats";
import usePersonOrderModel from "@/models/use-person-order-model";
import useUserStore from "@/composables/use-user-store"

const PersonOrderModel = usePersonOrderModel;
const {getUser} = useUserStore()
const { rentFilm, fetchRentFilmById } = useRentFilmById();
const route = useRoute();

onMounted(async () => {
  await fetchRentFilmById(route.params.id);
  initSeatsGrid();
});

const { seatsRows, initSeatsGrid, setSeatStatus, seatStatus, setSeats } =
  useSeatsGrid();

const setActiveButton = (status) => {
  seatStatus.value = status;
};

const handleSeatReserve = async (seat) => {
  const { reserveSeat } = useReserveSeats();
  const newOrder = new PersonOrderModel({
    personUid: getUser().uid,
    filmRendUid: route.params.id,
    cinemaPlaceUid: seat.uid,
  });

  await reserveSeat(newOrder);
};

const handleSubmit = async () => {
  const { updateSeat } = useApi();

  await setSeats(seatsRows.value);
};
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
      flex: 0 0 30%;
      margin-right: 20px;
    }
  }
}
</style>