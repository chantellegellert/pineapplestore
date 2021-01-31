import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/HomeView.vue'
import GridView from '../views/GridView.vue'
import CardView from '../views/CardView.vue'

Vue.use(VueRouter);

export enum RouteNames {
  Home = 'Home',
  GridView = 'GridView',
  CardView = 'CardView'
}

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/GridView',
    name: 'GridView',
    component: GridView
  },
  {
    path: '/CardView',
    name: 'CardView',
    component: CardView
  }
]

const router = new VueRouter({
  base: window.location.pathname,
  routes
});

export default router;
