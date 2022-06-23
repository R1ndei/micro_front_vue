import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import admin_vue from '../pages/admin/admin.vue'
import Products_vue from '../pages/admin/Products.vue'
import Products_create from '../pages/admin/Products_create.vue'
import Products_edit from '../pages/admin/Products_edit.vue'
import Main_vue from '../pages/Main.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Main_vue
    },
    {
        path: '/admin',
        component: admin_vue,
        children: [
            {path: 'products', component: Products_vue},
            {path: 'products/create', component: Products_create},
            {path: 'products/:id/edit', component: Products_edit},
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
