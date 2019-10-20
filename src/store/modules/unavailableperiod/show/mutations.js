import * as types from './mutation_types'

export default {
  [types.UNAVAILABLEPERIOD_SHOW_RESET] (state) {
    Object.assign(state, {
      error: '',
      isLoading: false,
      retrieved: null
    })
  },

  [types.UNAVAILABLEPERIOD_SHOW_SET_ERROR] (state, error) {
    Object.assign(state, { error })
  },

  [types.UNAVAILABLEPERIOD_SHOW_SET_RETRIEVED] (state, retrieved) {
    Object.assign(state, { retrieved })
  },

  [types.UNAVAILABLEPERIOD_SHOW_TOGGLE_LOADING] (state) {
    Object.assign(state, { isLoading: !state.isLoading })
  }

}
