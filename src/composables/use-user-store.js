import { ref, reactive } from "vue"

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
        user.isAuth = true
        user.email = data.email
        user.displayName = data.displayName

        localStorage.setItem("user",
            JSON.stringify({
                email: data.email,
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