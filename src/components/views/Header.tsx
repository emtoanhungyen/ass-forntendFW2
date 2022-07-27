import React from 'react'
import { Menu } from 'antd';
import styled from 'styled-components';
import { Input, Tooltip } from 'antd';

import Logo from './header/Logo';
import Search from './header/Search';
import Navigation from './header/Navigation';
type Props = {}


const Header = (props: Props) => {
    return (
        <div>
            <Container mode="horizontal" defaultSelectedKeys={['mail']}>
                <Navbar>
                    <Logo />
                    <Search />
                    <Navigation />
                </Navbar>
            </Container>
        </div>
    )
}


const Container = styled(Menu)`
    background-color: #D70018;
    width: 100%;
    height: 64px;
`
const Navbar = styled.div`
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;

`

export default Header