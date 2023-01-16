import { ref } from "vue"
import useApi from "./use-api"
import usePersonOrderModel from "@/models/use-person-order-model"

export default () => {

    const reservedSeats = ref("")

    const fetchReservedSeats = async (rentFilmId) => {
        const Api = useApi()
        const Model = usePersonOrderModel

        const data = await Api.getReservedSeats(["rent_film_id","==",rentFilmId])

        reservedSeats.value = data.map(reservedSeat => new Model(reserveSeat))
    }

    const reserveSeat = async (data) => {
        const Api = useApi()

        await Api.reserveSeat(data)
    }

    return {
        reservedSeats, fetchReservedSeats,reserveSeat
    }
}