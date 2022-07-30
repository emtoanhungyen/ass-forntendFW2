import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Image, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Span1, Span2 } from '../../../styles/views/ProductDetail'
import { BorderButton, ButtonDathang, Container, DivTongTien, FlexButton, FlexContent, FlexImg, My2, SpanCart } from '../../../styles/views/Cart'

// improt img
import ImgCart from './../../../assets/images/imgcart.png'

type Props = {}

const Cart = (props: Props) => {


    return (
        <Container>
            <My2>
                <Link style={{ color: 'red' }} to=''>Trở về</Link>
                <SpanCart>Giỏ hàng</SpanCart>
            </My2>
            <My2>
                <Flex>
                    <FlexImg>
                        <Image src={ImgCart} width={193} height={193} />
                    </FlexImg>
                    <FlexContent>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <span style={{ fontSize: '16px' }}>Samsung Galaxy S22-Đen</span>
                            </div>
                            <div>
                                <Span1>1.490.000 ₫</Span1>
                                <Span2>4.490.000 ₫</Span2>
                            </div>
                            <Flex>
                                <span>Chọn số lượng: </span>
                                <BorderButton>
                                    <span style={{ width: '25%' }}><MinusOutlined /></span>
                                    <span style={{ width: '50%', textAlign: 'center', paddingTop: '2px', paddingRight: '5px' }}>0</span>
                                    <span style={{ width: '25%' }}><PlusOutlined /></span>
                                </BorderButton>
                            </Flex>
                        </Space>
                    </FlexContent>
                    <FlexButton>
                        <CloseOutlined />
                    </FlexButton>
                </Flex>
                <hr />
                <Flex>
                    <FlexImg>
                        <Image src={ImgCart} width={193} height={193} />
                    </FlexImg>
                    <FlexContent>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <span style={{ fontSize: '16px' }}>Samsung Galaxy S22-Đen</span>
                            </div>
                            <div>
                                <Span1>1.490.000 ₫</Span1>
                                <Span2>4.490.000 ₫</Span2>
                            </div>
                            <Flex>
                                <span>Chọn số lượng: </span>
                                <BorderButton>
                                    <span style={{ width: '25%' }}><MinusOutlined /></span>
                                    <span style={{ width: '50%', textAlign: 'center', paddingTop: '2px', paddingRight: '5px' }}>0</span>
                                    <span style={{ width: '25%' }}><PlusOutlined /></span>
                                </BorderButton>
                            </Flex>
                        </Space>
                    </FlexContent>
                    <FlexButton>
                        <CloseOutlined />
                    </FlexButton>
                </Flex>
                <hr />
                <Flex>
                    <FlexImg>
                        <Image src={ImgCart} width={193} height={193} />
                    </FlexImg>
                    <FlexContent>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <div>
                                <span style={{ fontSize: '16px' }}>Samsung Galaxy S22-Đen</span>
                            </div>
                            <div>
                                <Span1>1.490.000 ₫</Span1>
                                <Span2>4.490.000 ₫</Span2>
                            </div>
                            <Flex>
                                <span>Chọn số lượng: </span>
                                <BorderButton>
                                    <span style={{ width: '25%' }}><MinusOutlined /></span>
                                    <span style={{ width: '50%', textAlign: 'center', paddingTop: '2px', paddingRight: '5px' }}>0</span>
                                    <span style={{ width: '25%' }}><PlusOutlined /></span>
                                </BorderButton>
                            </Flex>
                        </Space>
                    </FlexContent>
                    <FlexButton>
                        <CloseOutlined />
                    </FlexButton>
                </Flex>
                <hr />
            </My2>
            <My2>
                <DivTongTien>
                    <span>Tổng tiền tạm tính: </span>
                    <Span1>17.800.000 đ</Span1>
                </DivTongTien>
                <My2>
                    <ButtonDathang>Tiến hành đặt hàng</ButtonDathang>
                </My2>
                <LinkCart>
                    <Link style={{ color: 'red' }} to=''>Chọn thêm sản phẩm khác</Link>
                </LinkCart>
            </My2>
        </Container>
    )
}
export const LinkCart = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid #D70018;
    border-radius: 5px;
    color: #D70018;
    text-align: center;
    padding-top: 18px;
    &:hover {
        background-color: #f4dada;
    }
`

export default Cart