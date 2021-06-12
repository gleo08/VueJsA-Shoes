import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from "@/pages/Dashboard.vue"
import Users from "@/pages/Users.vue"
import Register from "@/pages/Register.vue"
import Home from "@/pages/Home.vue"
import Login from "@/pages/Login.vue"
import Admin from "@/pages/Admin.vue"
const routes: Array<RouteRecordRaw> = [
  {path: "/register", component: Register},
  {path: "/login", component: Login},
  {
    path:"", 
    component: Home,
    children: [
      {path:"", component: Dashboard},
      {path:"/users", component: Users}
    ]
  },
  {
    path: "/admin", component: Admin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
