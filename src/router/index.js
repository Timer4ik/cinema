import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import RentalPage from '@/pages/Rental'
import RentalEditPage from '@/pages/Rental/EditPage'

const routes = [{
        path: '/',
        name: 'main',
        component: MainPage,
        meta: {
            requiredAuth: false
        }
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