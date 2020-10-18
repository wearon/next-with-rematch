/* eslint-disable import/extensions */
import React from 'react'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { Global, css } from '@emotion/core'
import { Provider } from 'react-redux'
import { Menu } from '../components/Menu'
import { normalize } from '../constants/normalize'
import { RootState, store } from '../rematch/store'

type Props = { store: RootState } & AppInitialProps & AppProps

type AppPage<P = {}> = {
  (props: P): JSX.Element | null
  getInitialProps: ({ Component, ctx }: AppContext) => Promise<AppInitialProps>
}

const App: AppPage<Props> = ({ pageProps, Component }) => {
  return (
    <>
      <Head>
        <title>SSR with Next</title>
      </Head>
      <Provider store={store}>
        <Global
          styles={css`
            ${normalize}
          `}
        />
        <Menu />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  }
}

export default App
