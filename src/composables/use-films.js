import FilmModel from "@/models/use-film-model"
import { ref } from "vue"
import useApi from "./use-api"

export const useFilms = () => {

    const films = ref([])

    const fetchFilms = async (limit) => {

        const { getFilms } = useApi()

        const data = await getFilms(null, limit)

        films.value = data.map(film => new FilmModel(film))
    }

    return {
        films,
        fetchFilms
    }
}