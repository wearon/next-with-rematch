import Document, { Head, Main, NextScript, Html } from 'next/document'
import React from 'react'

interface Props {
  styleTags: React.ReactElement<{}>[]
}

export default class MyDocument extends Document<Props> {
  public render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" key="charSet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
