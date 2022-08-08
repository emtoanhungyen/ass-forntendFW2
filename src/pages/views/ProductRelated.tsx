import { Image, Space } from 'antd'
import React from 'react'
import {
    BorderBoxSPCL,
    BoxSPCL,
    DivBox,
    Py2,
    Span1,
    Span2,
    SpanTitle,
    TitleSPCL
} from '../../styles/views/ProductDetail'
import { Link } from 'react-router-dom'
import Spcl from './../../assets/images/spcl1.png'
import styled from 'styled-components'
import { useAppSelector } from '../../app/hook'
import { getProductByCate } from '../../api/product'
type Props = {}

const ProductRelated = (props: Props) => {
    
    return (
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
    )
}
export const StyleIMgSPCL = styled.div`
    padding-top: 10px;
    padding-left: 35px;
`

export default ProductRelated