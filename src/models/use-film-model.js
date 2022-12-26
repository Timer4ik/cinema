import ImageModel from "./use-image-model"

export default class FilmModel {

    constructor(data) {
        this.uid = data.uid
        this.title = data.title
        this.year = data.year
        this.image = new ImageModel(data.image)
    }
}