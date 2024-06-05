import { createRouter, createWebHistory } from 'vue-router'

import AuthLayout from "../layouts/AuthLayout.vue"
import UserLayout from "../layouts/UserLayout.vue"
import ChatPage from "../pages/Chat.vue"
import HomePage from "../pages/Home.vue"
import Room from '../pages/Room.vue'
import LoginPage from "../pages/auth/Login.vue"
import RegisterPage from "../pages/auth/Register.vue"
import { useAuthStore } from '../store/AuthStore'

const routes = [
    {
        path: '/',
        component: UserLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                name: 'home',
                component: HomePage
            },
            
            {
                path: '/chat',
                name: 'chat',
                component: ChatPage,
                children: [
                    {
                        path: '/room/:id',
                        name: 'chat.room',
                        component: Room,

                    },
                ]

            },



        ]

    },

    {
        path: '/auth',
        component: AuthLayout,
        meta: {
            requiresAuth: false
        },
        children: [
            {
                path: 'login',
                name: 'login',
                component: LoginPage
            },
            {
                path: 'register',
                name: 'register',
                component: RegisterPage
            }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach(async (to, from, next) => {


    if (to.meta.requiresAuth) {

        const auth = useAuthStore()

        if (!await auth.ping()) {

            next({ name: 'login' })
        }

    }

    next()


})


export default router;