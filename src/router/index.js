import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import RentalPage from '@/pages/Rental'
import RentalEditPage from '@/pages/Rental/EditPage'
import AuthTestPage from '@/pages/TestPages/AuthTestPage.vue'
import FormTestPage from '@/pages/TestPages/FormTestPage.vue'
import ApiTestPage from '@/pages/TestPages/ApiTestPage.vue'
import GridTestPage from '@/pages/TestPages/GridTestPage.vue'
import CalendarTestPage from '@/pages/TestPages/CalendarTestPage.vue'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
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
        path: '/rental',
        name: 'rental',
        component: RentalPage,
        meta: {
            requiredAuth: false
        }
    },
    {
        path: '/rental/:id',
        name: 'rentalEdit',
        component: RentalEditPage,
        meta: {
            requiredAuth: false
        }
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