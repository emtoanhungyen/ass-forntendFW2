import { message } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { UserType } from "../types/Users";
import instance from "./instance";

export const getAllUsers = () => {
    const url = "/users"
    return instance.get(url);
}
export const getOneUser = (id: number) => {
    const url = `/users/${id}`
    return instance.get(url);
}
export const addUser = (user: UserType) => {
    const url = "/users"
    return instance.post(url, { ...user, role: 0 });
}
export const removeUser = (id: number) => {
    const url = `/users/${id}`
    return instance.delete(url)
}
export const updateUser = (user: UserType) => {
    const url = `/users/${user.id}`
    return instance.put(url, user)
}
export const login = (data: any) => {
    const url = '/login';
    return instance.post(url, data);
}
export const logOut = () => {
    localStorage.removeItem('user');
    message.success('Đăng xuất thành công.');
}