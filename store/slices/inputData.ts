import {createSlice} from "@reduxjs/toolkit";


const inputDataSlice = createSlice({
    name: "inputDataSlice",
    initialState: {
        data:""
    },
    reducers: {
        setData(state, action){
            state.data = action.payload;
        }
    }
})


export const {setData} = inputDataSlice.actions;
export default inputDataSlice.reducer;