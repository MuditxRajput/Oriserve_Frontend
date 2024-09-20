"use client"
import { useSelector } from "react-redux";
const Keywords = () => {
    const keywords = useSelector((state)=>state.search?.singleSearch?.keywords);
    return (
      <div className="flex gap-5 mt-5 ">
        {keywords?.map((val)=>(
            <div>
                <p className="text-lg font-semibold text-red-600">{val}</p>
            </div>
        ))}
      </div>
    )
}

export default Keywords;