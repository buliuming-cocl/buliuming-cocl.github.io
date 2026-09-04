import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import AffiliatesView from './views/AffiliatesView.vue'
import TeamView from './views/TeamView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/affiliates', name: 'affiliates', component: AffiliatesView },
    { path: '/team', name: 'team', component: TeamView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
