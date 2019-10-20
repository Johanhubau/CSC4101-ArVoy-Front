import * as types from './mutation_types'

export default {
  [types.UNAVAILABLEPERIOD_CREATE_SET_ERROR] (state, error) {
    Object.assign(state, { error })
  },

  [types.UNAVAILABLEPERIOD_CREATE_TOGGLE_LOADING] (state) {
    Object.assign(state, { isLoading: !state.isLoading })
  },

  [types.UNAVAILABLEPERIOD_CREATE_SET_CREATED] (state, created) {
    Object.assign(state, { created })
  },

  [types.UNAVAILABLEPERIOD_CREATE_SET_VIOLATIONS] (state, violations) {
    Object.assign(state, { violations })
  },

  [types.UNAVAILABLEPERIOD_CREATE_RESET] (state) {
    Object.assign(state, {
      created: null,
      error: '',
      isLoading: false,
      violations: null
    })
  }
}
