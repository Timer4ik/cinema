import { db } from "@/utils/firebase";
import useUserStore from "@/composables/use-user-store"

import { doc, setDoc, getDoc } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth();

export default () => {
    const { getUser, clearUser, setUser } = useUserStore()

    const checkAuth = () => {

        const data = JSON.parse(localStorage.getItem("user"))
        setUser(data)
    }

    // TMP DEVFUNC
    const register = async ({ name, email, password }) => {

        const response = await createUserWithEmailAndPassword(auth, email, password)

        await setDoc(doc(db, "users", response.user.uid), {
            uid: response.user.uid,
            displayName: name,
            email
        })
    }

    const login = async ({ email, password }) => {

        const response = await signInWithEmailAndPassword(auth, email, password)

        const userDocRef = doc(db, "users", response.user.uid)
        const userDoc = await getDoc(userDocRef)

        const user = userDoc.data()
        setUser({...user,uid:response.user.uid})
    }

    const logout = async () => {

        signOut(auth)

        clearUser()
    }

    const showAuth = () => {
        console.log(getUser());
    }

    return { login, register, logout, showAuth, checkAuth }
}