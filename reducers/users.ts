import { createAction } from 'redux-actions'

import { Dispatch } from 'redux'

export const initialState = {
  payload: [],
}

export type UserState = typeof initialState

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsersRequest = createAction('FETCH_USERS_REQUEST')
export const fetchUsersSuccess = createAction('FETCH_USERS_SUCCESS')
export const fetchUsersFailed = createAction('FETCH_USERS_ERROR')

export const fetchUsers = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUsersRequest())
    // Returns a promise
    // if (process.browser) var start = window.performance.now()

    return fetch(apiUrl).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          if (process.browser) {
            // const end = window.performance.now()
            // var time = end - start
            // console.log(time)
          }
          dispatch(fetchUsersSuccess(data))
        })
      } else {
        response.json().then((error) => {
          dispatch(fetchUsersFailed(error))
        })
      }
    })
  }
}

export const reducer = (state = {}, action: any) => {
  if (action.type === 'FETCH_USERS_SUCCESS') {
    const out = { ...state, payload: action.payload }
    console.log({ out })
    return out
  }
  return state
}
