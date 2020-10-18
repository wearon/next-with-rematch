import { createModel } from '@rematch/core'
import { RootModel } from '.'

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

export interface User {
  id: number
  name: string
}

type UsersState = {
  users: User[]
}

export const users = createModel<RootModel>()({
  state: {
    users: [],
  } as UsersState,
  reducers: {
    SET_PLAYERS: (state: UsersState, users: User[]) => {
      return {
        ...state,
        users,
      }
    },
  },
  effects: (dispatch) => {
    const { users } = dispatch
    return {
      async getPlayers(): Promise<any> {
        const response = await fetch(apiUrl)
        const { data }: { data: User[] } = await response.json()
        users.SET_PLAYERS(data)
      },
    }
  },
})
