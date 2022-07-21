import { CategoryType } from "../types/Category";
import instance from "./instance";

export const getAllCate = () => {
    const url = "/categorys";
    return instance.get(url);
}
export const readCate = (id: any) => {
    const url = `/categorys/${id}`
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/categorys/${id}`;
    return instance.delete(url);
}
export const add = (category: CategoryType) => {
    const url = `/categorys`;
    return instance.post(url, category);
}
export const update = (category: CategoryType) => {
    const url = `/categorys/${category.id}`
    return instance.put(url, category);
}