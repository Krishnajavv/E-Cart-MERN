import { configureStore } from "@reduxjs/toolkit";
import whishListSlice from '../Redux/slice/whishListSlice'
import cartSlice from "./slice/cartSlice";

const store = configureStore({
    reducer:{
        whishListReducer:whishListSlice,
        cartReducer:cartSlice

    }
})

export default store