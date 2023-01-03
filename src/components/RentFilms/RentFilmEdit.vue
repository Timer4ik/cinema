<template>
    <Form class="edit" :validation-schema="ValidationSchema" @submit="handleSubmit">
        <div class="edit__title">
            Обработка фильма для проката
        </div>
        <FieldComponent name="name" class="edit__select-film" placeholder="Человек паук" label="Выбранный фильм"
            :value="rentFilm?.title" />

        <div class="edit__block edit__block_first">
            <div class="edit__title edit__title_second">
                Дата проката
            </div>

            <div class="edit__block_dates" @click="isActiveCalendar = !isActiveCalendar">
                <FieldComponent fieldClass="aboba" name="rentalStart" label="Дата начала проката"
                    :value="startRange?.numericDate" readonly />
                <FieldComponent name="rentalEnd" label="Дата конца проката" :value="endRangeDate?.numericDate"
                    readonly />
            </div>

            <div class="calendar" v-if="isActiveCalendar">
                <div class="calendar__inner" v-click-away="() => isActiveCalendar = false">
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
    isRangeBetweenDate: cell.isRangeBetweenDate,
}" @click="selectCellDate(cell.cellDate)">
                                    {{ cell.cellDate.day }}
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div class="edit__block edit__block_second">
            <div class="edit__title edit__title_second">
                Время cеансов
            </div>

            <div class="edit__block_times">
                <FieldComponent name="sessionFirst" type="time" label="Время сеанса 1" :value="rentFilm?.sessionTimes?.[0]" />
                <FieldComponent name="sessionSecond" type="time" label="Время сеанса 2" :value="rentFilm?.sessionTimes?.[1]" />
                <FieldComponent name="sessionThird" type="time" label="Время сеанса 3" :value="rentFilm?.sessionTimes?.[2]" />
                <FieldComponent name="sessionFourth" type="time" label="Время сеанса 4" :value="rentFilm?.sessionTimes?.[3]" />
            </div>
        </div>

        <div class="edit__block edit__block_third">
            <div class="edit__title edit__title_third">
                Дополнительная информация
            </div>

            <div class="edit__block_info">
                <FieldComponent name="price" type="number" label="Цена" :value="rentFilm?.price" />
                <FieldSelect name="status" label="Статус" :value="rentFilm?.status ?? selectedOption?.rus" :options="filmStatus"
                    @selected="setSelected" @stateActive="state => isActiveSelect = state" :isActive="isActiveSelect">
                </FieldSelect>
                <FieldComponent name="description" label="Описание" :value="rentFilm?.description" />
            </div>
        </div>

        <button class="edit__save">
            Сохранить
        </button>
    </Form>
</template>

<script setup>
import { useRentFilmById } from "@/composables/use-film-rent"
import { Form } from "vee-validate"
import * as Yup from "yup";
import filmStatus from '@/utils/filmStatus'
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCalendarDatePicker } from "@/composables/use-calendar-date-picker"
import useApi from "@/composables/use-api"
import FilmRentModel from "@/models/use-film-rent-model"

const { calendar, endRangeDate, selectRange, startRangeDate, initCalendar } = useCalendarDatePicker()
const isActiveCalendar = ref(false)

const startRange = ref("");
const endRange = ref("")

const selectCellDate = (cellDate) => {
    selectRange(cellDate)
    startRange.value = startRangeDate.value
    endRange.value = endRangeDate.value
}

const { rentFilm, fetchRentFilmById, } = useRentFilmById()

const route = useRoute()

onMounted(async () => {
    await fetchRentFilmById(route.params.uid)

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

        if (calendarCell.cellDate.isDateBetween(endRangeDate.value, startRangeDate.value)) {
            calendarCell.isRangeBetweenDate = true
        }

        if (calendarCell.cellDate.day % 3 === 1) {
            calendarCell.isEvent = true
        }

        return calendarCell
    })
})

const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Введите название"),
    rentalStart: Yup.string().required("Введите дату начало проката"),
    rentalEnd: Yup.string().required("Введите дату окончание проката"),
    sessionFirst: Yup.string().required("Введите время"),
    sessionSecond: Yup.string().required("Введите время"),
    sessionThird: Yup.string().required("Введите время"),
    sessionFourth: Yup.string().required("Введите время"),
    price: Yup.string().required("Введите цену"),
    status: Yup.string().required("Выберите статус"),
    description: Yup.string().required("Введите описание")
})

const isActiveSelect = ref(false)
const selectedOption = ref({})

const setSelected = (data) => {
    isActiveSelect.value = false
    selectedOption.value = data
}

const handleSubmit = async (values) => {
    const {
        name,
        rentalStart,
        rentalEnd,
        sessionFirst,
        sessionSecond,
        sessionThird,
        sessionFourth,
        price,
        status,
        description
    } = values

    const data = {...rentFilm.value, ...values}

    const { updateRentFilm } = useApi()

    await updateRentFilm(new FilmRentModel(data))
};
</script>

<style lang="scss" scoped>
.edit {
    &__title {
        font-size: 20px;
        font-weight: 700;

        margin-bottom: 16px;

        &_second {
            font-size: 18px;

            margin-bottom: 10px;
        }
    }

    &__select-film {
        max-width: 285px;
    }

    &__block {
        &_dates {
            display: inline-flex;
            column-gap: 30px;
        }

        &_times {
            display: flex;
            column-gap: 36px;
        }
    }

    &__save {
        background: #D9D9D9;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 16px;

        max-width: 300px;
        width: 100%;
        height: 71px;
    }
}

:deep(.form__field) {
    display: flex;
    flex-direction: column;

    margin-bottom: 14px;

    .field__input {
        border: none;
        padding: 0;
        margin: 0;
        color: rgba(0, 0, 0, 0.788);
        outline: none;

        padding: 10px 5px;
        font-size: 16px;
        border-bottom: 1px solid rgba(141, 141, 141, 0.432);

        margin-bottom: 10px;

        &::placeholder {
            color: rgb(173, 173, 173);
        }

        &.error {
            border-bottom: 1px solid red;

        }
    }

    .field__error {
        font-size: 14px;
        color: red;
    }

    .field__label {
        font-size: 14px;
        color: gray;
    }
}

.calendar {
    background: white;

    position: absolute;

    z-index: 1000;

    &__inner {
        display: inline-flex;
        align-items: center;

        flex-direction: column;

        user-select: none;
    }

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