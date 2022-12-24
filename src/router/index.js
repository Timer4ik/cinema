import { createRouter, createWebHistory } from 'vue-router'
import AuthTestPage from '@/pages/TestPages/AuthTestPage.vue'
import FormTestPage from '@/pages/TestPages/FormTestPage.vue'
import ApiTestPage from '@/pages/TestPages/ApiTestPage.vue'
import GridTestPage from '@/pages/TestPages/GridTestPage.vue'
import CalendarTestPage from '@/pages/TestPages/CalendarTestPage.vue'

const routes = [{
        path: '/auth',
        name: 'auth',
        component: AuthTestPage,
        meta: {
            requiredAuth: false
        }
    },
    {
        path: '/form',
        name: 'form',
        component: FormTestPage,
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