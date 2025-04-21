import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutComp.vue'
import SignupPage from '@/components/SignupPage.vue'
import MyProfile from '@/components/MyProfile.vue'
import LoginPage from '@/components/LoginPage.vue'

const routes = [

    {
        path: '/',
        name: 'Home',
        component: HomePage
    },

    {
        path: '/about',
        name: 'About',
        component:AboutPage
    },

    {
        path:'/signup',
        name:'Signup',
        component:SignupPage
    },

    {
        path:'/myprofile',
        name:'MyProfile',
        component:MyProfile
    },

    {
        path:'/login',
        name:'Login',
        component:LoginPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
