import fetch from '../../../../utils/fetch'
import * as types from './mutation_types'

export const retrieve = ({ commit }, id) => {
  commit(types.ROOM_SHOW_TOGGLE_LOADING)

  return new Promise((resolve, reject) => {
    return fetch(id)
    .then(response => response.json())
    .then((data) => {
      commit(types.ROOM_SHOW_TOGGLE_LOADING)
      commit(types.ROOM_SHOW_SET_RETRIEVED, data)
      resolve();
    })
    .catch((e) => {
      commit(types.ROOM_SHOW_TOGGLE_LOADING)
      commit(types.ROOM_SHOW_SET_ERROR, e.message)
      reject();
    })
  });
}

export const reset = ({ commit }) => {
  commit(types.ROOM_SHOW_RESET)
}
