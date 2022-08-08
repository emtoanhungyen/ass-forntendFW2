import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addPro, getAll, getProductByCate, read, removePr, update } from "../api/product";
import { ProductType } from "../types/Products";

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async () => {
        const { data } = await getAll()
        return data
    }
)
export const addProducts = createAsyncThunk(
    'product/addProducts',
    async (product: ProductType) => {
        const { data } = await addPro(product)
        return data
    }
)
export const removeProduct = createAsyncThunk(
    'product/removeProduct',
    async (id: any) => {
        const { data } = await removePr(id)
        return data
    }
)
export const getOneProduct = createAsyncThunk(
    'product/getOneProduct',
    async (id: any) => {
        const { data } = await read(id)
        return data
    }
)
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (product: ProductType) => {
        const { data } = await update(product)
        return data
    }
)
export const getProductByCategory = createAsyncThunk(
    'product/getProductByCategory',
    async (category: any) => {
        const { data } = await getProductByCate(category);
        return data
    }
)

const ProductSlice = createSlice({
    name: "product",
    initialState: {
        value: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(removeProduct.fulfilled, (state, action) => {
            const { id } = action.payload;
            const remove = state.value.filter((item: ProductType) => item.id !== id);
            state.value = remove
        })
        builder.addCase(getOneProduct.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(getProductByCategory.fulfilled, (state, action) => {
            state.value = action.payload
        })
    },
})
export default ProductSlice.reducer