"use client";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVersion } from "../Store/SearchSlice";
const useVersionSearch = (version) => {
    const dispatch = useDispatch();
    const singleResult = useSelector((state) => state.search?.singleResult);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://registry.npmjs.org/${singleResult}/${version}`);
            dispatch(setVersion(response.data));
        }
        fetchData();
    }, [version,singleResult]);

    return {};
}
export default useVersionSearch;