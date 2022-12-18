import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import useUserStore from "@/composables/use-user-store";

const firebaseConfig = {
    apiKey: "AIzaSyBM23f6x20ecOiXwHix6rODJWU-ekD_nC4",
    authDomain: "movie-c2057.firebaseapp.com",
    databaseURL: "https://movie-c2057-default-rtdb.firebaseio.com",
    projectId: "movie-c2057",
    storageBucket: "movie-c2057.appspot.com",
    messagingSenderId: "5599198659",
    appId: "1:5599198659:web:ab8b84b88d6e1cffb05176"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()

export { auth, db }