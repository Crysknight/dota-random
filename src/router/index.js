import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Player from '../views/Player';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/:seed',
    name: 'Seed',
    component: () => import(/* webpackChunkName: "seed" */ '../views/Seed.vue'),
    children: [
      {
        path: ':playerId',
        name: 'Player',
        component: Player,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
