import DateModel from "@/utils/date-model";
import Grid from "./grid";

export default class Calendar extends Grid {

    constructor(startDate) {
        super(7)

        const date = new DateModel(startDate ?? Date.now())
        this.selectedDate = date.substractYMD(0, 0, date.day - 1)
    }

    nextMonth() {
        this.selectedDate.addYMD(0, 1, 0)
        this.generateCalendar()
    }

    prevMonth() {
        this.selectedDate.substractYMD(0, 1, 0)
        this.generateCalendar()
    }

    getFirstMonday() {

        let firstMonthDay = new DateModel(this.selectedDate)

        while (firstMonthDay.getDateInfo().weekDay !== 1) {
            firstMonthDay.substractYMD(0, 0, 1)
        }
        return firstMonthDay
    }

    // addProps(callback) {
    //     this.rows.forEach(row => row.forEach(col => {
    //         console.log(col);
    //         col = {cellDate:col.cellDate,id:col.id}
    //         col = callback ? callback(col) : this.callback(col)
    //     }))
    // }

    generateCalendar(callback) {

        this.callback = callback ?? this.callback

        let firstMonday = this.getFirstMonday()

        let lastMonthDay = new DateModel(this.selectedDate).addYMD(0, 1, 0).setYMD(null, null, -1)

        let pointerDate = new DateModel(firstMonday)
        let dates = []

        while (this.selectedDate.month === pointerDate.month || pointerDate.weekDay !== 1 || +pointerDate.date < +lastMonthDay.date) {

            const cell = {
                id: +pointerDate.date,
                cellDate: new DateModel(pointerDate),
            }
            if (pointerDate.date < this.selectedDate.date
                || pointerDate.date >= DateModel.addYMD(this.selectedDate, 0, 1, 0).date
            ) {
                cell.notThisMonth = true
            }

            dates.push(cell)
            pointerDate.addYMD(0, 0, 1)
        }

        this.generateGrid(dates, this.callback)

    }
    // =============================================
    // generateCalendar(callback = (data) => data) {

    //     this.callback = callback ?? this.callback


    //     let firstMonday = this.getFirstMonday()
    //     let pointerDate = new DateModel(firstMonday)

    //     let rows = [[]]
    //     let row = 0

    //     while (this.selectedDate.month === pointerDate.month || pointerDate.weekDay !== 0 || rows.length < 3) {
    //         if (rows[row].length === 7) {
    //             rows.push([])
    //             row++
    //         }

    //         rows[row].push(callback(new DateModel(pointerDate)))

    //         pointerDate.addYMD(0, 0, 1)
    //     }

    //     this.rows = rows
    // }
    // =============================================
    // generateCalendar(callback = (data) => data) {

    //     let firstMonday = this.getFirstMonday()
    //     let pointerDate = new DateModel(firstMonday)

    //     let dates = []

    //     while (this.selectedDate.month === pointerDate.month || pointerDate.weekDay !== 0 || dates.length < 10) {
    //         pointerDate.addYMD(0, 0, 1)
    //         dates.push(new DateModel(pointerDate))
    //     }

    //     const grid = new Grid(7)
    //     grid.generate(dates,callback)

    // }
    // =============================================

}