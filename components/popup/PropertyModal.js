import { useState } from "react";

const PropertyModal = ({data, sort, setSort}) => {
    const sortData = [
        {
            label: "All",
            selected: true
        },
        {
            label: "Villa",
            selected: false
        },
        {
            label: "Apartment",
            selected: false
        },
        {
            label: "Townhouse",
            selected: false
        },
        {
            label: "Penthouse",
            selected: false
        },
        {
            label: "Office Spaces",
            selected: false
        },
        {
            label: "Loft & Duplex",
            selected: false
        },
        {
            label: "Plot",
            selected: false
        },
    ]
    const handleChange =(e, item)=>{
        const { checked, value } = e.target;
        setSort(value);
        close()
    }
    return ( 
        <div className="hidden xl:flex flex-col gap-3 w-full">
                    {
                        data.map((item, index) => (
                            <div className="flex items-center justify-between w-full" key={index}>
                                <span className={`text-sm leading-6 text-white ${item.selected ? "font-medium" : "font-normal"} font-sans`}>
                                    {item.label}
                                </span>
                                <input 
                                    type="radio" 
                                    checked={sort===item.label}
                                    value={item.label}
                                    onChange={(e)=>handleChange(e,item)}
                                    className="w-4 h-4 bg-black border-x border-y border-solid rounded-full  border-gray-300  checked:border-x checked:border-solid checked:border-red  checked:rouned-full appearance-none checked:before:w-2.5 checked:before:h-2.5 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:top-1/2 checked:before:-translate-y-1/2 checked:border-white checked:before:bg-white relative before:absolute before:rounded-full"
                                />
                                
                            </div>
                        ))
                    }

                </div>
     );
}
 
export default PropertyModal;