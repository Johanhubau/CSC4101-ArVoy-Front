import SubmissionError from '../../../../error/SubmissionError'
import fetch from '../../../../utils/fetch'
import * as types from './mutation_types'

export const create = ({ commit }, values) => {
  commit(types.RESERVATION_CREATE_SET_ERROR, '')
  commit(types.RESERVATION_CREATE_TOGGLE_LOADING)

  return  new Promise((resolve, reject) => {
    fetch('reservations', {method: 'POST', body: JSON.stringify(values)})
      .then((response) => {
        commit(types.RESERVATION_CREATE_TOGGLE_LOADING)

        return response.json()
      })
      .then((data) => {
        commit(types.RESERVATION_CREATE_SET_CREATED, data)
        resolve(data);
      })
      .catch((e) => {
        commit(types.RESERVATION_CREATE_TOGGLE_LOADING)

        if (e instanceof SubmissionError) {
          commit(types.RESERVATION_CREATE_SET_VIOLATIONS, e.errors)
          // eslint-disable-next-line
          commit(types.RESERVATION_CREATE_SET_ERROR, e.errors._error)
          return
        }

        commit(types.RESERVATION_CREATE_SET_ERROR, e.message)
        reject();
      })
  });
}

export const reset = ({ commit }) => {
  commit(types.RESERVATION_CREATE_RESET)
}
