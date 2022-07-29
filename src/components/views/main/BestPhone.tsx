import { Image, Space, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Box, BoxPhone, Container, DisPrice, DivPhone, DivText, DivTitle, Price, Span } from '../../../styles/views/bestPhone'
import { ProductType } from '../../../types/Products'
import Iphone from './../../../assets/images/iPhone.png'

type Props = {
    products: ProductType[]
}

const { Text } = Typography

const BestPhone = (props: Props) => {
    return (
        <Container>
            <DivTitle>
                <Span>Điện thoại nổi bật nhất</Span>
            </DivTitle>
            <DivPhone>
                <Box>
                    {props.products.map(item => {
                        return <BoxPhone>
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <div>
                                    <Link to={`/product/${item.id}`}>
                                        <Image width={160} height={160} src={item.img} />
                                    </Link>
                                </div>
                                <div>
                                    <Link to={`/product/${item.id}`} target="_blank" style={{ color: 'black' }}>{item.name}</Link>
                                    <span>|</span>
                                    <span>Chính hãng VN/A</span>
                                </div>
                                <div>
                                    <Price>{item.price} đ</Price>
                                    <DisPrice>{item.disPrice} đ</DisPrice>
                                </div>
                                <DivText>
                                    <TextNote>
                                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                    </TextNote>
                                </DivText>
                            </Space>
                        </BoxPhone>
                    })}

                    {/* <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone> */}
                </Box>
                {/* <Box>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                    <BoxPhone>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <Link to='#'>
                                    <Image width={160} height={160} src={Iphone} />
                                </Link>
                            </div>
                            <div>
                                <Link to="#" target="_blank" style={{ color: 'black' }}>iPhone 11 64GB </Link>
                                <span>|</span>
                                <span>Chính hãng VN/A</span>
                            </div>
                            <div>
                                <Price>10.790.000 đ</Price>
                                <DisPrice>18.000.000 đ</DisPrice>
                            </div>
                            <DivText>
                                <TextNote>
                                    [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ
                                </TextNote>
                            </DivText>
                        </Space>
                    </BoxPhone>
                </Box> */}
            </DivPhone>
        </Container>
    )
}
export const TextNote = styled.p`
    padding-left: 8px;
    padding-top: 3px;
`
export default BestPhone