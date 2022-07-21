import React from 'react'
import styled from 'styled-components'
import Category from './Category'
import Contact from './Contact'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Container>
        <Contact />
        <Category />
    </Container>
  )
}
const Container = styled.div`
    background-color: #F8F8F8;
    height: 168px;
    margin-top: 10px;
`

export default Footer