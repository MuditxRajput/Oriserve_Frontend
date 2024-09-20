"use client"
import { useState } from "react";
import { useSelector } from "react-redux";
import useSingleSearch from "../../../hooks/useSingleSearch";
import CodePage from "../../CodePage/page";
// import CodePage from "../../CodePage";
import formatDate from "../../../utils/formatData.js";
import Dependencies from "../../Dependencies/page";
import Dependents from "../../Dependents/page";
import Readme from "../../Readme/page";
import VersionsPage from '../../VersionsPage/page';
import PackageInfo from "../../info/page";
const PackageName = () => {
  useSingleSearch();
  const singleSearch = useSelector((state) => state.search?.singleSearch);
  const { versions } = singleSearch || {};
  const data = ["Readme", "Code", "Dependencies", "Dependents", "Versions"];
  const [activeTab, setActiveTab] = useState("Readme");

  if (!singleSearch) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-48 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-40"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex mx-32 px-10 py-5 flex-col">
      <div>
        <p className="text-2xl font-bold">{singleSearch.name}</p>
        <div className="flex gap-4 items-center mt-1">
          <p className="text-sm font-normal">{singleSearch["dist-tags"]?.latest}</p>
          <p className="text-sm font-normal text-green-500">Public</p>
          <p>Published {formatDate(singleSearch.time?.modified)}</p>    
        </div>
      </div>
      <div className="flex mt-5">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(item)}  
            className={`py-2 px-7 font-semibold text-lg w-full ${
             item==="Readme"?"border-b-2 border-yellow-500":item==="Code"?"border-b-2 border-red-500":item==="Dependencies"?"border-b-2 border-purple-500":item==="Dependents"?"border-b-2 border-blue-500":item==="Versions"?"border-b-2 border-cyan-500":""
            } ${item==="Readme"?"hover:bg-yellow-200":item==="Code"?"hover:bg-red-200":item==="Dependencies"?"hover:bg-purple-200":item==="Dependents"?"hover:bg-blue-200":item==="Versions"?"hover:bg-cyan-400":""}
            ${item==="Readme"?"text-yellow-800":item==="Code"?"text-red-800":item==="Dependencies"?"text-purple-800":item==="Dependents"?"text-blue-800":item==="Versions"?"text-cyan-800":""}
            ${item==="Readme"&&activeTab==="Readme"?"bg-yellow-100":item==="Code"&&activeTab==="Code"?"bg-red-100":item==="Dependencies"&&activeTab==="Dependencies"?"bg-purple-100":item==="Dependents"&&activeTab==="Dependents"?"bg-blue-100":item==="Versions"&&activeTab==="Versions"?"bg-cyan-100":""}
            `
          }
          >
            {item === "Versions" ? `${Object.keys(versions ?? {}).length} ${item}` : item}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="w-[800px]">
          {activeTab === "Readme" && <Readme/>}
          {activeTab === "Code" && <CodePage />}
          {activeTab === "Dependencies" && <Dependencies />}
          {activeTab === "Dependents" && <Dependents />}
          {activeTab === "Versions" && <VersionsPage />}
        </div>
        <div className="flex w-[400px] justify-center">
          <PackageInfo/>
        </div>
      </div>
    </div>
  );
};

export default PackageName;
