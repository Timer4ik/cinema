<template>
  <div class="seat__status status">
    <button
      class="status cheap"
      @click="setActiveStatus(0)"
      :class="{ active: seatStatus === 0 }"
    >
      Бюджетное место
    </button>
    <button
      class="status default"
      @click="setActiveStatus(1)"
      :class="{ active: seatStatus === 1 }"
    >
      Стандартное место
    </button>
    <button
      class="status premium"
      @click="setActiveStatus(2)"
      :class="{ active: seatStatus === 2 }"
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
          <td v-for="seat in row" :key="seat.id">
            <div
              class="cell"
              @click="setActiveSeat(seat)"
              :class="{
                active: seat?.active,
                default: seat.status === 1 && seat?.active,
                cheap: seat.status === 0 && seat?.active,
                premium: seat.status === 2 && seat?.active,
              }"
            >
              {{ seat.col }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import Grid from "@/utils/grid";
import { onMounted, ref } from "vue";

const rows = 4;
const cols = 5;

const seatsRows = ref([]);

const seatStatus = ref(0);

const generateSeats = () => {
  const seats = [];
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      seats.push({ col: j, row: i });
    }
  }
  return seats;
};

const setActiveSeat = (seat) => {
  seat.active = !seat.active;
  seat.status = seatStatus.value;
};
const setActiveStatus = (seat) => {
  seatStatus.value = seat;
};

onMounted(() => {
  const grid = new Grid(cols);

  grid.generateGrid(generateSeats(), (item) => {
    return {
      id: Date.now(),
      ...item,
    };
  });

  seatsRows.value = grid.rows;
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

  &.active {
    color: white;
    opacity: 1;
  }
  &.default {
    background-color: rgb(41, 180, 134);
  }
  &.cheap {
    background-color: rgb(59, 59, 59);
  }
  &.premium {
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