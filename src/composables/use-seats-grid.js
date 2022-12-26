import Grid from "@/utils/grid";
import SeatStatuses from "@/utils/seatStatus";
import { ref } from "vue";
import useSeats from "./use-seats";

export default () => {

    const seatsRows = ref([]);
    const { seats, fetchSeats, setSeats } = useSeats();
    const seatStatus = ref(0);

    const setSeatStatus = (seat) => {
        if (seat.status !== -1) seat.status = -1;
        else seat.status = SeatStatuses[seatStatus.value].id;
      };

    const initSeatsGrid = async () => {
        await fetchSeats();
        const grid = new Grid(5);
        grid.generateGrid(seats.value, (item) => {
            return {
                uid: item.uid,
                status: item.status,
                price: SeatStatuses[seatStatus.value].price,
                ...item,
            };
        });
        seatsRows.value = grid.rows;
    }

    return {
        seatsRows, initSeatsGrid,setSeatStatus,seatStatus,setSeats
    }

}