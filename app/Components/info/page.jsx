"use client"
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { FaLink } from "react-icons/fa6";
import { ImGit } from "react-icons/im";
import { useSelector } from 'react-redux';
import formatDate from '../../utils/formatData.js';

const PackageInfo = () => {
    const packageData = useSelector((state) => state.search?.singleSearch);
    const versionData = useSelector((state) => state.search.version);

    if (!packageData) return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    );

    const getInstallCommand = () => {
        if (versionData?.name && versionData?.version) {
            return `npm i ${versionData.name}@${versionData.version}`;
        }
        return packageData?.name ? `npm i ${packageData.name}` : 'Package name not available';
    };

    const getUrl = (url) => {
        if (!url) return 'URL not available';
        const parts = url.split('//');
        return parts.length > 1 ? parts[1] : url;
    };

    const renderInfoItem = (title, value, link = null) => (
        <div className="mb-4">
            <h2 className="text-lg text-gray-500 mb-1 font-semibold">{title}</h2>
            {link ? (
                <a href={link} className="text-sm text-black font-semibold flex items-center">
                    {value === 'Repository' ? <ImGit size={20} className="mr-1" /> : <FaLink size={20} className="mr-1" />}
                    <p className='text-lg'>{getUrl(link)}</p>
                </a>
            ) : (
                <p className="font-semibold">{value || 'N/A'}</p>
            )}
            <hr className="my-2"/>
        </div>
    );

    return (
        <div className="w-full">
            <div className="p-4">
                <div className="mb-4">
                    <h2 className="text-lg text-gray-500 mb-1 font-semibold">Install</h2>
                    <div className="flex items-center bg-gray-100 p-2 rounded">
                        <code className="text-md font-light flex-grow">{getInstallCommand()}</code>
                        <Copy size={16} className="text-gray-500 cursor-pointer" />
                    </div>
                </div>

                {renderInfoItem('Repository', 'Repository', versionData?.repository?.url || packageData.repository?.url)}
                {renderInfoItem('Homepage', 'Homepage', versionData?.homepage || packageData?.homepage)}

                <div className="grid grid-cols-2 gap-4 mb-4">
                    {renderInfoItem('Version', versionData?.version || packageData['dist-tags']?.latest)}
                    {renderInfoItem('License', versionData?.license || packageData?.license)}
                </div>

                {renderInfoItem('Unpacked Size', versionData?.["dist"]?.unpackedSize)}
                {renderInfoItem('Last publish', packageData?.time?.modified ? formatDate(packageData.time.modified) : undefined)}

                <Button className="w-full mb-2 bg-green-500 hover:bg-green-600 text-white">Try on RunKit</Button>
                <Button variant="outline" className="w-full text-red-500 border-red-500 hover:bg-red-50">Report malware</Button>
            </div>
        </div>
    );
};

export default PackageInfo;