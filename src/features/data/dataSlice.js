import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'',
    age:0
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        }
    }
})

export const {setName, setAge} = dataSlice.actions

export default dataSlice.reducer