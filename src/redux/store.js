import { configureStore } from "@reduxjs/toolkit";
import serchReducer from "./features/searchSlice";
export const store= configureStore({
    reducer:{
        search:serchReducer
    }
})