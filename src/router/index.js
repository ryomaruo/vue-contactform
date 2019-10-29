import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Confirm from '../views/Confirm.vue';
import Thanks from '../views/Thanks.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: Confirm,
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: Thanks,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
