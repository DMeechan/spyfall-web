import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home.vue';
import Create from './pages/Create.vue';
import Join from './pages/Join.vue';
import Playing from './pages/Playing.vue';
import Waiting from './pages/Waiting.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
    },
    {
      path: '/playing',
      name: 'playing',
      component: Playing,
    },
    {
      path: '/waiting',
      name: 'waiting',
      component: Waiting,
    },
    {
      path: '/about',
      name: 'about',
      // lazy load the js for this route
      component: () => import('./pages/About.vue'),
    },
  ],
});
