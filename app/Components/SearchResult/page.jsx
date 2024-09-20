"use client";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import useSearchQueryHook from "../../hooks/useSearchQueryHook.js";
import { setSingleResult } from "../../Store/SearchSlice.js";
import formatDate from "../../utils/formatData.js";
import Pagination from "../Pagination/page.jsx";

const SearchResult = () => {
  useSearchQueryHook();
  const dispatch = useDispatch();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const searchResults = useSelector((state) => state.search?.searchResults);
  const query = useSelector((state) => state.search.searchQuery);

  const totalItems = searchResults?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    return searchResults?.slice(startIndex, endIndex) || [];
  }, [currentPage, searchResults]);

  const onPageChange = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const clickHandler = useCallback((name) => {
    dispatch(setSingleResult(name));
    router.push(`/Components/package/${name}`);
  }, [dispatch, router]);

  if (!searchResults) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        <span className="ml-3 text-xl font-semibold animate-pulse">Loading...</span>
      </div>
    );
  }

  if (searchResults.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div>
      <div className="flex justify-between p-5 bg-gray-100 shadow-t-md shadow-gray-400">
        <p className="font-semibold text-xl">
          {totalItems} packages found
        </p>
        <Pagination
          onPageChange={onPageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
      <div className="flex gap-8">
        <div className="flex  flex-col w-1/5 p-4 gap-4 px-10">
          <h3 className="font-semibold text-md">Sort Packages</h3>
          {["optimal", "popularity", "quality", "maintenance"].map((option) => (
            <label key={option} className="radio-option">
              <input type="radio" name="sort" value={option} />
              <span className="radio-label px-2 capitalize">{option}</span>
              <hr className={`w-full border-${option === "optimal" ? "black" : option === "popularity" ? "cyan-500" : option === "quality" ? "purple-500" : "red-500"} mt-1`} />
            </label>
          ))}
        </div>
        <div className="w-3/4 mt-4">
          {currentItems.map((result) => (
            <div
              key={result.package.name}
              className="flex flex-col border-b-2 border-gray-300 p-4 mb-4 gap-2"
            >
              <div className="flex items-center gap-2">
                <p 
                  onClick={() => clickHandler(result.package.name)} 
                  className="font-semibold text-lg hover:underline hover:cursor-pointer"
                >
                  {result.package.name}
                </p>
                {query === result.package.name && (
                  <p className="bg-purple-100 px-2 py-0.5 text-sm ml-2 rounded-md">
                    exact match
                  </p>
                )}
              </div>
              <p className="text-md text-gray-500">{result.package.description}</p>
              <div className="flex flex-wrap gap-2">
                {result?.package?.keywords?.map((val) => (
                  <p
                    key={val}
                    className="rounded-md px-3 py-1 bg-gray-100 text-sm text-gray-700 hover:bg-gray-200 hover:cursor-pointer"
                  >
                    {val}
                  </p>
                ))}
              </div>
              <div className="flex gap-3 mb-2">
                <IoPersonCircle size={24} />
                <p className="text-md text-gray-500 font-semibold hover:text-red-500">{result.package.publisher.username}</p>
                <p className="text-md text-gray-500">published {result.package.version}</p>
                <p className="text-md text-gray-500">{formatDate(result.package.date)}</p>
              </div>
            </div>
          ))}
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
