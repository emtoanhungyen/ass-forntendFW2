import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser, login } from "../api/users";
import { UserType } from "../types/Users";
import { toast } from 'react-toastify';
import { message } from "antd";

export const register = createAsyncThunk(
    'user/signup',
    async (user: UserType) => {
        const { data } = await addUser(user);
        return data
    }
)
export const logIn = createAsyncThunk(
    'user/login',
    async (user: any) => {
        const { data } = await login(user);
        return data
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        value: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            try {
                state.value = action.payload
            } catch (error) {
                console.log(error);
            }
        }),
        builder.addCase(logIn.fulfilled, (state, action) => {
            try {
                state.value = action.payload
                localStorage.setItem('user', JSON.stringify(action.payload));
                console.log('dang nhap thanh cong');
            } catch (error) {
                console.log(error);
                message.error("Đã xảy ra lỗi.");
            }
        })
    }
})
export default userSlice.reducer