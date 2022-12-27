import ImageModel from "./use-image-model"
import DefaultFilmLogo from "@/assets/film.png"

export default class FilmModel {

    constructor(data) {
        this.uid = data.uid
        this.title = data.title
        this.year = data.year
        this.image = data?.image ? new ImageModel(data.image) : {url:DefaultFilmLogo}
    }

    
}