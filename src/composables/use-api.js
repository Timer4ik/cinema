import { db } from "@/utils/firebase"
import getObjectFromModel from "@/utils/getObjectFromModel"
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where, limit } from "firebase/firestore"

const PATHS = {
    FILMS: "films",
    RENT_FILMS: "films_rent",
    USERS: "users",
    SEATS: "seats",
    RENT_FILM_SEAT:"rent_film_seat"
}

export const useApiRequest = () => {
    return {
        async request(path, condition, _limit) {
            // const q = query(collection(db,"cities"), where("capital", "==", true));
            let q = condition ?
                query(collection(db, path), where(...condition), limit(_limit)) :
                query(collection(db, path), limit(_limit))
            const querySnapshot = await getDocs(q);

            const data = querySnapshot.docs.map((d) => {
                return { ...d.data(),uid:d.id }
            });
            return data
        },
        async requestById(path, id) {
            const docRef = doc(db, path, id)
            const data = await getDoc(docRef).then(d => ({ ...d.data(), uid: d.id, }))
            return data
        },
        async create(path, data) {
            await addDoc(collection(db, path), getObjectFromModel(data))
        },
        async update(path, data) {
            await setDoc(doc(db, path, data.uid), getObjectFromModel(data))
        },
        async deleted(path, id) {
            await deleteDoc(doc(db, path, id));
        }
    }
}

export default () => {
    const { request, requestById, create, update } = useApiRequest()

    return {
        async getFilms(condition, limit) {
            return await request(PATHS.FILMS, condition, limit)
        },
        async getFilmById(id) {
            return await requestById(PATHS.FILMS, id)
        },
        async updateFilm(data) {
            return await update(PATHS.FILMS, data)
        },
        async addFilm(data) {
            return await create(PATHS.FILMS, data)
        },

        async getRentFilms(condition) {
            return await request(PATHS.RENT_FILMS, condition)
        },
        async getRentFilmById(id) {
            return await requestById(PATHS.RENT_FILMS, id)
        },
        async updateRentFilm(data) {
            return await update(PATHS.RENT_FILMS, data)
        },
        async addRentFilm(data) {
            return await create(PATHS.RENT_FILMS, data)
        },

        async getSeats(condition) {
            return await request(PATHS.SEATS, condition)
        },
        async updateSeat(data) {
            return await update(PATHS.SEATS, data)
        },

        async reserveSeat(data){
            return await create(PATHS.RENT_FILM_SEAT,data)
        }


    }
}