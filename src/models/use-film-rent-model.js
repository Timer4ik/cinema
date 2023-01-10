import FilmModel from "./use-film-model";
import DateModel from "@/utils/date-model"

export default class FilmRentModel extends FilmModel {

    constructor(data) {
        super(data)

        this.uid = data.uid

        this.description = data.description

        this.rentStartDate = data.rentStartDate
        this.rentEndDate = data.rentEndDate

        this.price = data.price
        // this._sessionTimes = "12:30,11:40"
        this.sessionTimes = data.sessions

        // proccess | rent | closed 
        this.status = data.status
    }

    get sessions() {
        return this._sessionTimes ? this._sessionTimes.split(",") : null
    }

    get startDate() {
        return new DateModel(this.rentStartDate)
    }

    get endDate() {
        return new DateModel(this.rentEndDate)
    }
}