import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import ProjectView from '@/views/ProjectView.vue';
import GalleryView from '@/views/GalleryView.vue';
import { createRouter,createWebHashHistory } from 'vue-router';

const routes = [
  { path:'/' , component: HomeView},
  { path:'/about' , component: AboutView},
  { path:'/portfolio' , component: PortfolioView},
  { path:'/project' , component: ProjectView},
  { path:'/gallery' , component: GalleryView}
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes
})

export default router; 

