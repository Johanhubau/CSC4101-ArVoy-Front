import fetch from '../../../../utils/fetch'
import * as types from './mutation_types'

export const retrieve = ({commit}, id) => {
  commit(types.USER_SHOW_TOGGLE_LOADING)

  return new Promise((resolve, reject) => {
    return fetch(id)
      .then(response => response.json())
      .then((data) => {
        commit(types.USER_SHOW_TOGGLE_LOADING)
        commit(types.USER_SHOW_SET_RETRIEVED, data)
        resolve(data);
      })
      .catch((e) => {
        commit(types.USER_SHOW_TOGGLE_LOADING)
        commit(types.USER_SHOW_SET_ERROR, e.message)
        reject();
      })
  });
}

export const reset = ({commit}) => {
  commit(types.USER_SHOW_RESET)
}
