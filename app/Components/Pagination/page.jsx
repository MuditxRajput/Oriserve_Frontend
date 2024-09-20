"use client"
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div>
      <button
        className={`px-3 py-1 border ${
          currentPage === 1 ? "text-gray-500" : "text-black"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
     {Array.from({length:totalPages}).map((_,index)=>(
        <button onClick={()=>onPageChange(index+1)} 
        className={`px-3 py-1 border ${
            currentPage === index + 1 ? "text-gray-500" : "text-black"
          }`}
        >{index+1}</button>
     ))}
      <button
        className={`px-3 py-1 border ${
          currentPage === totalPages ? "text-gray-500" : "text-black"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};
export default Pagination;
