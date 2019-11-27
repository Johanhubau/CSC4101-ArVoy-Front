import fetch from '../../../../utils/fetch'
import * as types from './mutation_types'

export const retrieve = ({commit}, id) => {
  commit(types.STAFF_SHOW_TOGGLE_LOADING)

  return new Promise((resolve, reject) => {
    return fetch(id)
      .then(response => response.json())
      .then((data) => {
        commit(types.STAFF_SHOW_TOGGLE_LOADING)
        commit(types.STAFF_SHOW_SET_RETRIEVED, data)
        resolve();
      })
      .catch((e) => {
        commit(types.STAFF_SHOW_TOGGLE_LOADING)
        commit(types.STAFF_SHOW_SET_ERROR, e.message)
        reject();
      })
  });
}

export const reset = ({commit}) => {
  commit(types.STAFF_SHOW_RESET)
}
