"use client";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { CiSearch } from "react-icons/ci";
import { DiNpm } from "react-icons/di";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../Store/SearchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (search.trim()) {
      dispatch(setSearchQuery(search.trim()));
      router.push('/Components/SearchResult');
    }
  }, [search, dispatch, router]);

  const handleInputChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleHomeNavigation = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="px-16 shadow-sm shadow-slate-200 flex items-center justify-between py-3 border-b border-slate-200">
      <div className="text-black text-4xl font-bold">
        <DiNpm size={70} className="cursor-pointer" onClick={handleHomeNavigation} />
      </div>

      <form
        onSubmit={handleSearch}
        className="flex items-center bg-gray-100 w-full max-w-5xl mx-8"
      >
        <CiSearch className="text-black text-2xl mr-2 ml-2" />
        <input
          type="text"
          placeholder="Search packages"
          value={search}
          onChange={handleInputChange}
          className="bg-transparent w-full px-2 focus:outline-none py-3"
          aria-label="Search packages"
        />
        <button
          type="submit"
          className="bg-black text-white font-bold px-4 py-3 ml-2 disabled:bg-gray-400"
          disabled={!search.trim()}
        >
          Search
        </button>
      </form>

      <div className="flex items-center space-x-4">
        <button className="text-black border border-slate-600 px-4 py-2 hover:bg-gray-100">
          Sign Up
        </button>
        <button className="text-black px-4 py-2 hover:bg-gray-100">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Search;
