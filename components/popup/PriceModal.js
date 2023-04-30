import { useState } from "react";
import ReactSlider from "react-slider";
import { roboto } from "../font/font";
const PriceModal = () => {
    const [currentValue, setCurrentValue] = useState(100000);
    const [max, setMax] = useState("");
    const [min, setMin] = useState("");

    const handleRangeValue =(val)=>{
        setCurrentValue(val);
    }
    return (
        <div className="hidden xl:flex flex-col gap-4">
            <div className="flex items-center gap-2">
                    <div className="w-full relative">
                        <input 
                            type="number"
                            value={min}
                            onChange={(e)=>setMin(e.target.value)}
                            className={`border-x border-y border-solid border-[#2d2d2d] bg-transparent p-1 appearance-none text-[10px] leading-6 text-white font-light ${roboto.className} w-full`}
                            placeholder="MIN"
                             />
                             <div className="flex items-center gap-2 absolute top-1/2 -translate-y-1/2 right-2.5">
                                <span className={`text-[10px] leading-6 text-[#858585] font-light ${roboto.className}`}>
                                100,000
                                </span>
                                <span className={`text-[10px] leading-6 text-white font-light ${roboto.className}`}>
                                AED
                                </span>
                             </div>
                    </div>
                    <div className="w-full relative">
                        <input 
                            type="number"
                            value={max}
                            onChange={(e)=>setMax(e.target.value)}
                            className={`border-x border-y border-solid border-[#2d2d2d] bg-transparent p-1 appearance-none text-[10px] leading-6 text-white font-light ${roboto.className} w-full`}
                            placeholder="MAX"
                             />
                             <div className="flex items-center gap-2 absolute top-1/2 -translate-y-1/2 right-2.5">
                                <span className={`text-[10px] leading-6 text-[#858585] font-light ${roboto.className}`}>
                                    500,000,000
                                </span>
                                <span className={`text-[10px] leading-6 text-white font-light ${roboto.className}`}>
                                AED
                                </span>
                             </div>
                    </div>

                </div>
                
            <ReactSlider
                className={`customSlider w-full h-0.5 block ${currentValue>100000?"bg-white":"bg-black"} bg-black relative`}
                trackClassName="customSlider-track h-0.5 bg-gray-200 bg-white w-3.5 h-3.5 -top-1.5 flex rounded-full"
                thumbClassName="customSlider-thumb bg-white w-3.5 h-3.5 flex rounded-full -top-1.5"
                min={100000}
                max={500000000}
                value={currentValue}
                onChange={(value) => handleRangeValue(value)}
              />
              <div className="flex items-center justify-between w-full">
                <span className={`text-[10px] text-white font-medium leading-6 ${roboto.className}`}>
                    100,000 AED
                </span>
                <span className={`text-[10px] text-white font-medium leading-6 ${roboto.className}`}>
                    500,000,000 AED
                </span>
              </div>
            <div className="flex items-center justify-end gap-3">
                <button className="uppercase text-xs text-white font-light font-sans outline-none">
                    cancel
                </button>
                <button className="uppercase border-x border-y border-solid border-white text-xs text-white font-light font-sans outline-none py-2.5 px-4">
                    apply changes
                </button>
            </div>
        </div>
    );
}

export default PriceModal;