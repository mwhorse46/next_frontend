import Image from "next/image";
import { GeneralTitle } from "./FilterModal";

const OneSelect = ({ data, title, setShow }) => {
    const handleFilterProperty = () => {
        setShow(true)
    };
    return (
        <div>
            <div className="flex items-center justify-between px-5 w-full py-4 border-t-[1px] border-top border-[#c4c4c4]">
                <GeneralTitle title={title} weight="semibold" color="black" />
                <button
                    onClick={() => handleFilterProperty()}
                    className="flex items-center gap-3.5 text-gray-500 outline-none">
                    <GeneralTitle color="gray-500" title={data.label} weight="normal" />
                    <Image alt="arrow" src="/images/search/arrow-right.svg" width={6} height={6} />
                </button>
            </div>
            
        </div>
    );
}

export default OneSelect;