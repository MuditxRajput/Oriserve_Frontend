"use client";
import { useParams } from 'next/navigation';
import useVersionSearch from "../../../hooks/useVersionSearch.js";
const VersionPageInfo = () => {
    const params = useParams();
  const version = params.version;
  useVersionSearch(version);
  
  return (
    <div>
    
    </div>
  )
}

export default VersionPageInfo