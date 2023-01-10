import FilmRentModel from "@/models/use-film-rent-model"
import { ref } from "vue"
import useApi from "./use-api"

export const useRentFilmById = () => {
    const rentFilm = ref({})

    const fetchRentFilmById = async (uid) => {
        const { getRentFilmById } = useApi()

        const data = await getRentFilmById(uid)

        rentFilm.value = new FilmRentModel(data)
    }

    return {
        rentFilm,
        fetchRentFilmById
    }
}

export const useRentFilms = () => {
    const rentFilms = ref([])

    const fetchRentsFilm = async (condition) => {

        const { getRentFilms } = useApi()

        const data = await getRentFilms(condition)

        rentFilms.value = data.map(film => new FilmRentModel(film))
    }

    return {
        rentFilms,
        fetchRentsFilm
    }
}