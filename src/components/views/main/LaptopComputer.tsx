import React from 'react'
import { Image, Typography } from 'antd'
import { Link } from 'react-router-dom'
import Phukien from './../../../assets/images/phukien.png'
import { Box, Container, DivBox, DivTitle, Img, Py2 } from '../../../styles/views/Accessory'
import styled from 'styled-components'

const { Text } = Typography
type Props = {}



const LaptopComputer = (props: Props) => {
    return (
        <Container>
            <DivTitle>
                <TextTitle>Linh kiện máy tính</TextTitle>
                <Link to='#'>Xem tất cả</Link>
            </DivTitle>
            <DivBox>
                <Box style={{backgroundColor: '#FCA5A5'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#FDA4AF'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#F9A8D4'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#C4B5FD'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#A5B4FC'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#93C5FD'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#6EE7B7'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#FCD34B'}}>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box style={{backgroundColor: '#FDBA74'}}>
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

export default LaptopComputer