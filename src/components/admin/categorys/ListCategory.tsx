import React, { useState } from 'react'
import { Table, Space } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { CategoryType } from '../../../types/Category'
import { DeleteTwoTone, EditTwoTone, PlusSquareOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
type Props = {
    categorys: CategoryType[];
}




const ListCategory = ({ categorys }: Props) => {

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
                    <button>
                        <DeleteTwoTone style={{ fontSize: '20px' }} />
                    </button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
            />
        </div>
    )
}

export default ListCategory