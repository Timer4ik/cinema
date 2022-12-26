import { db } from "@/utils/firebase"
import getObjectFromModel from "@/utils/getObjectFromModel"
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"

const PATHS = {
    FILMS: "films",
    RENT_FILMS: "films_rent",
    USERS: "users",
    SEATS: "seats",

    TMP_RENTFILM:"rent_film"
}

export const useApiRequest = () => {
    return {
        async request(path, condition) {
            // const q = query(collection(db,"cities"), where("capital", "==", true));
            let q = condition ?
                query(collection(db, path), where(...condition)) :
                query(collection(db, path))
            const querySnapshot = await getDocs(q);

            const data = querySnapshot.docs.map((d) => {
                return { uid: d.id, ...d.data() }
            });
            return data
        },
        async requestById(path, id) {
            const docRef = doc(db, path, id)
            const data = await getDoc(docRef).then(d => ({ uid: d.id, ...d.data() }))
            return data
        },
        async create(path, data) {
            await addDoc(collection(db, path), getObjectFromModel(data))
        },
        async update(path, data) {
            await setDoc(doc(db, path, data.uid), getObjectFromModel(data))
        },
    }
}

export default () => {
    const { request, requestById, create, update } = useApiRequest()

    return {
        async getFilms(condition) {
            return await request(PATHS.FILMS, condition)
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
        async updateRentFilm(data) {
            return await update(PATHS.RENT_FILMS, data)
        },
        async addRentFilm(data) {
            return await create(PATHS.RENT_FILMS, data)
        },

        async addSeat(data) {
            return await create(PATHS.SEATS, data)
        }


    }
}