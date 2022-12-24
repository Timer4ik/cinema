import { createRouter, createWebHistory } from 'vue-router'

import Films from "@/pages/Films/Films"
import RentFilms from "@/pages/RentFilms/RentFilms" 

import FormTestPage from '@/pages/TestPages/FormTestPage.vue'
import ApiTestPage from '@/pages/TestPages/ApiTestPage.vue'
import GridTestPage from '@/pages/TestPages/GridTestPage.vue'
import CalendarTestPage from '@/pages/TestPages/CalendarTestPage.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: Films,
        meta: {
            requiredAuth: false
        }
    },
    {
        path: '/films',
        name: 'films',
        component: Films,
        meta: {
            requiredAuth: false
        }
    },
    {
        path: '/rentFilms',
        name: 'rentFilms',
        component: RentFilms,
        meta: {
            requiredAuth: false
        }
    },

    
    {
        path: '/form',
        name: 'form',
        component: FormTestPage,
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: CalendarTestPage,
        meta: {
            requiredAuth: false
        }
    },
    {
        path: '/grid',
        name: 'grid',
        component: GridTestPage,
        meta: {
            requiredAuth: false
        }
    },
    {
        path: '/api',
        name: 'api',
        component: ApiTestPage,
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/',
        meta: {
            requiredAuth: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from) => {

})

export default router