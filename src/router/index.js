import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    // Catch-all route for all other paths
    path: '/:catchAll(.*)',
    component: HomePage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export{router}

