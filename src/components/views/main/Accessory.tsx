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
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
                    <Py2>
                        <LinkPK to='#'>Nổi bật</LinkPK>
                        <Img src={Phukien} />
                    </Py2>
                </Box>
                <Box>
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