/* eslint-disable import/extensions */
import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { connect } from 'react-redux'
import { Layout } from '../components/Layout'
import { fetchUsers } from '../reducers/users'

interface User {
  id: number
  name: string
}

type Props = {
  users: User[]
}

const LazyLoadComponent: NextPage<Props> = ({ users }) => (
  <>
    <Layout>
      <h1>Lazy Load</h1>
    </Layout>

    {users.map((user: User) => (
      <Layout key={user.id}>
        ID:
        {user.name}
      </Layout>
    ))}
  </>
)

LazyLoadComponent.getInitialProps = async (ctx: NextPageContext) => {
  // lazy load
  try {
    await ctx.store.dispatch(fetchUsers() as any)
  } catch (error) {
    console.error(error)
  }
  return { users: [{ id: 1, name: 'nick' }] }
}

const mapStateToProps = ({ users }: any) => {
  // console.log('mapStateToProps',{posts})
  return {
    users: users.payload,
  }
}

export default connect(mapStateToProps)(LazyLoadComponent)
