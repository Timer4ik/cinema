import FilmModel from "./use-film-model";
import DateModel from "@/utils/date-model"

export default class FilmRentModel extends FilmModel {

    constructor(data) {
        super(data)

        this.uid = data.uid

        this.description = data.description

        this.rentStartDate = new DateModel(data.rentStartDate)
        this.rentEndDate = new DateModel(data.rentEndDate)

        this.price = new DateModel(data.price)
        // this._sessionTimes = "12:30,11:40"
        this._sessionTimes = data.sessionTimes

        // proccess | rent | closed 
        this.status = data.status
    }

    get sessionTimes() {
        return this._sessionTimes.split(",")
    }
}