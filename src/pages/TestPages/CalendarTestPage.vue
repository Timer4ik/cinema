<template>
    <div class="calendar">
        <div class="calendar__controls">
            <div class="controls__prev" @click="calendar.prevMonth()">prev</div>
            {{ calendar?.selectedDate?.getLocaleString({ year: "numeric", month: "long" }) }}
            <div class="controls__next" @click="calendar.nextMonth()">next</div>
        </div>
        <table class="calendar__table">
            <tr>
                <td>
                    <div class="cell weekDay">ПН</div>
                </td>
                <td>
                    <div class="cell weekDay">ВТ</div>
                </td>
                <td>
                    <div class="cell weekDay">СР</div>
                </td>
                <td>
                    <div class="cell weekDay">ЧТ</div>
                </td>
                <td>
                    <div class="cell weekDay">ПТ</div>
                </td>
                <td>
                    <div class="cell weekDay">СБ</div>
                </td>
                <td>
                    <div class="cell weekDay">ВС</div>
                </td>
            </tr>
            <tr v-for="row, idx in calendar.rows" :key="idx">
                <td v-for="cell in row" :key="cell.id">
                    <div class="cell" :class="{
                        event: cell.isEvent,
                        notSelectedDate: cell.notThisMonth,
                        isRangeEndDate: cell.isRangeEndDate,
                        isRangeStartDate: cell.isRangeStartDate,
                        isRangeBetweenDate: cell.isRangeBetweenDate
                    }" @click="selectRange(cell.cellDate)">
                        {{ cell.cellDate.day }}
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useCalendarDatePicker } from "@/composables/use-calendar-date-picker"
import DateModel from "@/utils/date-model"

const { calendar, endRangeDate, selectRange, startRangeDate, initCalendar } = useCalendarDatePicker()

onMounted(() => {
    
    initCalendar((calendarCell) => {

        if (+calendarCell.cellDate.date === +startRangeDate.value?.date) {
            calendarCell.isRangeStartDate = true
        }
        if (+calendarCell.cellDate.date === +endRangeDate.value?.date) {
            calendarCell.isRangeEndDate = true
        }
        if (calendarCell.cellDate.isDateBetween(startRangeDate.value, endRangeDate.value)) {
            calendarCell.isRangeBetweenDate = true
        }

        if (calendarCell.cellDate.day % 3 === 1) {
            calendarCell.isEvent = true
        }

        return calendarCell
    })
})

</script>


<style lang="scss">
.calendar {
    height: 100vh;

    display: flex;
    margin-top: 150px;
    align-items: center;

    flex-direction: column;

    user-select: none;

    .calendar__controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;

        .controls__prev,
        .controls__next {
            background-color: black;
            color: white;
            padding: 2px 15px;
            cursor: pointer;
        }
    }
}

.cell {
    height: 40px;
    width: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 5px;

    color: white;
    background-color: rgb(44, 44, 44);

    transition: all 0.2s linear;

    cursor: pointer;

    &.event {
        color: rgb(255, 255, 255);
        background-color: rgb(0, 81, 255);
    }

    &.notSelectedDate {
        color: white;
        background-color: rgb(44, 44, 44);

        opacity: 0.1;

        cursor: default;
    }

    &.isRangeStartDate,
    &.isRangeEndDate {
        background-color: rgb(212, 64, 64);
        color: white;
    }

    &.isRangeBetweenDate {
        background-color: rgb(47, 182, 80);
        color: white;
    }
}

.weekDay {
    color: black;
    background-color: transparent;
    cursor: default;
}
</style>