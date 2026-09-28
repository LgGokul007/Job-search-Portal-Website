import { createSlice } from "@reduxjs/toolkit"

let slice=createSlice({
    name:"job-details",
    initialState:[],
    reducers:{
        pushstate:(state,action)=>{
            return action.payload
        }
        
    }
})

export const {pushstate,login}=slice.actions

export default slice.reducer