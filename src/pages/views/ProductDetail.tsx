import { Image, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { BorderBoxSPCL, BoxPreview, BoxPreview1, BoxSPCL, BtnAddtoCart, Button, Container, Desc, DisPrice, DivBox, Flex, FlexL, FlexR, P, Preview, Price, Py2, Span1, Span2, SpanTitle, TitleSPCL } from '../../styles/views/ProductDetail'
import IphoneDetail from './../../assets/images/iphoneDetail.png'
import IphoneDetailPreview from './../../assets/images/ipDetailPreview.png'
import ngoisao from './../../assets/images/ngoisao.png'
import iconcart from './../../assets/images/Iconcart.png'
import Spcl from './../../assets/images/spcl1.png'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { read } from '../../api/product'
import { ProductType } from '../../types/Products'

type Props = {}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const [product, setProducts] = useState<ProductType>();
    useEffect(() => {
        const productDetail = async () => {
            const { data } = await read(id);
            setProducts(data)
        }
        productDetail();
    }, [])
    return (
        <div>
            <Container>
                <SpanTitle>Samsung Galaxy A73 (5G) 256GB</SpanTitle>
            </Container>
            <hr />
            <Container>
                <Flex>
                    <FlexL>
                        <Image src={product?.img} width={358} height={358} />
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
                                <Price>{product?.price} ₫</Price>
                                <DisPrice>{product?.disPrice} ₫</DisPrice>
                            </div>
                            <Desc>
                                <p>{product?.desc}</p>
                            </Desc>
                        </div>
                        <BtnAddtoCart>
                            <Button>Mua ngay</Button>
                            <StyleLink to='#'>
                                <BorderImg>
                                    <img style={{ paddingTop: '10px', paddingLeft: '10px' }} src={iconcart} />
                                </BorderImg>
                                <P>
                                    Thêm vào giỏ hàng
                                </P>
                            </StyleLink>
                        </BtnAddtoCart>
                    </FlexR>
                </Flex>
                {/* Sản phẩm cùng loại */}
                <BoxSPCL>
                    <TitleSPCL>
                        <SpanTitle>Sản phẩm cùng loại</SpanTitle>
                    </TitleSPCL>
                    <DivBox>
                        <BorderBoxSPCL>
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <StyleIMgSPCL>
                                    <Image src={Spcl} width={160} height={160} />
                                </StyleIMgSPCL>
                                <Py2>
                                    <Link to="#">Tai nghe Bluetooth Samsung Galaxy Buds Live</Link>
                                </Py2>
                                <Py2>
                                    <Span1>1.490.000 ₫</Span1>
                                    <Span2>4.490.000 ₫</Span2>
                                </Py2>
                            </Space>
                        </BorderBoxSPCL>
                        <BorderBoxSPCL>
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <StyleIMgSPCL>
                                    <Image src={Spcl} width={160} height={160} />
                                </StyleIMgSPCL>
                                <Py2>
                                    <Link to="#">Tai nghe Bluetooth Samsung Galaxy Buds Live</Link>
                                </Py2>
                                <Py2>
                                    <Span1>1.490.000 ₫</Span1>
                                    <Span2>4.490.000 ₫</Span2>
                                </Py2>
                            </Space>
                        </BorderBoxSPCL>
                        <BorderBoxSPCL>
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <StyleIMgSPCL>
                                    <Image src={Spcl} width={160} height={160} />
                                </StyleIMgSPCL>
                                <Py2>
                                    <Link to="#">Tai nghe Bluetooth Samsung Galaxy Buds Live</Link>
                                </Py2>
                                <Py2>
                                    <Span1>1.490.000 ₫</Span1>
                                    <Span2>4.490.000 ₫</Span2>
                                </Py2>
                            </Space>
                        </BorderBoxSPCL>
                        <BorderBoxSPCL>
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <StyleIMgSPCL>
                                    <Image src={Spcl} width={160} height={160} />
                                </StyleIMgSPCL>
                                <Py2>
                                    <Link to="#">Tai nghe Bluetooth Samsung Galaxy Buds Live</Link>
                                </Py2>
                                <Py2>
                                    <Span1>1.490.000 ₫</Span1>
                                    <Span2>4.490.000 ₫</Span2>
                                </Py2>
                            </Space>
                        </BorderBoxSPCL>
                        <BorderBoxSPCL>
                            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                                <StyleIMgSPCL>
                                    <Image src={Spcl} width={160} height={160} />
                                </StyleIMgSPCL>
                                <Py2>
                                    <Link to="#">Tai nghe Bluetooth Samsung Galaxy Buds Live</Link>
                                </Py2>
                                <Py2>
                                    <Span1>1.490.000 ₫</Span1>
                                    <Span2>4.490.000 ₫</Span2>
                                </Py2>
                            </Space>
                        </BorderBoxSPCL>
                    </DivBox>
                </BoxSPCL>
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
const StyleLink = styled(Link)`
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