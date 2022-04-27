import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '../views/PostsView.vue'
import SinglePostView from '../views/SinglePostView.vue'

const routes = [
  {
    path: '/posts',
    name: 'posts',
    component: PostsView
  },
  {
    path: '/post/:id',
    name: 'post',
    component: SinglePostView,
  },
  {
    path: '/',
    redirect: 'posts'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
