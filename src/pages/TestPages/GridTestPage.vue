<template>
    <table class="cinema">
        <div class="cinema_table">
            <tr v-for="row in seatsRows" :key="row">
                <td v-for="seat in row" :key="seat.id">
                    <div class="cell" :class="{ reserved: seat.reserved }">
                        {{ seat.seatNumber }}
                    </div>
                </td>
            </tr>
        </div>
    </table>
</template>

<script setup>
import Grid from '@/utils/grid';
import { onMounted, ref } from 'vue';

const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
const reservedSeats = [2, 3, 11, 5]

const seatsRows = ref([])

onMounted(() => {
    const grid = new Grid(6)

    grid.generateGrid(seats, (item) => {

        let reserved = false

        if (item in reservedSeats) reserved = true

        return {
            id: Date.now(),
            seatNumber: item,
            reserved
        }
    })

    seatsRows.value = grid.rows
})


</script>

<style lang="scss" scoped>
.cinema {
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}



.cell {
    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 5px;

    background-color: rgb(190, 190, 190);
    
    cursor: pointer;

    &.reserved {
        background-color: rgb(236, 51, 51);
        color: white;
    }
}
</style>