import { createRouter, createWebHistory} from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home'


const router = createRouter ({
    history: createWebHistory(),

    routes: [
        {
            path:'/',
            name:'Home',
            component: Home
        }
    ]
})