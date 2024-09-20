"use client"
import { useSelector } from "react-redux";
import { memo } from "react";

const Keywords = memo(() => {
    const keywords = useSelector((state) => state.search?.singleSearch?.keywords);

    if (!keywords || keywords.length === 0) {
        return null; // Don't render anything if there are no keywords
    }

    return (
        <div className="flex flex-wrap gap-3 mt-5">
            {keywords.map((val, index) => (
                <div key={index} className="bg-gray-100 rounded-full px-3 py-1">
                    <p className="text-sm font-semibold text-red-600">{val}</p>
                </div>
            ))}
        </div>
    );
});

Keywords.displayName = 'Keywords';

export default Keywords;