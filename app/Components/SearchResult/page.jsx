"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import useSearchQueryHook from "../../hooks/useSearchQueryHook.js";
import { setSingleResult } from "../../Store/SearchSlice.js";
import formatDate from "../../utils/formatData.js";
import Pagination from "../Pagination/page.jsx";
const SearchResult = () => {
  
  useSearchQueryHook();
  const dispatch = useDispatch();
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemPerPage] = useState(10);
  const itemsPerPage = 10;
  const totalItems = useSelector((state) => state.search?.searchResults);
  
  const totalPages = Math.ceil(totalItems?.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentItems = totalItems?.slice(startIndex, endIndex);
  const searchResult = useSelector((state) => state.search.searchResults);
  const query = useSelector((state) => state.search.searchQuery);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
 const clickHanlder = (name) => {
  dispatch(setSingleResult(name))
  router.push(`/Components/package/${name}`)
 }
  return (
    <div>
      <div className="flex justify-between p-5 bg-gray-100 shadow-t-md shadow-gray-400">
        <p className="font-semibold text-xl">
          {searchResult?.length} packages found
        </p>
        <Pagination
          onPageChange={onPageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
      <div className="flex  gap-10 ">
        <div className="flex flex-col w-[500px] ml-10 gap-4  ">
          <h3 className="font-semibold text-md">Sort Packages</h3>
          <label class="radio-option">
            <input type="radio" name="sort" value="optimal"  />
            <span class="radio-label px-2">Optimal</span>
            <hr className="w-full border-black mt-1" />
          </label>
          <label class="radio-option">
            <input type="radio" name="sort" value="popularity" />
            <span class="radio-label px-2">Popularity</span>
            <hr className="w-full border-cyan-500 mt-1" />
          </label>
          <label class="radio-option">
            <input type="radio" name="sort" value="quality" />
            <span class="radio-label px-2">Quality</span>
            <hr className="w-full border-purple-500 mt-1" />
          </label>
          <label class="radio-option">
            <input type="radio" name="sort" value="maintenance"  />
            <span class="radio-label px-2">Maintenance</span>
            <hr className="w-full border-red-500 mt-1" />
          </label>
        </div>
        <div className="  mt-4 p-2 ">
          {currentItems?.map((result) => {
            return (
              <div
                key={result.package.name}
                className="flex flex-col border-b-2 border-gray-300 p-1 gap-2"
              >
                {query === result.package.name ? (
                  <div className="flex items-center gap-2">
                    
                    <p onClick={()=>clickHanlder(result.package.name)} className="font-semibold text-lg hover:underline hover:cursor-pointer">{result.package.name}</p>
                    <p className="bg-purple-100 px-2 py-0.5 text-sm ml-2 rounded-md">
                      exact match
                    </p>
                  </div>
                ) : (
                  <p onClick={()=>clickHanlder(result.package.name)} className="font-semibold text-lg hover:underline hover:cursor-pointer">{result.package.name}</p>
                )}
                {/* <p>{result.package.name}</p> */}
                <p className="text-md text-gray-500">{result.package.description}</p>
                <div className="flex flex-wrap gap-2" key={result.package.name}>
                  {result?.package?.keywords?.map((val) => (
                    <p
                      className=" rounded-md px-3 py-1 bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 hover:cursor-pointer"
                      key={val}
                    >
                      {val}
                    </p>
                  ))}
                </div>
                <div className="flex gap-3 mb-2">
                  <IoPersonCircle size={24} />
                  <p className="text-md text-gray-500 font-semibold hover:text-red-500">{result.package.publisher.username}</p>
                  <p className="text-md text-gray-500">published {result.package.version}</p>
                  <p className="text-md text-gray-500 ">{formatDate(result.package.date)}</p>
                </div>
              </div>
            );
          })}
          <div className="mt-10">
            <Pagination
              onPageChange={onPageChange}
              totalPages={totalPages}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
