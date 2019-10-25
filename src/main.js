import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';

//import routes
import clientRoutes from './router/client';
import reservationRoutes from './router/reservation';
import commentRoutes from './router/comment';
import roomRoutes from './router/room';
import regionRoutes from './router/region';
import staffRoutes from './router/staff';
import userRoutes from './router/user';
import ownerRoutes from './router/owner';
import unavailableperiodRoutes from './router/unavailableperiod';

import '../src/assets/css/app.scss';
//import 'font-awesome/css/font-awesome.css';
import client from './store/modules/client/';
import reservation from './store/modules/reservation/';
import comment from './store/modules/comment/';
import room from './store/modules/room/';
import region from './store/modules/region/';
import staff from './store/modules/staff/';
import user from './store/modules/user/';
import owner from './store/modules/owner/';
import unavailableperiod from './store/modules/unavailableperiod/';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const baseRoutes = [];
const routes = baseRoutes.concat(clientRoutes, reservationRoutes, commentRoutes, roomRoutes, regionRoutes, staffRoutes, userRoutes, ownerRoutes, unavailableperiodRoutes);
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export const store = new Vuex.Store({
  modules: {
    client,
	  reservation,
	  comment,
	  room,
	  region,
	  staff,
	  user,
	  owner,
	  unavailableperiod
  }
});


// Components
Vue.component('template-header', require('./components/templates/header').default);
Vue.component('template-footer', require('./components/templates/footer').default);


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
