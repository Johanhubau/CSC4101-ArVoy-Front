import fetch from '../../../../utils/fetch'
import * as types from './mutation_types'

const getItems = ({commit}, filters = [], page = 'reservations') => {
  commit(types.TOGGLE_LOADING)

  return new Promise((resolve, reject) => {
    fetch(page, {filters: filters})
      .then(response => response.json())
      .then((data) => {
        commit(types.TOGGLE_LOADING)
        commit(types.SET_ITEMS, data['hydra:member'])
        commit(types.SET_VIEW, data['hydra:view'])
        resolve();
      })
      .catch((e) => {
        commit(types.TOGGLE_LOADING)
        commit(types.SET_ERROR, e.message)
        reject();
      })
  });
}

export default getItems
