import { init } from '@rematch/core'
import { github } from './models'

const exampleInitialState = {}

export const initializeStore = (initialState = exampleInitialState) =>
  init({
    models: {
      github,
    },
    redux: {
      initialState,
    },
  })
