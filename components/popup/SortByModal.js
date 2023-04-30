import { useState } from "react";
import ModalComponent from "./Modal";

const SortByModal = ({ isOpen, close }) => {
    const sortData = [
        {
            label: "Recommended",
            selected: true
        },
        {
            label: "Latest",
            selected: false
        },
        {
            label: "Price (Highest to Lowest)",
            selected: false
        },
        {
            label: "Price (Lowest to Highest)",
            selected: false
        },
        {
            label: "Most viewed",
            selected: false
        },
        {
            label: "Most popular",
            selected: false
        },
    ]
    const [sort, setSort] = useState("Recommended");
    const handleChange =(e, item)=>{
        const { checked, value } = e.target;
        setSort(value);
        close()
    }
    return (
        <ModalComponent
            isOpen={isOpen}
            closeModal={close}
            className={"bg-white rounded-[10px] px-5 py-7 w-full "}
            wrapperClass="fixed bottom-0 overflow-y-auto w-full flex xl:hidden"
        >
            <div className="flex flex-col gap-3 w-full">
                <span className="text-sm leading-6 text-black font-normal font-sans">
                    Sort by
                </span>
                <div className="flex flex-col gap-3 w-full">
                    {
                        sortData.map((item, index) => (
                            <div className="flex items-center justify-between w-full" key={index}>
                                <span className={`text-sm leading-6 text-black ${item.selected ? "font-medium" : "font-normal"} font-sans`}>
                                    {item.label}
                                </span>
                                <input 
                                    type="radio" 
                                    checked={sort===item.label}
                                    value={item.label}
                                    onChange={(e)=>handleChange(e,item)}
                                    className="w-4 h-4 bg-white border-x border-y border-solid rounded-full  border-black  checked:border-x checked:border-solid checked:border-red  checked:rouned-full appearance-none checked:before:w-2.5 checked:before:h-2.5 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:top-1/2 checked:before:-translate-y-1/2 checked:before:bg-black relative before:absolute before:rounded-full"
                                />
                                
                            </div>
                        ))
                    }

                </div>
            </div>

        </ModalComponent>
    );
}

export default SortByModal;