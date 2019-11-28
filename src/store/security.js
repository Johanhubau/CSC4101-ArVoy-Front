import SecurityAPI from "../api/security";

const AUTHENTICATING = "AUTHENTICATING",
  AUTHENTICATING_SUCCESS = "AUTHENTICATING_SUCCESS",
  AUTHENTICATING_ERROR = "AUTHENTICATING_ERROR",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  PROVIDING_DATA_ON_REFRESH_SUCCESS = "PROVIDING_DATA_ON_REFRESH_SUCCESS";

export default {
  namespaced: true,
  state: {
    isInitiated: false,
    isLoading: false,
    error: null,
    isAuthenticated: false,
    user: null
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    hasError(state) {
      return state.error !== null;
    },
    error(state) {
      return state.error;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    isInitiated(state) {
      return state.isInitiated;
    },
    hasInformation(state) {
      return state.user !== undefined && state.user !== null;
    },
    getDisplayName(state) {
      return state.user.displayName;
    },
    getInformation(state) {
      return state.user.information;
    },
    hasRole(state) {
      return role => {
        return state.user.roles.indexOf(role) !== -1;
      }
    }
  },
  mutations: {
    [AUTHENTICATING](state) {
      state.isInitiated = false;
      state.isLoading = true;
      state.error = null;
      state.isAuthenticated = false;
      state.user = null;
    },
    [AUTHENTICATING_SUCCESS](state, payload) {
      state.isInitiated = true;
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = true;
      state.user = payload.user;
    },
    [LOGOUT_SUCCESS](state) {
      state.isInitiated = false;
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = false;
      state.user = null;
    },
    [AUTHENTICATING_ERROR](state, error) {
      state.isInitiated = false;
      state.isLoading = false;
      state.error = error;
      state.isAuthenticated = false;
      state.user = null;
    },
    [PROVIDING_DATA_ON_REFRESH_SUCCESS](state, payload) {
      state.isInitiated = true;
      state.isLoading = false;
      state.error = null;
      state.isAuthenticated = payload.isAuthenticated;
      state.user = payload.user;
    }
  },
  actions: {
    async login({commit}, payload) {
      commit(AUTHENTICATING);
      try {
        let response = await SecurityAPI.login(payload.login, payload.password);
        commit(AUTHENTICATING_SUCCESS, response);
        return response.data;
      } catch (error) {
        commit(AUTHENTICATING_ERROR, error);
        return null;
      }
    },
    logout({commit}) {
      SecurityAPI.logout();
      commit(LOGOUT_SUCCESS);
    },
    onRefresh({commit}, payload) {
      commit(PROVIDING_DATA_ON_REFRESH_SUCCESS, payload);
    }
  }
}
