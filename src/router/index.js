import Vue from 'vue';
import VueRouter from 'vue-router';
import UserList from '../views/UserList.vue';
import User from '../views/User.vue';
import PageNotFound from '../views/PageNotFound.vue';

Vue.use(VueRouter);

const parseProps = req => ({ id: parseInt(req.params.id) });

const routes = [
  {
    path: '/',
    name: 'Users',
    component: UserList,
  },
  {
    path: '/users/:id',
    name: 'EditUser',
    component: User,
    props: parseProps,
  },
  {
    path: '*',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
