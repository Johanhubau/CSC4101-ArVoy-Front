import fetch from '../../../../utils/fetch'
import * as types from './mutation_types'

export const retrieve = ({ commit }, id) => {
  commit(types.COMMENT_SHOW_TOGGLE_LOADING)

  return new Promise((resolve, reject) => {
    fetch(id)
      .then(response => response.json())
      .then((data) => {
        commit(types.COMMENT_SHOW_TOGGLE_LOADING)
        commit(types.COMMENT_SHOW_SET_RETRIEVED, data)
        resolve(data)
      })
      .catch((e) => {
        commit(types.COMMENT_SHOW_TOGGLE_LOADING)
        commit(types.COMMENT_SHOW_SET_ERROR, e.message)
        reject()
      })
  });
}

export const reset = ({ commit }) => {
  commit(types.COMMENT_SHOW_RESET)
}
