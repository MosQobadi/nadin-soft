import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoList from '../views/TodoListView.vue'
import Weather from '../views/WeatherView.vue'
import UserProfile from '../views/UserProfileView.vue'
// import About from '../views/AboutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todo-list',
    name: 'todo-list',
    component: TodoList
  },
  {
    path: '/weather',
    name: 'weather',
    component: Weather
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
