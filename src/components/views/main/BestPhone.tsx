import { Image, Space, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../app/hook'
import { addToCart } from '../../../features/CartSlice'
import { getProducts } from '../../../features/ProductSlice'
import { SearchInput } from '../../../styles/admin/Layout'
import { Box, BoxPhone, ButtonToCart, Container, DisPrice, DivPhone, DivText, DivTitle, Price, Span } from '../../../styles/views/bestPhone'
import { ProductType } from '../../../types/Products'

type Props = {}

const { Text } = Typography

const BestPhone = (props: Props) => {
    const products = useAppSelector(item => item.product.value)
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const addTo = (item: any) => {
        dispatch(addToCart(item));
    }

    return (
        <Container>
            <DivTitle>
                <Span>Điện thoại nổi bật nhất</Span>
                <SearchInput size="middle" style={{ width: '300px', marginRight: '10%' }} prefix={<AiOutlineSearch />}
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }} />
            </DivTitle>
            <DivPhone>
                <Box>
                    {products.filter((value: ProductType) => {
                        if (search == "") {
                            return value
                        } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                            return value
                        }
                    }).map((item: any, index) => {
                        return <BoxPhone key={index}>
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <div>
                                    <Image width={160} height={160} src={item.img} />
                                </div>
                                <div>
                                    <Link to={`/product/${item.id}`} style={{ color: 'black' }}>{item.name}</Link>
                                    <span> |</span>
                                    <span> Chính hãng VN/A</span>
                                </div>
                                <div>
                                    <Price >{item.price} đ</Price>
                                    <DisPrice>{item.disPrice} đ</DisPrice>
                                </div>
                                <DivText>
                                    <TextNote>
                                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                    </TextNote>
                                </DivText>F
                                <ButtonToCart onClick={() => addTo(item)}>Add to cart</ButtonToCart>
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