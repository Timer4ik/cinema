export default class DateModel {

    constructor(date) {
        if (!date)
            this.date = null;
        else if (date instanceof DateModel)
            this.date = new Date(date.date)
        else
            this.date = new Date(date)
    }

    isDateBetween(date1, date2) {
        return +date1?.date < +this.date && +this.date < +date2?.date
    }

    static substractYMD(date, y, m, d) {

        let _date = new DateModel(date)

        let { day, monthIndex, year } = _date.getDateInfo()

        _date.date.setFullYear(year - y, monthIndex - m, day - d)

        return _date
    }
    substractYMD(y, m, d) {

        let { day, monthIndex, year } = this.getDateInfo()

        this.date.setFullYear(year - y, monthIndex - m, day - d)
        return this
    }


    static addYMD(date, y, m, d) {

        let _date = new DateModel(date)

        let { day, monthIndex, year } = _date.getDateInfo()

        _date.date.setFullYear(year + y, monthIndex + m, day + d)

        return _date
    }
    addYMD(y, m, d) {

        let { day, monthIndex, year } = this.getDateInfo()

        this.date.setFullYear(year + y, monthIndex + m, day + d)
        return this
    }


    static setYMD(date, y, m, d) {

        let _date = new DateModel(date)

        let { day, monthIndex, year } = _date.getDateInfo()

        _date.date.setFullYear(y || year, m || monthIndex, d || day)

        return _date
    }
    setYMD(y, m, d) {

        let { day, monthIndex, year } = this.getDateInfo()

        this.date.setFullYear(y || year, m || monthIndex, d || day)
        return this
    }


    static getDateInfo(date) {
        return {
            weekDay: date.getDay(),
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            monthIndex: date.getMonth()
        }
    }
    getDateInfo() {
        return {
            weekDay: this.date.getDay(),
            day: this.date.getDate(),
            month: this.date.getMonth() + 1,
            year: this.date.getFullYear(),
            monthIndex: this.date.getMonth()
        }
    }

    getLocaleString(options) {
        return this.date.toLocaleDateString("ru-RU", options)
    }

    get numericDate() {
        return this.date.toLocaleDateString("ru-RU", { year: "numeric", month: "numeric", day: "numeric" })
    }

    get year() {
        return this.getDateInfo().year
    }

    get day() {
        return this.getDateInfo().day
    }

    get month() {
        return this.getDateInfo().month
    }

    get weekDay() {
        return this.getDateInfo().weekDay
    }


}