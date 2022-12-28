<template>
    <Form class="edit" :validation-schema="ValidationSchema" @submit="handleSubmit">
        <div class="edit__title">
            Обработка фильма для проката
        </div>
        <FieldComponent name="name" class="edit__select-film" placeholder="Человек паук" label="Выбранный фильм" />

        <div class="edit__block edit__block_first">
            <div class="edit__title edit__title_second">
                Дата проката
            </div>

            <div class="edit__block_dates">
                <FieldComponent fieldClass="aboba" name="rentalStart" type="date" label="Дата начала проката" />
                <FieldComponent name="rentalEnd" type="date" label="Дата конца проката" />
            </div>
        </div>

        <div class="edit__block edit__block_second">
            <div class="edit__title edit__title_second">
                Время cеансов
            </div>

            <div class="edit__block_times">
                <FieldComponent name="sessionFirst" type="time" label="Время сеанса 1" />
                <FieldComponent name="sessionSecond" type="time" label="Время сеанса 2" />
                <FieldComponent name="sessionThird" type="time" label="Время сеанса 3" />
                <FieldComponent name="sessionFourth" type="time" label="Время сеанса 4" />
            </div>
        </div>

        <div class="edit__block edit__block_third">
            <div class="edit__title edit__title_third">
                Дополнительная информация
            </div>

            <div class="edit__block_info">
                <FieldComponent name="price" type="number" label="Цена" />
                <FieldSelect
                    name="status"
                    label="Статус"
                    :options="filmStatus"
                    @selected="setSelected"
                    @stateActive="setActiveSelect"
                    :isActive="isActiveSelect"
                ></FieldSelect>
                <FieldComponent name="description" label="Описание" />
            </div>
        </div>

        <button class="edit__save">
            Сохранить
        </button>
    </Form>
</template>

<script setup>
import { useRentFilms } from "@/composables/use-film-rent";
import { Form } from "vee-validate"
import * as Yup from "yup";
import filmStatus from '@/utils/filmStatus'
import { ref } from 'vue'

const { editRentFilm } = useRentFilms()

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

const setActiveSelect = (value) => {
    //isActiveSelect.value = true
    isActiveSelect.value = value
    //console.log(isActiveSelect.value)
}

const setSelected = (data) => {
    isActiveSelect.value = false
    console.log(data)
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

    await editRentFilm(values)
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
            display: flex;
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
</style>