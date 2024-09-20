"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaFileZipper } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuBoxes, LuTags } from "react-icons/lu";
import { useSelector } from "react-redux";
import CodePage from "../../../../Components/CodePage/page.jsx";
import Dependencies from "../../../../Components/Dependencies/page.jsx";
import Dependents from "../../../../Components/Dependents/page.jsx";
import Readme from "../../../../Components/Readme/page.jsx";
import VersionsPage from "../../../../Components/VersionsPage/page.jsx";
import PackageInfo from "../../../../Components/info/page.jsx";
import useVersionSearch from "../../../../hooks/useVersionSearch.js";
import formatDate from "../../../../utils/formatData.js";
const PackageVersion = () => {
    const router = useRouter();
    const params = useParams();
    const {version} = params;
    useVersionSearch(version);
    const singleSearch = useSelector((state) => state.search?.singleSearch);
    const{versions} = singleSearch
    const data =["Readme","Code","Dependencies","Dependents","Versions"]
    const[activeTab,setActiveTab] = useState("Readme")
    const versionData = useSelector((state)=>state.search.version);
    if (!singleSearch || !versionData) {
      return (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          <span className="ml-3 text-xl font-semibold animate-pulse">Loading...</span>
        </div>
      );
    }
  return (
    <div className="flex mx-32 px-10 py-5 flex-col  ">
      <div >
        <p className="text-xl font-bold">{versionData?.name}</p>
        <div className="flex gap-4 items-center mt-1">
          <p className="text-sm font-normal">{versionData?.version}</p>
          <p className="text-sm font-normal">Public</p>
          <p>Published {versionData?.time?.modified ? formatDate(versionData?.time?.modified) : "N/A"}</p>    
        </div>
      </div>
      <div className="flex  mt-5 ">
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
           {item ==="Readme"?<div className="flex gap-2 text-lg items-center"><IoDocumentTextOutline />{item}</div> :item==="Code"?<div className="flex gap-2 text-lg items-center"><FaFileZipper/>{item}</div>:item==="Dependencies"?<div className="flex gap-2 text-lg items-center"><FiBox/>{item}</div>:item==="Dependents"?<div className="flex gap-2 text-lg items-center"><LuBoxes/>{item}</div>:item==="Versions"?<div className="flex gap-2 text-lg  items-center"><LuTags/>{ `${Object.keys(versions ?? {}).length} ${item}`}</div>:""}
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
      <div className="flex  w-[400px] justify-center ">
        <PackageInfo/>
      </div>
      </div>
    </div>
   
  )
}

export default PackageVersion
