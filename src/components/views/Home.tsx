import React, { useEffect, useState } from 'react'
import { getAll } from '../../api/product'
import { Container } from '../../styles/views/home'
import { ProductType } from '../../types/Products'
import Accessory from './main/Accessory'
import BestPhone from './main/BestPhone'
import LaptopComputer from './main/LaptopComputer'
import Sider from './siderMenu/Sider'

type Props = {}

const Home = (props: Props) => {
  return (
    <Container>
      <Sider />
      <BestPhone/>
      <Accessory />
      <LaptopComputer />
    </Container>
  )
}

export default Home