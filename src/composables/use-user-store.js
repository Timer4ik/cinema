import { reactive } from "vue"

const user = reactive({
    isAuth: false,
    email: "",
    displayName: ""
})

export default () => {

    const getUser = () => {
        return { email: user.email, isAuth: user.isAuth, displayName: user.displayName }
    }

    const setUser = (data) => {
        user.isAuth =!!data?.email
        user.email = data?.email
        user.displayName = data?.displayName

        if (!user.isAuth) return
        localStorage.setItem("user",
            JSON.stringify({
                email: user.email,
                displayName: user.displayName,
                isAuth: true
            }))
    }

    const clearUser = () => {
        user.isAuth = false
        user.email = ""
        user.displayName = ""

        localStorage.removeItem("user")
    }

    return { setUser, clearUser, getUser }
}