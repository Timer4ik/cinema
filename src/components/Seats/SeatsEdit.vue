<template>
  <div class="seat__status status">
    <button
      class="status cheap"
      @click="setActiveButton(0)"
      :class="{ active: seatStatus === SeatStatus.CHEAP.id }"
    >
      Бюджетное место
    </button>
    <button
      class="status default"
      @click="setActiveButton(1)"
      :class="{ active: seatStatus === SeatStatus.STANDARD.id }"
    >
      Стандартное место
    </button>
    <button
      class="status premium"
      @click="setActiveButton(2)"
      :class="{ active: seatStatus === SeatStatus.EXPENSIVE.id }"
    >
      Премиум место
    </button>
  </div>
  <div class="cinema__main">
    <table class="cinema">
      <tbody class="cinema_table">
        <tr>
          <td>
            <div class="cell row">Ряд 1</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="cell row">Ряд 2</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="cell row">Ряд 3</div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="cell row">Ряд 4</div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="cinema">
      <tbody class="cinema_table">
        <tr v-for="(row, idx) in seatsRows" :key="idx">
          <td v-for="seat in row" :key="seat.uid">
            <div
              class="cell"
              @click="setSeatStatus(seat)"
              :class="{
                default: seat.status === 1,
                cheap: seat.status === 0,
                premium: seat.status === 2,
              }"
            >
              {{ seat.col }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <button @click="handleSubmit">Сохранить</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SeatStatus from "@/utils/seatStatus";
import useSeatsGrid from "@/composables/use-seats-grid";
import useApi from "@/composables/use-api";

const { seatsRows, initSeatsGrid, setSeatStatus, seatStatus, setSeats } =
  useSeatsGrid();

const setActiveButton = (status) => {
  seatStatus.value = status;
};

const handleSubmit = async () => {
  const { updateSeat } = useApi();

  await setSeats(seatsRows.value);
};

onMounted(async () => {
  initSeatsGrid();
});
</script>

<style lang="scss" scoped>
.cinema__main {
  display: flex;
  user-select: none;
}
.cinema {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cell {
  height: 100px;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;

  border: 1px solid rgb(190, 190, 190);

  opacity: 0.3;

  font-weight: bold;

  cursor: pointer;
  transition: background-color 0.2s linear;

  &.reserved {
    background-color: rgb(236, 51, 51);
    color: white;
  }

  &.default {
    opacity: 1;
    background-color: rgb(41, 180, 134);
  }
  &.cheap {
    opacity: 1;
    background-color: rgb(59, 59, 59);
  }
  &.premium {
    opacity: 1;
    background-color: rgb(255, 239, 13);
  }
}

.row {
  border: none;
  font-size: 16px;
  width: 80px;
}

.seat__status {
  margin-bottom: 20px;
  .status {
    padding: 10px 20px;
    margin-right: 10px;
    color: white;
    background-color: rgb(59, 165, 59);

    transition: background-color, opacity 0.2s linear;
    width: 200px;
    &.default {
      background-color: rgb(41, 180, 134);
      opacity: 0.3;
    }
    &.cheap {
      background-color: rgb(59, 59, 59);
      opacity: 0.3;
    }
    &.premium {
      color: black;
      background-color: rgb(255, 239, 13);
      opacity: 0.3;
    }
    &.active {
      opacity: 1;
      font-weight: bold;
    }
  }
}
</style>