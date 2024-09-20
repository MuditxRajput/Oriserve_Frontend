// hooks/useSingleSearch.js
"use client"; // Only if using client-side features
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSingleSearch } from "../Store/SearchSlice";
const useSingleSearch = () => {
    const dispatch = useDispatch();
    const singleSearch = useSelector((state) => state.search?.singleResult);
   
  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`https://registry.npmjs.org/${singleSearch}`)
        // console.log("response.data?.["dist-tags"]?.latest", response.data?.["dist-tags"]?.latest);
        dispatch(setSingleSearch(response.data));
    }
   fetchData();
  }, [singleSearch]);

 
  return {};
};

export default useSingleSearch;
