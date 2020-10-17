/* eslint-disable import/extensions */
import { combineReducers } from 'redux'
import * as app from './app'
import * as users from './users'

export interface RootState {
  app: app.AppState
  users: users.UserState
}
export type AllAction = app.AppAction

export const rootReducer = combineReducers({
  app: app.reducer,
  users: users.reducer,
})
