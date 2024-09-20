import { version } from "react";

const { createSlice } = require("@reduxjs/toolkit");

const SearchSlice = createSlice({
    name:"search",
    initialState:{searchQuery:"",searchResults:null,singleResult:null,singleSearch:[],version:null},
    reducers:{
        setSearchQuery:(state,action)=>{
            state.searchQuery = action.payload;
        },
        setSearchResults:(state,action)=>{
            state.searchResults = action.payload;
        },
        setSingleResult:(state,action)=>{
            state.singleResult = action.payload;
        },
        setSingleSearch:(state,action)=>{
            state.singleSearch = action.payload;
        },
        setVersion:(state,action)=>{
            state.version = action.payload;
        }
    }
})  

export const {setSearchQuery,setSearchResults,setSingleResult,setSingleSearch,setVersion} = SearchSlice.actions;
export default SearchSlice.reducer;