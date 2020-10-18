/* eslint-disable import/extensions */
import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Layout } from '../components/Layout'

import { RootState } from '../rematch/store'

interface User {
  id: number
  name: string
}

type Props = {
  users: User[]
}

const LazyLoadComponent: NextPage<Props> = ({ users }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => {
    return state.users
  })
  console.log('state render', state)
  console.log('dispatch render', dispatch.users)
  console.log('dispatch keys render', Object.keys(dispatch))

  return (
    <>
      <Layout>
        <h1>Lazy Load</h1>
        <div>
          <button
            className="button"
            type="button"
            onClick={() => dispatch.users.getUsers()}
          >
            Create post
          </button>
        </div>
      </Layout>

      {users &&
        users.map((user: User) => (
          <Layout key={user.id}>
            ID: {user.id} {user.name}
          </Layout>
        ))}
    </>
  )
}

LazyLoadComponent.getInitialProps = async (ctx: NextPageContext) => {
  // lazy load
  try {
    console.log('dispatch keys getInitialProps', Object.keys(ctx))
    //
  } catch (error) {
    console.error(error)
  }
  return { users: [{ id: 1, name: 'nick' }] }
}

const mapStateToProps = (state: RootState) => {
  console.log('mapStateToProps state', state)
  const out = {
    users: state.users.users,
  }
  console.log('mapStateToProps out', out)

  return out
}

export default connect(mapStateToProps)(LazyLoadComponent)
