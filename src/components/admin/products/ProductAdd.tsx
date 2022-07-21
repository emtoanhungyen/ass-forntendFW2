import React, { useEffect, useState } from 'react'
import { H3, Content, ContentLeft, ContentRight, Div, Span, P, Div1, Submit } from './../../../styles/admin/styleProductAdd';
import { Form, Input, Space, Select, Button, InputNumber } from 'antd';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductType } from '../../../types/Products';
import { add } from '../../../api/product';
// toastr
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CategoryType } from '../../../types/Category';
import { getAllCate } from '../../../api/category';

type Props = {}

type InputForm = {
  id?: number,
  name: string,
  price: number,
  disPrice: number,
  img?: string,
  desc: string,
  category?: string
}


const ProductAdd = (props: Props) => {
  const Navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<ProductType>();
  // sate
  const [products, setProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);



  const handelerImg = async (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'v7xao77w');

    const anh = await axios.post('https://api.cloudinary.com/v1_1/dd0io3fh2/image/upload', formData, {
      headers: {
        "Content-Type": "application/form-data"
      }
    })
  }

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    try {
      add(data);
      setProducts([...products, data]);
      toastr.success("Bạn đã thêm thành công.");
      Navigate('/admin/products');
    } catch (error) {
      console.log(error);
      toastr.error("Đã có lỗi xảy ra.")
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
      <div>
        <H3>Thêm mới sản phẩm</H3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Tên sản phẩm</label>
            <input {...register('name', { required: true })}
              type="text" className="form-control" placeholder='Tên sản phẩm...' />
            {errors.name && <span className='text-red-400'>Không được để trống.</span>}
          </div>


          <div className="mb-3">
            <label className="form-label">Ảnh</label>
            <input {...register('img')}
              onChange={handelerImg}
              type="file" className="form-control" />
            {errors.img && <span className='text-red-400'>Không được để trống.</span>}
          </div>


          <div className='row g-3 mb-3'>
            <div className="col">
              <label htmlFor="exampleInputPassword1" className="form-label">Giá gốc</label>
              <input {...register('price', { required: true })}
                type="number" className="form-control" placeholder='Giá gốc...' />
              {errors.price && <span className='text-red-400'>Không được để trống.</span>}
            </div>
            <div className="col">
              <label htmlFor="exampleInputPassword1" className="form-label">Giá khuyến mãi</label>
              <input {...register('disPrice', { required: true })}
                type="number" className="form-control" placeholder='Giá khuyến mãi...' />
              {errors.disPrice && <span className='text-red-400'>Không được để trống.</span>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Danh mục</label>
            <select {...register('category', { required: true })}
              className="form-select border w-full h-[38px] rounded">
              <option selected>Chọn danh mục</option>
              {category.map((item, index) => {
                return <option value={item.name}>{item.name}</option>
              })}
            </select>
            {errors.category && <span className='text-red-400'>Không được để trống.</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Mô tả sản phẩm</label>
            <textarea {...register('desc')}
              className="form-control" id="exampleFormControlTextarea1" placeholder='Nhập mô tả sản phẩm' rows={3} defaultValue={""} />
          </div>

          <Submit type="submit" className="btn btn-primary">Submit</Submit>
        </form>

      </div>

      {/* Bảng antd */}
      <div>
        {/* <Content>
        <ContentLeft>
          <Div1>
            <input type="file"
              {...register('img')}
              accept="image/png, image/jpg, image/jpeg, image/gif"
              onChange={handelerImg} />
            <Span>Thêm ảnh</Span>
          </Div1>

        </ContentLeft>
        <ContentRight>
          <P>Thông tin sản phẩm</P>
          <hr />
          <Form
            name='basic'
            layout="vertical"
            // autoComplete="off"
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            

          >
            <Form.Item
              name="name"
              label="Tên sản phẩm"
              rules={[{ required: true, message: 'Tên sản phẩm không được để trống.' }]}
            >
              <Input {...register('name')} />
            </Form.Item>
            <Space size={'small'}>
              <FormItem
                name="price"
                label="Giá gốc"
                rules={[{ required: true, message: 'Giá sản phẩm không được để trống.' }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </FormItem>

              <FormItem
                name="disPrice"
                label="Giá khuyến mãi"
                rules={[{ required: true, message: 'Giá khuyến mãi không được để trống.' }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </FormItem>
            </Space>
            <FormItem
              name='category'
              label="Danh mục"
              rules={[{ required: true, message: 'Danh mục không được để trống.' }]}
            >
              <Select>
                <Select.Option value='dm1' >Danh mục 1</Select.Option>
                <Select.Option value='dm2' >Danh mục 2</Select.Option>
                <Select.Option value='dm3' >Danh mục 3</Select.Option>
                <Select.Option value='dm4' >Danh mục 4</Select.Option>
              </Select>
            </FormItem>

            <Form.Item
              name="description"
              label="Mô tả"
              rules={[{ message: 'Please input Intro' }]}
            >
              <Input.TextArea showCount maxLength={100} style={{ height: '121px' }} {...register('desc')} />
            </Form.Item>

            <Button
              type="primary"
              style={{ borderRadius: '5px' }}
              htmlType="submit"
            >
              Thêm mới
            </Button>
          </Form>
        </ContentRight>
      </Content> */}
      </div>
    </div>
  )
}


export default ProductAdd