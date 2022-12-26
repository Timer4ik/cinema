import FilmModel from "@/models/use-film-model"
import { ref } from "vue"
import useApi from "./use-api"

export const useFilms = () => {

    const films = ref([])

    const fetchFilms = async (condition) => {

        const { getFilms } = useApi()

        const data = await getFilms(condition)

        films.value = data.map(film => new FilmModel(film))
    }

    return {
        films,
        fetchFilms
    }
}