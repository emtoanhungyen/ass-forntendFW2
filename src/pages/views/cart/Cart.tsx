import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Image, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Flex, Span1, Span2 } from '../../../styles/views/ProductDetail'
import { BorderButton, ButtonDathang, CartIsEmpty, Container, DivTongTien, FlexButton, FlexContent, FlexImg, My2, SpanCart } from '../../../styles/views/Cart'

// improt img
import ImgCart from './../../../assets/images/imgcart.png'
import { useAppDispatch, useAppSelector } from '../../../app/hook'
import { ProductType } from '../../../types/Products'
import { CartItem, decreQuantity, increQuantity, removeCart } from '../../../features/CartSlice'

type Props = {
}

const Cart = (props: Props) => {

    const { carts, total } = useAppSelector((item) => item.cart);

    const dispatch = useAppDispatch();

    const increment = (id: any) => {
        dispatch(increQuantity(id))
    }
    
    const decrement = (id: any) => {
        dispatch(decreQuantity(id));
    }

    const remove = (id: any) => {
        const confỉrm = window.confirm("Bạn có muốn xóa ?");
        if (confỉrm) {
            dispatch(removeCart(id));
        }
    }

    return (
        <Container>
            {carts.length > 0 ? (
                <>
                    <My2>
                        <Link style={{ color: 'red' }} to='/'>Trở về</Link>
                        <SpanCart>Giỏ hàng</SpanCart>
                    </My2>
                    <My2>
                        {carts.map((item) => {
                            return <Flex>
                                <FlexImg>
                                    <Image src={item.img} width={193} height={193} />
                                </FlexImg>
                                <FlexContent>

                                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                        <div>
                                            <span style={{ fontSize: '16px' }}>{item.name}</span>
                                        </div>
                                        <div>
                                            <Span1>{item.price} đ</Span1>
                                            <Span2>{item.disPrice} đ</Span2>
                                        </div>
                                        <Flex>
                                            <span>Chọn số lượng: </span>
                                            <BorderButton>
                                                <span style={{ width: '25%' }}><MinusOutlined onClick={() => decrement(item.id)} /></span>
                                                <span style={{ width: '50%', textAlign: 'center', paddingTop: '2px', paddingRight: '5px' }}>{item.quantity}</span>
                                                <span style={{ width: '25%' }}><PlusOutlined onClick={() => increment(item.id)} /></span>
                                            </BorderButton>
                                        </Flex>
                                    </Space>

                                </FlexContent>
                                <FlexButton>
                                    <CloseOutlined onClick={() => remove(item.id)} />
                                </FlexButton>
                            </Flex>
                        })}

                    </My2>
                    <My2>
                        <DivTongTien>
                            <span>Tổng tiền tạm tính: </span>
                            <Span1>{total} đ</Span1>
                        </DivTongTien>
                        <My2>
                            <ButtonDathang>Tiến hành đặt hàng</ButtonDathang>
                        </My2>
                        <LinkCart>
                            <Link style={{ color: 'red' }} to='/'>Chọn thêm sản phẩm khác</Link>
                        </LinkCart>
                    </My2>
                </>
            ) : (
                <My2>
                    <CartIsEmpty>Giỏ hàng đang trống</CartIsEmpty>
                </My2>
            )}

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