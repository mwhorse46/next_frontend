import Image from "next/image";
import { GeneralTitle } from "./FilterModal";
import { useEffect, useState } from "react";

const MultipleSelect = ({data, title,setShow}) => {
    const [option, setOption]= useState(data[0]);
    useEffect(()=>{
        let temp =[...data];
        const filterData = temp.filter((item)=>item.selected===true);
        console.log(filterData);
        if(filterData.length>1){
            setOption({
                label:"Custom"
            })
        }
        if(filterData.length===1){
            setOption(filterData[0])
        } 
        if(filterData.length===temp.length){
            setOption({
                label:"All"
            })
        }
    },[data])
    const handleFilterProperty = () => {
        setShow(true)
    };
    return ( 
        <div className="flex items-center justify-between px-5 w-full py-4 border-t-[1px] border-top border-customGray-400">
                <GeneralTitle title={title} weight="semibold" color="black" />
                <button
                    onClick={() => handleFilterProperty()}
                    className="flex items-center gap-3.5 text-gray-500 outline-none">
                    <GeneralTitle color="gray-500" title={option.label} weight="normal" />
                    <Image alt="arrow" src="/images/search/arrow-right.svg" width={6} height={6} />
                </button>
            </div>
     );
}
 
export default MultipleSelect;