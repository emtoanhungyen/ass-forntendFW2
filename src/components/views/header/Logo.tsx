import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoHeader from './../../../assets/images/anhhtus-logo 2.png';
type Props = {}

const Logo = (props: Props) => {
    return (
        <div>
            <Link to='/'>
                <Img src={LogoHeader} alt="" />
            </Link>
        </div>
    )
}

const Img = styled.img`
    max-width: 65px;
    height: 57px;
    margin-top: 3px;
`

export default Logo