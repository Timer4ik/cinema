import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import HomeView from '../pages/RentFilm/RentFilm.vue'
import Films from '../pages/Films/Films.vue'
import * as Auth from "@/store/auth"
import { saveData } from '@/store/films'

const routes = [{
        path: '/films',
        name: 'films',
        component: Films,
        meta: {
            requiredAuth: false
        }
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/films',
        meta: {
            requiredAuth: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

const pageNeedAuth = (to) => {
    return to.meta.requiredAuth
}
const userHasAuth = (to) => {
    const token = Auth.auth ? .token
    return token
}
const hasPermissionToPublic = (to) => !pageNeedAuth(to) && userHasAuth(to)
const hasNoPermissionToPrivate = (to) => pageNeedAuth(to) && !userHasAuth(to)

router.beforeEach((to, from) => {
    saveData()
    try {
        if (!userHasAuth(to)) {
            Auth.tryLoginWithLocalStorage()
        }
    } catch (error) {
        throw error
    }

    if (hasNoPermissionToPrivate(to)) {
        return { name: "login" }
    }
})

export default router