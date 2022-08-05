import { ProductType } from './../types/Products';
import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
    carts: ProductType[],
    total: number,
    totalItem: number
}

const initialState: Cart = {
    carts: [],
    total: 0,
    totalItem: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductType>) => {
            const cart = action.payload;
            const checkCart = state.carts.find((c: any) => c.id !== action.payload);
            if (checkCart) {
                checkCart.quantity += 1
                console.log("Thêm thành công!");

            }
        }
    }
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer