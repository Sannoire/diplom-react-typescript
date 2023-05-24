import {configureStore} from "@reduxjs/toolkit";
import inputDataReducer from "./slices/inputData"

const store = configureStore({
    devTools:true,
    reducer: {
        inputData: inputDataReducer
   

    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;