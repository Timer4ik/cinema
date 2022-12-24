export default class Grid {

    constructor(rowLength) {
        this.rowLength = rowLength
        this.rows = [[]]
    }

    generateGrid(data, callback) {

        let rows = [
            []
        ]
        let row = 0

        data.forEach(item => {
            if (rows[row].length === this.rowLength) {
                rows.push([])
                row++
            }

            rows[row].push(callback(item))
        })

        this.rows = rows

    }

}