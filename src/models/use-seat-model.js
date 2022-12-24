export default class SeatModel {

    constructor(data) {
        this.uid = data.uid

        // Премиум место | 
        this.status = data.status
        this.seatNumber = data.seatNumber
        this.seatPrice = data.searPrice
    }

}