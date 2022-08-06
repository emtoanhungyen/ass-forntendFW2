import { UserType } from "../types/Users";
import instance from "./instance";

export const getUsers = () => {
    const url = "/users"
    return instance.get(url);
}
export const getOneUser = (id: number) => {
    const url = `/users/${id}`
    return instance.get(url);
}
export const addUser = (user: UserType) => {
    const url = "/users"
    return instance.post(url, user);
}
