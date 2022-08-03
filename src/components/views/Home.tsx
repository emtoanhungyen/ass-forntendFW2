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
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAll();
      setProducts(data)
    }
    getProducts();
  }, [])
  return (
    <Container>
      <Sider />
      <BestPhone products={products} />
      <Accessory />
      <LaptopComputer />
    </Container>
  )
}

export default Home