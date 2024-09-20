
import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./SearchSlice";

const store = configureStore({
    reducer:{
        search:SearchSlice
    }
})

export default store;