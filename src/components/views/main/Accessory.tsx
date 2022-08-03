import React from 'react'
import { Image, Typography } from 'antd'
import { Link } from 'react-router-dom'
import Phukien from './../../../assets/images/phukien.png'
import { Box, Container, DivBox, DivTitle, Img, Py2 } from '../../../styles/views/Accessory'
import styled from 'styled-components'

const { Text } = Typography
type Props = {}



const Accessory = (props: Props) => {
    return (
        <Container>
            <DivTitle>
                <TextTitle>Phụ kiện</TextTitle>
                <Link to='#'>Xem tất cả</Link>
            </DivTitle>
            <DivBox>
                <Box style={{backgroundColor: '#FFA3A3'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#FFB8B8'}}>
                    <Py2>
                        <LinkPK to='#'>Phụ kiện Apple</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#FF94EB'}}>
                    <Py2>
                        <LinkPK to='#'>Dán màn hình</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#E0B3FF'}}>
                    <Py2>
                        <LinkPK to='#'>Ốp lưng</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#E0B3FF'}}>
                    <Py2>
                        <LinkPK to='#'>Cáp, sạc</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#4D91FF'}}>
                    <Py2>
                        <LinkPK to='#'>Pin dự phòng</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#85FFB1'}}>
                    <Py2>
                        <LinkPK to='#'>Thiết bị mạng</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#F5D63D'}}>
                    <Py2>
                        <LinkPK to='#'>Camera</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#FDA363'}}>
                    <Py2>
                        <LinkPK to='#'>Chuột, bàn phím</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#FF6666'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#D6D6D6'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#FFADB6'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#96FDB5'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#6BCEFF'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#D8A8FF'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#EFC2FF  '}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
            </DivBox>
        </Container>
    )
}

const TextTitle = styled(Text)`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
`
const LinkPK = styled(Link)`
    color: white;
    &:hover {
        color: red;
    }
`

export default Accessory