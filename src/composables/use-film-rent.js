import FilmRentModel from "@/models/use-film-rent-model"
import { ref } from "vue"
import useApi from "./use-api"

export const useRentFilms = () => {

    const rentFilms = ref([])
    const rentFilm = ref({})

    const fetchRentsFilm = async (condition) => {

        const { getRentFilms } = useApi()

        const data = await getRentFilms(condition)

        rentFilms.value = data.map(film => new FilmRentModel(film))
    }

    const fetchRentFilmById = async ({id}) => {
        const { getRentFilmById } = useApi()

        const data = await getRentFilmById(id)

        rentFilm.value = new FilmRentModel(data) 
    }

    const createRentFilm = async (condition) => {
        const { addRentFilm } = useApi()

        const data = new FilmRentModel(condition)

        await addRentFilm(data)
    }

    const editRentFilm = async (condition) => {
        const { updateRentFilm } = useApi()

        const data = new FilmRentModel(condition)

        await updateRentFilm(data)
    }

    return {
        rentFilms,
        fetchRentsFilm,
        rentFilm,
        fetchRentFilmById,
        createRentFilm,
        editRentFilm
    }
}