import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Image, Menu, MenuProps } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Img } from '../../../styles/views/sider';
import icon_phone from './../../../assets/images/Frame.png'
import icon_dh from './../../../assets/images/icon-dh.png'
import icon_house from './../../../assets/images/icon-house.png'
import icon_laptop from './../../../assets/images/icon-laptop.png'
import icon_mtb from './../../../assets/images/icon-mtb.png'
import icon_tn from './../../../assets/images/icon-tn.png'
import banner from './../../../assets/images/Rectangle.png'

type Props = {}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(<Link style={{ color: 'black' }} to='phone'>Điện thoai</Link>, 'sub1', <img src={icon_phone} />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
    ]),

    getItem(<Link style={{ color: 'black' }} to='#'>Laptop</Link>, 'sub2', <img src={icon_laptop} />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
    ]),

    getItem(<Link style={{ color: 'black' }} to='#'>Máy tính bảng</Link>, 'sub3', <img src={icon_mtb} />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
    ]),
    getItem(<Link style={{ color: 'black' }} to='#'>Âm thanh</Link>, 'sub4', <img src={icon_tn} />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
    ]),
    getItem(<Link style={{ color: 'black' }} to='#'>Đồng hồ</Link>, 'sub5', <img src={icon_dh} />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
    ]),
    getItem(<Link style={{ color: 'black' }} to='#'>Nhà thông minh</Link>, 'sub6', <img src={icon_house} />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
    ])
];

const onClick: MenuProps['onClick'] = e => {
    console.log('click', e);
};

const Sider = (props: Props) => {
    return (
        <Container>
            <div>
                <Menu_main onClick={onClick} style={{ width: 256 }} mode="vertical" items={items} />
            </div>
            <Img>
                <Image src={banner} width={900} />
            </Img>
        </Container>
    )
}

export const Linkcus = styled(Link)`
    color: black;
    
`
export const Menu_main = styled(Menu)`
    .ant-menu-vertical {
        border: none;
    }
`

export default Sider