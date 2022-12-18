import { createRouter, createWebHistory } from 'vue-router'
import TestPage from '@/pages/TestPage'

const routes = [{
        path: '/',
        name: 'main',
        component: TestPage,
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