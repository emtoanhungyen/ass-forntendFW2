import React, { useState } from 'react'
import { Table, Space } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { CategoryType } from '../../../types/Category'
import { DeleteTwoTone, EditTwoTone, PlusSquareOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
    categorys: CategoryType[],
    removeCate: (id: any) => void
}

const ListCategory = ({ categorys, removeCate }: Props) => {

    const dataSource = categorys && categorys.map((item, index) => {
        return {
            index: index + 1,
            id: item.id,
            name: item.name,
            desc: item.desc
        }
    });
    const columns: ColumnsType<CategoryType> = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Tên danh mục',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Mô tả',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/admin/products/${record.id}/edit`}>
                        <EditTwoTone style={{ fontSize: '20px' }} />
                    </Link>
                    <button onClick={() => { removeCate(record.id) }}>
                        <DeleteTwoTone style={{ fontSize: '20px' }} />
                    </button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div>
                <Container>
                    <div>
                        <div>
                            <H3>Danh sách sản phẩm</H3>
                        </div>
                    </div>
                    <div>
                        {/* <IconAdd className="fa-regular fa-square-plus"></IconAdd> */}
                        <Link to='/admin/categorys/add'>
                            <PlusSquareOutlined style={{ fontSize: '30px' }} />
                        </Link>
                    </div>
                </Container>
                <Content>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                    />
                </Content>
            </div>

        </div>
    )
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #5F5E61;
`
const DienthoaiPhai = styled.div`
  display: flex;
  margin-top: 25px;
`
const Mt5 = styled.div`
  margin-top: 15px;
`
const Div = styled.div`
  margin-left: 25px;
`
const Content = styled.div`
  margin-top: 25px;
`
export default ListCategory