import React, { useState } from 'react'
import styled from 'styled-components'
import Ggmap from './../../../assets/images/map.png'
import CartIcon from './../../../assets/images/cart.png'
import CarIcon from './../../../assets/images/car.png'
import { Link } from 'react-router-dom'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { logOut } from '../../../api/users'

type Props = {}

const Navigation = (props: Props) => {
    const [logout, setLogout] = useState<any>(null);
    const login = JSON.parse(localStorage.getItem('user') as string);
    return (
        <Container>
            <Div>
                <A to=''>Gọi mua hàng</A>
                {/* <span>1900 8198</span> */}
            </Div>
            <Div>
                <img src={Ggmap} alt="" />
                <A to=''>Cửa hàng gần bạn</A>
            </Div>
            <Div>
                <img src={CartIcon} alt="" />

                <A to=''>Tra cứu đơn hàng</A>
            </Div>
            <Div>
                <img src={CarIcon} alt="" />
                <A to='/cart' >Giỏ hàng</A>
            </Div>
            {login === null ? (
                <Div>
                    <Link to='/signin'>
                        <UserOutlined style={{ fontSize: '27px', color: 'white' }} />
                    </Link>
                </Div>
            ) : (
                <Div>
                    <LogoutOutlined style={{ fontSize: '27px', color: 'white' }} onClick={() => logOut()} />
                </Div>
            )}


        </Container>
    )
}
const Container = styled.div`
    display: flex;
    height: 64px;
`
const Div = styled.div`
    padding-right: 6px;
    line-height: 64px;
`
const A = styled(Link)`
    color: white;
`
const Icon = styled.svg`
    width: 25px;
    height: 25px;
    color: white;
`

export default Navigation