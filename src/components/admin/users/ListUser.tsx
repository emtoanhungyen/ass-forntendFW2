import React, { useEffect, useState } from 'react'
import { Table, Space } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { CategoryType } from '../../../types/Category'
import { DeleteTwoTone, EditTwoTone, PlusSquareOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAppSelector } from '../../../app/hook'
import { useDispatch } from 'react-redux'
import { getCategorys } from '../../../features/CategorySlice'
import { getUser } from '../../../features/UserSlice'
import { UserType } from '../../../types/Users'

type Props = {
}

const ListUser = (props: Props) => {
    const user = useAppSelector((item: any) => item.user.value)
    console.log(user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<any>(getUser())
    }, [])

    const dataSource = user.map((item: UserType, index: any) => {
        return {
            index: index + 1,
            id: item.id,
            email: item.email,
            phone: item.phone,
            role: item.role
        }
    });
    const columns: ColumnsType<UserType> = [
        {
            title: '#',
            dataIndex: 'index',
            key: 'index',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Thao tác',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/admin/users/${record.id}/edit`}>
                        <EditTwoTone style={{ fontSize: '20px' }} />
                    </Link>
                    <Button>
                        <DeleteTwoTone style={{ fontSize: '20px' }} />
                    </Button>
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
                            <H3>Danh sách user</H3>
                        </div>
                    </div>
                    <div>
                        {/* <IconAdd className="fa-regular fa-square-plus"></IconAdd> */}
                        <Link to='/admin/users/add'>
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
const Content = styled.div`
  margin-top: 25px;
`
const Button = styled.button`
  background-color: white;
  border: 1px solid white;
`
export default ListUser