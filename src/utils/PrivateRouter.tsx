import React from 'react'
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { useNavigate } from 'react-router-dom';
import { isAuthenticate } from './localStorage';
import { toast } from 'react-toastify';
import { message } from 'antd';
import { Navigate } from "react-router-dom";

type PrivteRouteProps = {
    children: JSX.Element
}

const PrivteRoute = (props: PrivteRouteProps) => {

    const role = JSON.parse(localStorage.getItem('user') as string);
    const navigate = useNavigate();

    if (role.user.role === 0) {
        message.error("Bạn không có quyền truy cập.");
        <Navigate to="/signin" replace={true} />
    }
    return props.children
}
export default PrivteRoute