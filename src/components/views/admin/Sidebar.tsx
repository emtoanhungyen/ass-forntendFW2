import React from 'react'
import { LaptopOutlined, TabletOutlined, PhoneOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { Layout, MenuProps, Menu } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {}

const { Sider } = Layout;

const items2: MenuProps['items'] = [
  {
    key: `phone`,
    icon: React.createElement(PhoneOutlined),
    label: <Link to='/admin/products'>Danh sách sản phẩm</Link>
  },
  {
    key: `laptop`,
    icon: React.createElement(LaptopOutlined),
    label: <Link to='/admin/categorys'>Danh mục sản phẩm</Link>
  },
  {
    key: `tablet`,
    icon: React.createElement(TabletOutlined),
    label: <Link to='/admin/tablet'>Máy tính bảng</Link>
  },
  {
    key: `sould`,
    icon: React.createElement(CustomerServiceOutlined),
    label: <Link to='/admin/sould'>Âm thanh</Link>
  },


];

const Sidebar = (props: Props) => {
  return (
    <Sider width={200} style={{height: '100vh'}} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={items2}
      />
    </Sider>
  )
}
export default Sidebar