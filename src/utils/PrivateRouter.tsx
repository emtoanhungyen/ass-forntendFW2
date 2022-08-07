import React from 'react'
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticate } from './localStorage';
import { toast } from 'react-toastify';

type PrivteRouteProps = {
    children: JSX.Element
}

const PrivteRoute = (props: PrivteRouteProps) => {
    const role = JSON.parse(localStorage.getItem('user') as string);
    const navigate = useNavigate();
    
    if (role.user.role === 0) {
        toastr.error("Bạn không có quyền truy cập.")
        return navigate('/signin')
    }
    return props.children
}
export default PrivteRoute