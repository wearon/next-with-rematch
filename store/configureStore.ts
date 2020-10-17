/* eslint-disable import/extensions */
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { RootState, rootReducer } from '../reducers'

const middlewares = [thunk, logger]

export const configureStore = (initialState: RootState) => {
  // return createStore(rootReducer, initialState, devToolsEnhancer({}))
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
}
