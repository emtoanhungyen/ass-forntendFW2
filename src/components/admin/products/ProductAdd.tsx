import React, { useEffect, useState } from 'react'
import { H3, Content, ContentLeft, ContentRight, Div, Span, P, Div1, Submit } from './../../../styles/admin/styleProductAdd';
import { Form, Input, Space, Select, Button, InputNumber } from 'antd';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductType } from '../../../types/Products';
import { addPro } from '../../../api/product';
// toastr
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CategoryType } from '../../../types/Category';
import { getAllCate } from '../../../api/category';
import { uploadImage } from '../../../utils/upFiletoCloudinary';
import FormItem from 'antd/lib/form/FormItem';

type Props = {
  onAdd: (product: ProductType) => void
}

type InputForm = {
  id?: number,
  name: string,
  price: number,
  disPrice: number,
  img?: string,
  desc: string,
  category?: string
}


const ProductAdd = ({ onAdd }: Props) => {
  const Navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<ProductType>();
  // sate
  const [products, setProducts] = useState<ProductType[]>([]);
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [preview, setPreview] = useState('');

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // const handelerImg = async (event: any) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', 'v7xao77w');

  //   const anh = await axios.post('https://api.cloudinary.com/v1_1/dd0io3fh2/image/upload', formData, {
  //     headers: {
  //       "Content-Type": "application/form-data"
  //     }
  //   })
  //   return anh.data.url

  // }

  const onSubmit: SubmitHandler<InputForm> = async (data) => {

    const photo = await uploadImage(data);
    console.log(photo.url);
    data.img = photo.url

    await onAdd(data)
    setProducts([...products, data])
    toastr.success("B???n ???? th??m th??nh c??ng.");
    Navigate('/admin/products');

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
        <H3>Th??m m???i s???n ph???m</H3>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">
            <label className="form-label">T??n s???n ph???m</label>
            <input {...register('name', { required: true })} type="text" className="form-control" placeholder='T??n s???n ph???m...' />
            {errors.name && <span className='text-red-400'>Kh??ng ???????c ????? tr???ng.</span>}
          </div>

          {/* <div className="mb-3">
            <label className="form-label">S??? l?????ng</label>
            <input {...register('quantity', { required: true })} type="number" className="form-control" placeholder='S??? l?????ng...' />
            {errors.quantity && <span className='text-red-400'>Kh??ng ???????c ????? tr???ng.</span>}
          </div> */}

          <div className="mb-3">
            <label className="form-label">???nh</label>
            <input {...register('img')} onChange={uploadImage} type="file" className="form-control" />
            {errors.img && <span className='text-red-400'>Kh??ng ???????c ????? tr???ng.</span>}
          </div>


          <div className='row g-3 mb-3'>
            <div className="col">
              <label className="form-label">Gi?? g???c</label>
              <input {...register('price', { required: true })} type="number" className="form-control" placeholder='Gi?? g???c...' />
              {errors.price && <span className='text-red-400'>Kh??ng ???????c ????? tr???ng.</span>}
            </div>

            <div className="col">
              <label className="form-label">Gi?? khuy???n m??i</label>
              <input {...register('disPrice', { required: true })} type="number" className="form-control" placeholder='Gi?? khuy???n m??i...' />
              {errors.disPrice && <span className='text-red-400'>Kh??ng ???????c ????? tr???ng.</span>}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Danh m???c</label>
            <select {...register('category', { required: true })} className="form-select border w-full h-[38px] rounded">
              <option defaultValue={''}>Ch???n danh m???c</option>
              {category.map((item, index) => {
                return <option value={item.name}>{item.name}</option>
              })}
            </select>
            {errors.category && <span className='text-red-400'>Kh??ng ???????c ????? tr???ng.</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">M?? t??? s???n ph???m</label>
            <textarea {...register('desc')} className="form-control" id="exampleFormControlTextarea1" placeholder='Nh???p m?? t??? s???n ph???m' rows={3} defaultValue={""} />
          </div>

          <Submit type="submit" className="btn btn-primary">Submit</Submit>
        </form>

      </div>

      {/* B???ng antd */}
      <div>
        {/* <Content>
          <ContentLeft>
            <Div1>
              <input type="file"
                {...register('img')}
                accept="image/png, image/jpg, image/jpeg, image/gif"
              />
              <Span>Th??m ???nh</Span>
            </Div1>

          </ContentLeft>
          <ContentRight>
            <P>Th??ng tin s???n ph???m</P>
            <hr />
            <Form
              name='basic'
              layout="vertical"
              autoComplete="off"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}


            >
              <Form.Item
                name="name"
                label="T??n s???n ph???m"
                rules={[{ required: true, message: 'T??n s???n ph???m kh??ng ???????c ????? tr???ng.' }]}
              >
                <Input {...register('name')} />
              </Form.Item>
              <Space size={'small'}>
                <FormItem
                  name="price"
                  label="Gi?? g???c"
                  rules={[{ required: true, message: 'Gi?? s???n ph???m kh??ng ???????c ????? tr???ng.' }]}
                >
                  <InputNumber style={{ width: '100%' }} />
                </FormItem>

                <FormItem
                  name="disPrice"
                  label="Gi?? khuy???n m??i"
                  rules={[{ required: true, message: 'Gi?? khuy???n m??i kh??ng ???????c ????? tr???ng.' }]}
                >
                  <InputNumber style={{ width: '100%' }} />
                </FormItem>
              </Space>
              <FormItem
                name='category'
                label="Danh m???c"
                rules={[{ required: true, message: 'Danh m???c kh??ng ???????c ????? tr???ng.' }]}
              >
                <Select>
                  <Select.Option value='dm1' >Danh m???c 1</Select.Option>
                  <Select.Option value='dm2' >Danh m???c 2</Select.Option>
                  <Select.Option value='dm3' >Danh m???c 3</Select.Option>
                  <Select.Option value='dm4' >Danh m???c 4</Select.Option>
                </Select>
              </FormItem>

              <Form.Item
                name="description"
                label="M?? t???"
                rules={[{ message: 'Please input Intro' }]}
              >
                <Input.TextArea showCount maxLength={100} style={{ height: '121px' }} {...register('desc')} />
              </Form.Item>

              <Button
                type="primary"
                style={{ borderRadius: '5px' }}
                htmlType="submit"
              >
                Th??m m???i
              </Button>
            </Form>
          </ContentRight>
        </Content> */}
      </div>
    </div>
  )
}


export default ProductAdd