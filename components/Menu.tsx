/* eslint-disable import/extensions */
import React from 'react'
import styled from '@emotion/styled'
import { Layout } from './Layout'
import { Button } from './Button'

export const Menu = () => (
  <Layout>
    <ButtonLayout>
      <Button type="button" buttonText="index" href="/" />
    </ButtonLayout>
    <ButtonLayout>
      <Button type="button" buttonText="indexd" href="/indexd" />
    </ButtonLayout>
  </Layout>
)

const ButtonLayout = styled.div`
  margin: 5px;
`
