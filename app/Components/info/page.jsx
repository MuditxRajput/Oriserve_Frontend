import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { FaLink } from "react-icons/fa6";
import { ImGit } from "react-icons/im";
import { useSelector } from 'react-redux';
import formatDate from '../../utils/formatData.js';
const PackageInfo = () => {
    const packageData = useSelector((state)=>state.search?.singleSearch);
    const versionData = useSelector((state)=>state.search.version);

if(!packageData) return <div>Loading...</div>
  return (
    <div className="w-full">
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-lg text-gray-500 mb-1 font-semibold">Install</h2>
          <div className="flex items-center bg-gray-100 p-2 rounded">
            <code className="text-md font-light flex-grow">{versionData?.name? `npm i ${versionData?.name}@${versionData?.version}` : `npm i ${packageData.name}`}</code>
            <Copy size={16} className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg text-gray-500 mb-1 font-semibold">Repository</h2>
          <a href={packageData.repository?.url} className="text-sm text-black font-semibold flex items-center">
            {/* <Github size={16} className="mr-1" /> */}
            <ImGit size={20} className="mr-1" />
            {/* {packageData.repository?.url} */}
            
            <p   className='text-lg'>{versionData?.repository?.url?.split("//")[1] ? versionData?.repository?.url.split("//")[1] : packageData.repository?.url.split("//")[1]}</p>
            {/* {packageData.repository?.url.split('/').slice(-2).join('/')} */}
          </a>
          <hr className="my-2"/>
        </div>

        <div className="mb-4">
          <h2 className="text-lg text-gray-500 mb-1 font-semibold">Homepage</h2>
          <a href={packageData?.homepage} className="text-sm text-black font-semibold flex items-center">
            {/* <Home size={16} className="mr-1" /> */}
            <FaLink size={20} className="mr-1" />
            <p className='text-lg'>{versionData?.homepage ? versionData?.homepage?.split("//")[1] : packageData?.homepage?.split("//")[1]}</p>
           {/* <p>{versionData?.homepage ? versionData?.homepage : packageData?.homepage}</p> */}
            {/* {packageData?.homepage.split('/').slice(-2).join('/')} */}
          </a>
          <hr className="my-2"/>
        </div>

          

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h2 className="text-lg text-gray-500 font-semibold">Version</h2>
            <p className="font-semibold">{versionData?.version ? versionData?.version : packageData['dist-tags']?.latest}</p>
          </div>
       
          <div>
            <h2 className="text-lg text-gray-500 font-semibold">License</h2>
            <p className="font-semibold">{versionData?.license ? versionData?.license : packageData?.license || 'None'}</p>
          </div>
          
          
         
        </div>
        <hr className="my-2 w-full"/>
        <div>
        <div>
            <h2 className="text-lg text-gray-500 font-semibold">Unpacked Size</h2>
            <p className="font-semibold">{ versionData? versionData?.["dist"]?.unpackedSize : "NA"}</p>
          </div>
        </div>
        <hr className="my-2 w-full"/>
        <div className="mb-4">
          <h2 className="text-lg text-gray-500 mb-1 font-semibold">Last publish</h2>
          <p className="font-semibold">{packageData?.time?.modified ? formatDate(packageData?.time?.modified) : "N/A"}</p> 
          
        </div>

       

        <Button className="w-full mb-2 bg-green-500 hover:bg-green-600 text-white">Try on RunKit</Button>
        <Button variant="outline" className="w-full text-red-500 border-red-500 hover:bg-red-50">Report malware</Button>
      </div>
    </div>
  );
};

export default PackageInfo;