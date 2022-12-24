import ImageModel from "./use-image-model"

export default class FilmModel {

    constructor(date) {
        this.uid = date.uid
        this.title = date.title
        this.year = date.year
        this.image = new ImageModel(date.image)
    }
}