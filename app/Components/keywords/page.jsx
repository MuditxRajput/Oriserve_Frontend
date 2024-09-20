"use client"
import { memo } from "react";
import { useSelector } from "react-redux";

const Keywords = memo(() => {
    const keywords = useSelector((state) => state.search?.singleSearch?.keywords);

    if (!keywords || keywords.length === 0) {
        return "none"; // Don't render anything if there are no keywords
    }

    return (
        <div className="flex flex-wrap gap-3 mt-5">
            {keywords.map((val, index) => (
                <div key={index} className="px-3 py-1 ">
                    <p className="text-lg font-semibold text-red-600">{val}</p>
                </div>
            ))}
        </div>
    );
});

Keywords.displayName = 'Keywords';

export default Keywords;