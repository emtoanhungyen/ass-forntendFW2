import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProductType } from '../../../types/Products'
import { useNavigate, useParams } from 'react-router-dom'
import { H3, Submit } from '../../../styles/admin/styleProductAdd'
import axios from 'axios'
import { read, update } from '../../../api/product'
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { uploadImage } from '../../../utils/upFiletoCloudinary'
type Props = {
}

type InputForm = {
  id?: number,
  name: string,
  price: number,
  quantity: number,
  disPrice: number,
  img?: string,
  desc: string,
  category?: string
}

const ProductEdit = (props: Props) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<InputForm>();
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductType[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      reset(data)
    }
    getProduct();
  }, [id])


  const onSubmit: SubmitHandler<InputForm> = async (data) => {
    try {
      const photo = await uploadImage(data);
      console.log(photo.url);
      data.img = photo.url

      update(data);
      setProducts([...products, data])
      navigate(-1);
      toastr.success("Cập nhật sản phẩm thành công");
    } catch (error) {
      console.log(error);
      toastr.error("Đã có lỗi xảy ra.")
    }
  }

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
              // onChange={handelerImg}
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
              <option value="1">Điện thoại</option>
              <option value="2">Laptop</option>
              <option value="3">Máy tính bảng</option>
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
    </div>
  )
}

export default ProductEdit