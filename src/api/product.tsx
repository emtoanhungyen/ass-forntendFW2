import { ProductType } from "../types/Products";
import instance from "./instance";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
}
export const read = (id: any) => {
    const url = `/products/${id}`
    return instance.get(url);
}
export const removePr = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType) => {
    const url = `/products`;
    return instance.post(url, product);
}
export const update = (product: ProductType) => {
    const url = `/products/${product.id}`
    return instance.put(url, product);
}