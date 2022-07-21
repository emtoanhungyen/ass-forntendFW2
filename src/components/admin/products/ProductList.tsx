import React, { useEffect, useState } from 'react'
import { DeleteTwoTone, EditTwoTone, PlusSquareOutlined } from '@ant-design/icons'
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Input,
  Select,
} from 'antd';
import { ProductType } from '../../../types/Products';
import { getAll, remove } from '../../../api/product';
import { useQuery } from 'react-query';
// toastr
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { getAllCate } from '../../../api/category';
import { CategoryType } from '../../../types/Category';

type Props = {
}
const { Option } = Select;

const ProductList = (props: Props) => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAll();
      setProducts(res.data);
    }
    fetchData();
  }, []);

  const { isLoading, data } = useQuery('Products', getAll);

  const columns: ColumnsType<ProductType> = [
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ảnh',
      dataIndex: 'img',
      key: 'img',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Giá sau giảm',
      dataIndex: 'disPrice',
      key: 'disPrice',
    },
    {
      title: 'Mô tả',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/admin/products/${record.id}/edit`}>
            <EditTwoTone style={{ fontSize: '20px' }} />
          </Link>
          <button onClick={() => onHandleRemove(record.id!)}>
            <DeleteTwoTone style={{ fontSize: '20px' }} />
          </button>
        </Space>
      ),
    },
  ];

  const onHandleRemove = (id: number) => {
    try {
      const confirm = window.confirm("Bạn có chắc muốn xóa?");
      if (confirm) {
        remove(id);
        setProducts(products.filter(item => item !== id));
        toastr.success("Xóa thành công!");
      }
    } catch (error) {
      console.log(error);
      toastr.error("Xóa thất bại!");
    }
  }
  // render category
  useEffect(() => {
    const getCate = async () => {
      const { data } = await getAllCate();
      setCategory(data);
    }
    getCate();
  }, [])

  return (
    <div>
      <Container>
        <div>
          <div>
            <H3>Danh sách sản phẩm</H3>
          </div>
          <DienthoaiPhai>
            <Mt5>
              <p>Bộ lọc</p>
            </Mt5>
            <Div>
              <p>Danh mục sản phẩm</p>
              <Input.Group compact>
                <Danhmuc>
                  {category.map((item, index) => {
                    return <Option value={item.id}>{item.name}</Option>
                  })}
                </Danhmuc>
              </Input.Group>
            </Div>
          </DienthoaiPhai>
        </div>
        <div>

          {/* <IconAdd className="fa-regular fa-square-plus"></IconAdd> */}
          <Link to='/admin/products/add'>
            <PlusSquareOutlined style={{ fontSize: '30px' }} />
          </Link>
        </div>
      </Container>
      <Content>
        <Table loading={isLoading} columns={columns} dataSource={data?.data} />
      </Content>
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
const Danhmuc = styled(Select)`
  width: 352px;
  height: 34px;
  border: 1px solid #E1E5EB;
  border-color: #E1E5EB;
`
const Content = styled.div`
  margin-top: 25px;
`
export default ProductList