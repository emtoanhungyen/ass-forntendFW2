import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Submit } from '../../../styles/admin/styleProductAdd'
import { CategoryType } from '../../../types/Category'

// toastr
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { add } from '../../../api/category';
import { useNavigate } from 'react-router-dom';

type Props = {
    onAdd: (category: InputForm) => void
}
type InputForm = {
    id?: number,
    name: string,
    desc?: string
}

const AddCategory = (props: Props) => {
    const [category, setCategory] = useState<CategoryType[]>([]);
    const { register, handleSubmit, formState: { errors } } = useForm<CategoryType>();
    const Navigate = useNavigate();

    const onSubmit: SubmitHandler<InputForm> = (data) => {
        try {
            add(data);
            // setCategory([...category, data]);
            Navigate(-1);
            toastr.success("Thêm danh mục thành công!");
        } catch (error) {
            console.log(error);
            toastr.error("Đã xảy ra lỗi");

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên danh mục</label>
                    <input {...register('name', { required: true })}
                        type="text" className="form-control" placeholder='Tên danh mục...' />
                    {errors.name && <span className='text-red-400'>Không được để trống.</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Mô tả danh mục</label>
                    <textarea {...register('desc')}
                        className="form-control" id="exampleFormControlTextarea1" placeholder='Nhập mô tả danh mục' rows={3} defaultValue={""} />
                </div>

                <Submit type="submit" className="btn btn-primary">Submit</Submit>
            </form>

        </div>
    )
}

export default AddCategory