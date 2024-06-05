import { createSlice } from "@reduxjs/toolkit";

const whishListSlice=createSlice({
    name:"whishlist",
    initialState:[],
    reducers:{
        addToWhishList:(state,action)=>{
            state.push(action.payload)
        },
            removeFromWhishlist:(state,action)=>{
                return state.filter(item=>item.id!=action.payload)

            }
        
    }
})
export const {addToWhishList,removeFromWhishlist}=whishListSlice.actions
export default whishListSlice.reducer