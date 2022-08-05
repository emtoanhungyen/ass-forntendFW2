import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, getAllCate, readCate, remove, update } from "../api/category";
import { CategoryType } from "../types/Category";

export const getCategorys = createAsyncThunk(
    'category/getCategorys',
    async () => {
        const { data } = await getAllCate()
        return data
    }
)
export const addCategorys = createAsyncThunk(
    'category/addProducts',
    async (category: CategoryType) => {
        const { data } = await add(category)
        return data
    }
)
export const removeCategory = createAsyncThunk(
    'category/removeCategory',
    async (id: any) => {
        const { data } = await remove(id)
        return data
    }
)
export const getOneCategory = createAsyncThunk(
    'category/getOneCategory',
    async (id: any) => {
        const { data } = await readCate(id)
        return data
    }
)
export const updateCategory = createAsyncThunk(
    'category/updateCategory',
    async (category: CategoryType) => {
        const { data } = await update(category)
        return data
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        values: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategorys.fulfilled, (state, action) => {
            state.values = action.payload
        })
        builder.addCase(getOneCategory.fulfilled, (state, action) => {
            state.values = action.payload
        })
    },
})
export default categorySlice.reducer