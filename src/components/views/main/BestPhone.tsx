import { Image, Space, Typography } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Box, BoxPhone, Container, DisPrice, DivPhone, DivText, DivTitle, Price, Span } from '../../../styles/views/bestPhone'
import { ProductType } from '../../../types/Products'

type Props = {
    products: ProductType[]
}

const { Text } = Typography

const BestPhone = ({ products }: Props) => {
    return (
        <Container>
            <DivTitle>
                <Span>Điện thoại nổi bật nhất</Span>
            </DivTitle>
            <DivPhone>
                <Box>
                    {products?.map(item => {
                        return <BoxPhone >
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <div>
                                    <Link to={`/product/${item.id}`} >
                                        <Image width={160} height={160} src={item.img} />
                                    </Link>
                                </div>
                                <div>
                                    <Link to={`/product/${item.id}`} style={{ color: 'black' }}>{item.name}</Link>
                                    <span>|</span>
                                    <span>Chính hãng VN/A</span>
                                </div>
                                <div>
                                    <Price >{item.price} đ</Price>
                                    <DisPrice>{item.disPrice} đ</DisPrice>
                                </div>
                                <DivText>
                                    <TextNote>
                                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                    </TextNote>
                                </DivText>
                                <button >add to cart</button>
                            </Space>
                        </BoxPhone>
                    })}
                </Box>
            </DivPhone>
        </Container>
    )
}
export const TextNote = styled.p`
    padding-left: 8px;
    padding-top: 3px;
`
export default BestPhone