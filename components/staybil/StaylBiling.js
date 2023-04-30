import Image from "next/image";
import { Text18,Text36 } from "../typegraphy";
import { roboto } from "../font/font";
import ArrowRight from "@/public/images/angle-right.svg"
const StayBiling = () => {
    return ( 
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-14 mb-10 px-6 md:px-[70px] w-full">
            <div className="flex flex-col items-center md:items-start gap-3">
                <Text36 color="white" text="Stay Blingy!" weight="bold" />
                <Text18 color="white" text="Subscribe to our news letter and get latest market prices" weight="300" />
            </div>
            <div className="flex items-center w-full lg:w-max">
                <input 
                    type="text"
                    placeholder="E-mail Address"
                    className={`bg-white text-sm text-gray-700 ${roboto.className} font-normal outline-none border-none py-3.5 w-full min-w-0 md:min-w-[373px] h-[50px] pl-5`}
                />
                <div className="h-[50px] flex items-center justify-center bg-black border-x border-y border-solid border-gray-700 px-7">
                    <Image alt="arrow" src={ArrowRight} width={8} height={14} />
                </div>
            </div>
        </div>
     );
}
 
export default StayBiling;