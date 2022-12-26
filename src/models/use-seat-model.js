export default class SeatModel {

    constructor(data) {
        this.uid = data.uid

        // Премиум место | 
        this.status = data.status
        this.row = data.row
        this.col = data.col
        this.price = data.price
    }

}