import Image from "next/image";
import { GeneralTitle } from "./FilterModal";
const MultipleSelectOption = ({ data, setData, setShow, selected, title }) => {
    const handleSelect = (item) => {
        if (title === "feature") {
            const temp = [...data];
            setData(
                temp.map((items) => items.id === item.id ? { ...items, selected: !items.selected } : items)
            )
        } else {
            setData(item);
            setShow(false)
        }

    }
    const handleSelectAll = () => {
        if (title === "feature") {
            const temp = [...data];
            temp.map((item)=>item.selected=true);
            setData([...temp])
        } else{
            setData({
                selected: false,
                label: "All"
            });
            setShow(false)
        }
       
    }
    return (<div className="flex flex-col divide-y divide-customGray-400">
        <div className="w-full flex items-center justify-between px-5 pb-5">
            <Image
                alt="back-icon"
                src="/images/arrow-left.svg"
                width={14}
                height={14}
                onClick={() => setShow(false)}
            />
            <GeneralTitle weight="normal" title="Type" color="black" />
            <div />
        </div>
        <div className="flex flex-col divide-y divide-customGray-400 relative overflow-y-auto h-full max-h-[346px]">
            {data.map((item, index) => (
                <div
                    onClick={() => handleSelect(item)}
                    key={index}>
                    <div className="flex items-center justify-between px-5 py-3">
                        <GeneralTitle title={item.label} weight="normal" color="black" />
                        {title !== "feature" ? <span>
                            {selected.label === item.label ? (
                                <Image
                                    alt="back-icon"
                                    src="/images/search/checked.svg"
                                    width={14}
                                    height={10}
                                />
                            ) : null}
                        </span> : <span>
                            {
                                item.selected && <Image
                                    alt="back-icon"
                                    src="/images/search/checked.svg"
                                    width={14}
                                    height={10}
                                />
                            }</span>}

                    </div>
                </div>
            ))}

        </div>


        <button
            onClick={handleSelectAll}
            className="flex items-center justify-center py-2 mx-5 mt-4 text-sm leading-8 font-medium font-sans text-white bg-black rounded-md ">
            Select All
        </button>
    </div>);
}

export default MultipleSelectOption;