import React, { useEffect, useState } from 'react'
import { DeleteTwoTone, EditTwoTone, PlusSquareOutlined } from '@ant-design/icons'
import { Image, Space, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Input,
  Select,
} from 'antd';
import { ProductType } from '../../../types/Products';
// toastr
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { getAllCate } from '../../../api/category';
import { CategoryType } from '../../../types/Category';
import { SearchInput } from '../../../styles/admin/Layout';
import { AiOutlineSearch } from 'react-icons/ai';
import { useAppSelector } from '../../../app/hook';
import { getProducts } from '../../../features/ProductSlice';
import { useDispatch } from 'react-redux';

type Props = {
  onRemove: (id: number) => void
}
const { Option } = Select;

const ProductList = ({ onRemove }: Props) => {

  const [category, setCategory] = useState<CategoryType[]>([]);
  const [search, setSearch] = useState("");
  const products = useAppSelector(item => item.product.value);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch<any>(getProducts());
  }, [])
  //antd
  const columns: ColumnsType<ProductType> = [
    {
      title: '#',
      dataIndex: 'key',
      key: 'key',

    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ảnh',
      dataIndex: 'img',
      key: 'img',
      render: (index, record) => (
        <Image src={record.img} max-width={150} />
      ),
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
      ellipsis: {
        showTitle: false,
      },
      render: desc => (
        <Tooltip placement="topLeft" title={desc}>
          {desc}
        </Tooltip>
      ),
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
          <Button onClick={() => onRemove(record.id!)}>
            <DeleteTwoTone style={{ fontSize: '20px' }} />
          </Button>
        </Space>
      ),
    },
  ];
  const dataSource = products.filter((value: ProductType) => {
    if (search == "") {
      return value
    } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
      return value
    }
  }).map((item: ProductType, index) => {
    return {
      key: index + 1,
      id: item.id,
      name: item.name,
      img: item.img,
      price: item.price,
      disPrice: item.disPrice,
      category: item.category,
      desc: item.desc
    }
  });


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
            {/* <Div>
              <p>Danh mục sản phẩm</p>
              <Input.Group compact>
                <Danhmuc>
                  {category.map((item, index) => {
                    return <Option value={item.id}>{item.name}</Option>
                  })}
                </Danhmuc>
              </Input.Group>
            </Div> */}
            <Div>
              <SearchInput size="middle" prefix={<AiOutlineSearch />}
                onChange={(event) => {
                  setSearch(event.target.value);
                }} />
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
        <Table columns={columns} dataSource={dataSource} size="middle" />
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
  margin-top: 10px;
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
const Button = styled.button`
  background-color: white;
  border: 1px solid white;
`
export default ProductList