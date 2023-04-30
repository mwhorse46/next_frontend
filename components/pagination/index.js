export const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
   };
const Pagination = ({items, pageSize, currentPage, onPageChange,title}) => {
    const pagesCount = Math.ceil(items / pageSize);
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    return ( 
        <div className="flex items-center justify-center gap-2.5 my-24">
            {
                pages.map((page)=>(
                    <span 
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={` cursor-pointer text-base font-normal font-sans ${title==="search"?`text-white ${page===currentPage?'bg-[#0e0f12] border-x border-y border-solid border-white px-3 py-1':''}`:`text-black ${page===currentPage?'bg-[#f8f8f8] border-x border-y border-solid border-black px-3 py-1':''}`}`}>
                        {page}
                    </span>
                ))
            }
        </div>
     );
}
 
export default Pagination;