import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import SecurityModule from "./store/security";
import App from './App.vue';
import SecurityAPI from "./api/security";

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
import mainRoutes from './router/main';
import adminRoutes from './router/admin';
import clientreservationRoutes from "./router/clientreservation";
import Login from "./components/login/Form";

import client from './store/modules/client/';
import reservation from './store/modules/reservation/';
import comment from './store/modules/comment/';
import room from './store/modules/room/';
import region from './store/modules/region/';
import staff from './store/modules/staff/';
import user from './store/modules/user/';
import owner from './store/modules/owner/';
import unavailableperiod from './store/modules/unavailableperiod/';
import NeedsLoginError from "./error/NeedsLoginError";

import '../src/assets/css/app.scss';
import '../src/assets/js/bootstrap.bundle'

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const baseRoutes = [{ path: "/login", component: Login }];
const routes = baseRoutes.concat(clientRoutes, reservationRoutes, commentRoutes, roomRoutes, regionRoutes, staffRoutes, userRoutes, ownerRoutes, unavailableperiodRoutes, clientreservationRoutes, mainRoutes, adminRoutes);
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters["security/isInitiated"]) {
      try {
        store.dispatch("security/onRefresh", await SecurityAPI.checkLogin());
      } catch (e) {
        console.log(from);
        if (e instanceof NeedsLoginError && from.path !== "/login") await router.push({path: "/login"});
      }
    }
    if (store.getters["security/isAuthenticated"]) {
      if (to.matched.some(record => !store.getters["security/hasRole"](record.meta.requiresRole))) {
        next({path: "/403"});
      } else {
        next();
      }
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export const store = new Vuex.Store({
  modules: {
    security: SecurityModule,
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
Vue.component('admin-template-header', require('./components/templates/adminHeader').default);
Vue.component('admin-template-footer', require('./components/templates/adminFooter').default);
Vue.component('profile-template', require('./components/templates/ProfileBar').default);
Vue.component('room-template', require('./components/templates/RoomDisplay').default);
Vue.component('region-template', require('./components/templates/RegionDisplay').default);
Vue.component('reservation-template', require('./components/templates/ReservationDisplay').default);



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
