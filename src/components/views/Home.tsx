import React from 'react'
import { Container } from '../../styles/views/home'
import Accessory from './main/Accessory'
import BestPhone from './main/BestPhone'
import Sider from './siderMenu/Sider'


type Props = {}

const Home = (props: Props) => {
  return (
    <Container>
      <Sider />
      <BestPhone />
      <Accessory />
    </Container>
  )
}

export default Home