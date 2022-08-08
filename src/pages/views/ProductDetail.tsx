import { Image, Space } from 'antd'
import React, { useEffect } from 'react'
import {
    BoxPreview,
    BoxPreview1,
    Button,
    Container,
    Desc, DisPrice,
    DivAddToCart,
    DivClick,
    Flex,
    FlexL,
    FlexR,
    P,
    Preview,
    Price,
    SpanTitle
} from '../../styles/views/ProductDetail'
import IphoneDetailPreview from './../../assets/images/ipDetailPreview.png'
import ngoisao from './../../assets/images/ngoisao.png'
import iconcart from './../../assets/images/Iconcart.png'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { getOneProduct } from '../../features/ProductSlice'
import { addToCart } from '../../features/CartSlice'
import { getProductByCate } from '../../api/product'
import ProductRelated from './ProductRelated'

type Props = {
}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const productDetail = useAppSelector((item: any) => item.product.value);
    const dispatch = useAppDispatch()
    const addTo = (item: any) => {
        dispatch(addToCart(item));
    }
    useEffect(() => {
        dispatch(getOneProduct(id));
    }, [])
    
    

    return (
        <div key={productDetail.id}>
            { }
            <Container>
                <SpanTitle>{productDetail.name}</SpanTitle>
            </Container>
            <hr />
            <Container>
                <Flex>
                    <FlexL>
                        <Image src={productDetail?.img} width={358} height={358} />
                        <Preview>
                            <BoxPreview1>
                                <Style>
                                    <Image style={{ marginLeft: '15px' }} src={ngoisao} width={23} height={25} />
                                    <p style={{ fontSize: '10px', textAlign: 'center', paddingBottom: '5px' }}>Tính năng nổi bật</p>
                                </Style>
                            </BoxPreview1>
                            <BoxPreview>
                                <StyleImg>
                                    <Image src={IphoneDetailPreview} width={48} height={48} />
                                </StyleImg>
                            </BoxPreview>
                            <BoxPreview>
                                <StyleImg>
                                    <Image src={IphoneDetailPreview} width={48} height={48} />
                                </StyleImg>
                            </BoxPreview>
                            <BoxPreview>
                                <StyleImg>
                                    <Image src={IphoneDetailPreview} width={48} height={48} />
                                </StyleImg>
                            </BoxPreview>
                            <BoxPreview>
                                <StyleImg>
                                    <Image src={IphoneDetailPreview} width={48} height={48} />
                                </StyleImg>
                            </BoxPreview>
                        </Preview>
                    </FlexL>
                    <FlexR>
                        <div>
                            <div>
                                <Price>{productDetail?.price} ₫</Price>
                                <DisPrice>{productDetail?.disPrice} ₫</DisPrice>
                            </div>
                            <Desc>
                                <p>{productDetail?.desc}</p>
                            </Desc>
                        </div>
                        <DivClick>
                            <div>
                                <Button>Mua ngay</Button>
                            </div>
                            <DivAddToCart>
                                <BorderImg onClick={() => addTo(productDetail)}>
                                    <img style={{ paddingTop: '10px', paddingLeft: '10px' }} src={iconcart} />
                                </BorderImg>
                                <P onClick={() => addTo(productDetail)} >Thêm vào giỏ hàng</P>
                            </DivAddToCart>
                        </DivClick>
                    </FlexR>
                </Flex>
                {/* Sản phẩm cùng loại */}
                <ProductRelated />
                {/* Mô tả sản phẩm */}
                <div>
                    <div>
                        <h5></h5>
                    </div>
                </div>
            </Container>
        </div>
    )
}

const StyleImg = styled.div`
    margin-top: 5px;
    margin-left: 5px;
`
const Style = styled.div`
    margin-top: 1px;
    margin-left: 3px;
`
const StyleButton = styled.button`
    margin-left: 30px;
    display: flex;
`
const BorderImg = styled.div`
    width: 48px;
    height: 48px;
    border: 2px solid #D70018;
    border-radius: 4px;
`
export const StyleIMgSPCL = styled.div`
    padding-top: 10px;
    padding-left: 35px;
`
export default ProductDetail