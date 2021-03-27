require('./bootstrap');

window.Vue = require('vue').default;

import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

Vue.router = router;

require('./auth');

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
