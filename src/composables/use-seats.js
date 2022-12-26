import { async } from "@firebase/util"
import { ref } from "vue"
import useApi from "./use-api"
import useSeatModel from "@/models/use-seat-model"

export default () => {

    const seats = ref([])

    const fetchSeats = async (condition) => {
        const Model = useSeatModel
        const { getSeats } = useApi()

        const data = await getSeats()
        seats.value = data[0].list.map(seat => new Model(seat))
    }

    const setSeats = async (seatsRow) => {
        const { updateSeat } = useApi();

        const seatsList = {
            uid:"seats",
            list:[]
        }

        seatsRow.forEach((rows) => {
            rows.forEach((col) => {
                seatsList.list.push(col)
            });
        });
        console.log(seatsRow);

        await updateSeat(seatsList);
    }

    return {
        seats,
        fetchSeats,
        setSeats
    }
}