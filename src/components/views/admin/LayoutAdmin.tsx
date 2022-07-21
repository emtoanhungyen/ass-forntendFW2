import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { LaptopOutlined, TabletOutlined, PhoneOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import styled from 'styled-components';
import Logo from './../../../assets/images/anhhtus-logo 2.png'
import { AutoComplete, Input } from 'antd';
import { AiOutlineSearch } from "react-icons/ai";
import { A, ContainerHeader, Image, SearchBar, SearchInput, SpanName } from './../../../styles/admin/Layout'
import Sidebar from './Sidebar';


const { Header, Content, Sider } = Layout;
const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
];




type Props = {}

const LayoutAdmin = (props: Props) => {
    return (
        <div>
            <Layout>
                <ContainerHeader className="header">
                    <Link to='/'>
                        <Image src={Logo} alt="" />
                    </Link>
                    <div>
                        <A href="/admin">Dashboard</A>
                    </div>
                    <SearchBar
                        options={options}
                        filterOption={(inputValue, option) =>
                            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    >
                        <SearchInput size="middle" prefix={<AiOutlineSearch />} />
                    </SearchBar>
                    <SpanName>Xin chào Phạm Quốc Toản</SpanName>
                </ContainerHeader>
                <Layout>
                    <Sidebar />
                    <Body style={{ padding: '0 24px 24px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Outlet />
                        </Content>
                    </Body>
                </Layout>
            </Layout>
        </div>
    )
}
const Body = styled(Layout)`
    background-color: white;
    filter: drop-shadow(0px 0px 5px rgb(0 0 0 / 0.15));
`
export default LayoutAdmin