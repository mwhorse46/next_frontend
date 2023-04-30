import { useContext, useState } from "react";
import { StateContext } from "@/contexts/StateContext";
import ModalComponent from "./Modal";
import InputBox from "../card/InputBox";
import { roboto } from "../font/font";
const AdvancedFilter = ({ isOpen, close }) => {
    const [currentTab, setCurrentTab] = useState(1)
    const tabs = [
        {
            id: 1,
            title: "Buy",
        },
        {
            id: 2,
            title: "Rent",
        },
        {
            id: 3,
            title: "Offplan",
        }
    ]
    const advanceFilter = [
        {
            id: 1,
            title: "Balcony",
            selected: true
        },
        {
            id: 2,
            title: "Pool",
            selected: true
        },
        {
            id: 3,
            title: "Built-in wardrobes",
            selected: true
        },
        {
            id: 4,
            title: "Gym",
            selected: true
        },
        {
            id: 5,
            title: "Equipped kitchen",
            selected: true
        },
        {
            id: 6,
            title: "Walk-in closet",
            selected: true
        },
        {
            id: 7,
            title: "Spa",
            selected: true
        },
        {
            id: 8,
            title: "Covered Parking",
            selected: true
        },
        {
            id: 9,
            title: "Study room",
            selected: true
        },
        {
            id: 10,
            title: "Private pool",
            selected: true
        },
        {
            id: 11,
            title: "Garden",
            selected: true
        },
        {
            id: 12,
            title: "Security",
            selected: true
        },
        {
            id: 13,
            title: "Concierge",
            selected: false
        },
        {
            id: 14,
            title: "Maid service",
            selected: false
        },
        {
            id: 15,
            title: "Jacuzzi",
            selected: false
        },
    ]
    const [filterList, setFilterList] = useState(advanceFilter)
    const sizes = [
        {
            id: 1,
            title: "Any",
            selected: true

        },
        {
            id: 2,
            title: "1 +",
            selected: false

        },
        {
            id: 3,
            title: "2 +",
            selected: false

        },
        {
            id: 4,
            title: "3 +",
            selected: false

        },
        {
            id: 5,
            title: "4 +",
            selected: false

        },
        {
            id: 6,
            title: "5 +",
            selected: false

        },
        {
            id: 7,
            title: "6 +",
            selected: false

        },
        {
            id: 8,
            title: "7 +",
            selected: false

        }
    ]
    const alltypes = [
        {
            id: 1,
            title: "Villa",
            selected: false
        },
        {
            id: 2,
            title: "Apartement",
            selected: false
        },
        {
            id: 3,
            title: "Townhouse",
            selected: false
        },
        {
            id: 4,
            title: "Penthouse",
            selected: false
        },
        {
            id: 5,
            title: "Office",
            selected: false
        },
        {
            id: 6,
            title: "Loft & Duplex",
            selected: false
        },
        {
            id: 7,
            title: "Plot",
            selected: false
        }
    ]
    const allLifestyle = [
        {
            id: 1,
            title: "Beachfront",
            selected: false
        },
        {
            id: 2,
            title: "Downtown Living",
            selected: false
        },
        {
            id: 3,
            title: "Golf Estates",
            selected: false
        },
        {
            id: 4,
            title: "Luxury Penthouses",
            selected: false
        },
        {
            id: 5,
            title: "Waterfront Properties",
            selected: false
        },

        {
            id: 6,
            title: "Residential communities",
            selected: false
        }
    ]
    const [AllType, setAllType] = useState(alltypes);
    const [AllLifeStyle, setAllLifeStyle] = useState(allLifestyle);
    const [Sizes, setSizes] = useState(sizes);
    const [location, setLocation] = useState("");
    const [mprice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [minSize, setMinSize] = useState("")
    const [maxSize, setMaxSize] = useState("");
    const handleSelect = (item) => {
        console.log(item)
        const temp = [...filterList];
        setFilterList(
            temp.map((items) =>
                items.id === item.id ? { ...items, selected: !items.selected } : items
            )
        );
    }
    const handleTypeSelect = (item) => {
        const temp = [...AllType];
        setAllType(
            temp.map((items) =>
                items.id === item.id ? { ...items, selected: !items.selected } : items
            )
        );
    }
    const handleLifeSelect = (item) => {
        const temp = [...AllLifeStyle];
        setAllLifeStyle(
            temp.map((items) =>
                items.id === item.id ? { ...items, selected: !items.selected } : items
            )
        );
    }
    const handleSizeSelect = (item) => {
        const temp = [...Sizes];
        setSizes(
            temp.map((items) =>
                items.id === item.id ? { ...items, selected: !items.selected } : items
            )
        );
    }

    return (
        <>
            <ModalComponent
                isOpen={isOpen}
                closeModal={close}
                className="bg-white w-full max-w-[1300px]"
                wrapperClass={'fixed inset-0 overflow-y-auto w-full'}
            >
                <div className={`flex flex-col p-10 px-12 ${roboto.className}`}>
                    <div className="flex items-left justify-left gap-4 lg:gap-12">
                        <span
                            onClick={close}
                            className="cursor-pointer">
                            <CloseSvg className={"h-4 w-4 md:h-8 md:w-8 text-black"} />
                        </span>
                        <div className="absolute left-1/2 -translate-x-1/2 top-8 lg:top-12 flex items-center gap-4 lg:gap-8">
                            {
                                tabs.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTab(index)}
                                        className={`outline-none text-xl lg:text-2xl leading-10 text-bold text-black ${roboto.className} ${currentTab === index ? "text-black underline" : "text-opacity-30"}`}>
                                        {item.title}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="grid grid-cols-12 items-start lg:gap-20 mt-5 lg:mt-10">
                        <div className="col-span-12 lg:col-span-6 flex flex-col gap-2 lg:gap-3 w-full">
                            <span className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black font-bold ${roboto.className}`}>
                                Advanced Filters
                            </span>
                            <div className="flex items-center flex-wrap gap-3 border-r-2 border-solid">
                                {
                                    filterList.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSelect(item)}
                                            className={`${item.selected ? "bg-black text-white" : "bg-white text-black border-black"} border-x border-y border-solid py-2 px-3 lg:py-2 lg:px-5 flex items-center justify-center text-center text-base lg:text-lg 2xl:text-xl`}>
                                            {item.title}
                                        </button>
                                    ))
                                }
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <span className={`text-lg text-black font-bold ${roboto.className}`}>
                                    Location
                                </span>
                                <div className="">
                                    <InputBox
                                        value={location}
                                        setValue={setLocation}
                                        placeholder={"Pick another location or proceed copy"} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <span className={`text-lg text-black font-bold ${roboto.className}`}>
                                    Price
                                </span>
                                <div className="grid grid-cols-12 lg:gap-5">
                                    <div className="col-span-12 lg:col-span-6 relative">
                                        <InputBox value={mprice} placeholder={"Min Price"} setValue={setMinPrice} />
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 uppercase text-lg text-[#555353] font-sans font-bold">
                                            AED
                                        </span>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6 mt-5 lg:mt-0 relative">
                                        <InputBox value={maxPrice} placeholder={"Max Price"} setValue={setMaxPrice} />
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 uppercase text-lg text-[#555353] font-sans font-bold">
                                            AED
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <span className={`text-lg text-black font-bold ${roboto.className}`}>
                                    Bedrooms
                                </span>
                                <div className="flex items-center gap-4">
                                    {
                                        Sizes.map((item, index) => (
                                            <button
                                                onClick={() => handleSizeSelect(item)}
                                                key={index}
                                                className={`${item.selected ? "bg-black text-white" : "bg-white border-black text-black"} border-x border-y border-solid flex items-center justify-center text-center text-base lg:text-lg xl:text-xl py-1.5 px-3 `}>
                                                {item.title}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>


                        </div>
                        <div className="col-span-12 lg:col-span-6 flex flex-col mt-10">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="flex flex-col col-span-12 lg:col-span-5 gap-2">
                                    <div className="text-base lg:text-lg xl:text-xl font-normal bg-black font-sans py-2 px-4 text-white border-x border-y border-solid border-black flex items-center text-center justify-center">
                                        All types
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {
                                            AllType.map((item, index) => (
                                                <button
                                                    onClick={() => handleTypeSelect(item)}
                                                    key={index}
                                                    className={`${item.selected ? "bg-black text-white" : "bg-white text-black  border-black"} border-x border-y border-solid py-2 px-6 flex items-center justify-center text-center text-base lg:text-lg xl:text-xl`}>
                                                    {item.title}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col col-span-12 lg:col-span-7 gap-2">
                                    <div className="text-base lg:text-lg xl:text-xl font-normal bg-black font-sans py-2 px-4 text-white border-x border-y border-solid border-black flex items-center text-center justify-center">
                                        All Lifestyles
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {
                                            AllLifeStyle.map((item, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleLifeSelect(item)}
                                                    className={`${item.selected ? "bg-black text-white" : "bg-white text-black border-x border-y border-solid border-black"} py-2 px-6 flex items-center justify-center text-center text-base lg:text-lg xl:text-xl`}>
                                                    {item.title}
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-12 items-center justify-between mt-6">
                        <div className="col-span-6 flex flex-col gap-2 w-full">
                            <span className={`text-lg text-black font-bold ${roboto.className}`}>
                                Size(SQ.FT)
                            </span>
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-6 relative">

                                    <InputBox value={minSize} placeholder={"Min Size"} setValue={setMinSize} />
                                </div>
                                <div className="col-span-6 relative">
                                    <InputBox value={maxSize} placeholder={"Max Size"} setValue={setMaxSize} />
                                </div>
                            </div>
                        </div>
                        <button className="col-span-6 bg-black ml-auto mt-8 text-white rounded-full py-3 px-5 font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                            Apply
                        </button>
                    </div>

                </div>
            </ModalComponent>

        </>
    );
}

export default AdvancedFilter;
export const CloseSvg = ({ className }) => {
    return (
        <svg
            className={className}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1={18} y1={6} x2={6} y2={18} /> <line x1={6} y1={6} x2={18} y2={18} />
        </svg>
    )
}