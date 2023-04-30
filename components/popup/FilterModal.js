import Image from "next/image";
import ModalComponent from "./Modal";
import InputFilterBox from "../card/InputFilterBox";
import { useState } from "react";
import MultipleSelect from "./MultipleSelect";
import MultipleSelectOption from "./MultipleSelectOption"
import OneSelect from "./OneSelect";
const FilterModal = ({ isOpen, close }) => {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minSize, setMinSize] = useState("");
    const [maxSize, setMaxSize] = useState("");
    const [show, setShow] = useState(false);
    const [showFeature, setShowFeature] = useState(false);
    const [showLife, setShowLife] = useState(false);
    const [showSize, setShowSize] = useState(false);
    const property = [
        {
            selected: false,
            label: "Villa"
        },
        {
            selected: false,
            label: "Apartments"
        },

        {
            selected: false,
            label: "Penthouse"
        },
        {
            selected: false,
            label: "Town house"
        },
        {
            selected: false,
            label: "Plot"
        },
        {
            selected: false,
            label: "Loft & Duplex"
        },
        {
            selected: false,
            label: "Office"
        },
    ]
    const feature = [
        {
            id: 1,
            label: "Balcony",
            selected: false
        },
        {
            id: 2,
            label: "Pool",
            selected: false
        },
        {
            id: 3,
            label: "Built-in wardrobes",
            selected: false
        },
        {
            id: 4,
            label: "Gym",
            selected: false
        },
        {
            id: 5,
            label: "Equipped kitchen",
            selected: false
        },
        {
            id: 6,
            label: "Walk-in closet",
            selected: false
        },
        {
            id: 7,
            label: "Spa",
            selected: false
        },
        {
            id: 8,
            label: "Covered Parking",
            selected: false
        },
        {
            id: 9,
            label: "Study room",
            selected: false
        },
        {
            id: 10,
            label: "Private pool",
            selected: false
        },
        {
            id: 11,
            label: "Garden",
            selected: false
        },
        {
            id: 12,
            label: "Security",
            selected: false
        },
        {
            id: 13,
            label: "Concierge",
            selected: false
        },
        {
            id: 14,
            label: "Maid service",
            selected: false
        },
        {
            id: 15,
            label: "Jacuzzi",
            selected: false
        },
    ]
    const allLifestyle = [
        {
            id: 1,
            label: "Beachfront",
            selected: false
        },
        {
            id: 2,
            label: "Downtown Living",
            selected: false
        },
        {
            id: 3,
            label: "Golf Estates",
            selected: false
        },
        {
            id: 4,
            label: "Luxury Penthouses",
            selected: false
        },
        {
            id: 5,
            label: "Waterfront Properties",
            selected: false
        },

        {
            id: 6,
            label: "Residential communities",
            selected: false
        }
    ]
    const sizes = [
        {
            id: 2,
            label: "1 +",
            selected: false

        },
        {
            id: 3,
            label: "2 +",
            selected: false

        },
        {
            id: 4,
            label: "3 +",
            selected: false

        },
        {
            id: 5,
            label: "4 +",
            selected: false

        },
        {
            id: 6,
            label: "5 +",
            selected: false

        },
        {
            id: 7,
            label: "6 +",
            selected: false

        },
        {
            id: 8,
            label: "7 +",
            selected: false

        }
    ]
    const [propertyData, setPropertyData] = useState(property[0]);
    const [filterData, setFilterData] = useState(feature)
    const [lifeData, setLifeData] = useState(allLifestyle[0]);
    const [sizeData, setSizeData] = useState(sizes[0]);
    const handleReset =()=>{
        setPropertyData(property[0])
        setFilterData(feature)
        setLifeData(allLifestyle[0])
        setSizeData(sizes[0])

    }
    const className="flex flex-col gap-2 py-5 px-4 border-t-[1px] border-top border-[#c4c4c4]"
    return (
        <ModalComponent
            isOpen={isOpen}
            closeModal={close}
            className="bg-white py-7 rounded-[10px] w-full"
            wrapperClass={"fixed bottom-0 overflow-y-auto w-full flex xl:hidden"}
        >
            {!show && !showFeature && !showSize && !showLife && <div>
                <div className="w-full flex items-center justify-between px-5">
                    <Image
                        alt="back-icon"
                        src="/images/arrow-left.svg"
                        width={14}
                        height={14}
                        onClick={close}
                    />
                    <GeneralTitle weight="normal" title="Filters" color="black" />
                    <button 
                        onClick={handleReset}
                        className="text-sm leading-6 text-black font-bold font-sans outline-none uppercase">
                        reset
                    </button>
                </div>
                <div className="flex flex-col pt-5">
                    <OneSelect
                        data={propertyData}
                        title="Property"
                        setShow={setShow}
                    />
                    <OneSelect
                        data={lifeData}
                        title="Lifestyles"
                        setShow={setShowLife}
                    />
                    <MultipleSelect
                        data={filterData}
                        title="Features"
                        setShow={setShowFeature}
                    />
                    <div className={className}>
                        <GeneralTitle title="Location" weight="semibold" color="black" />
                        <InputFilterBox 
                            value={minSize}
                            setValue={setMinSize} 
                            placeholder={"Palm Jumeirah, Emirates Hills"}
                            type="text"
                             />

                    </div>
                    <div className={className}>
                        <GeneralTitle title="Price (AED)" weight="semibold" />
                        <div className="flex items-center justify-between gap-5 w-full">
                            <InputFilterBox 
                                value={minPrice} 
                                setValue={setMinPrice} 
                                placeholder={"MIN"} 
                                type="number" />
                            <InputFilterBox 
                                value={maxPrice} 
                                setValue={setMaxPrice} 
                                placeholder={"MAX"} 
                                type="number" />
                        </div>
                    </div>
                    <div className={className}>
                        <GeneralTitle title="Size (SQ.FT)" weight="semibold" />
                        <div className="flex items-center justify-between gap-5 w-full">
                            <InputFilterBox 
                                value={minSize} 
                                setValue={setMinSize} 
                                placeholder={"MIN"} 
                                type="number" />
                            <InputFilterBox 
                                value={maxSize} 
                                setValue={setMaxSize} 
                                placeholder={"MAX"} 
                                type="number"/>
                        </div>
                    </div>
                    <OneSelect
                        data={sizeData}
                        title="Bedrooms"
                        setShow={setShowSize}
                    />
                    <div></div>
                    <button className="flex items-center justify-center py-2 mx-5 mt-4 text-sm leading-8 font-medium font-sans text-white bg-black rounded-md ">
                        Show 43,082 results
                    </button>
                </div>
            </div>}
            {show && <MultipleSelectOption
                data={property}
                setData={setPropertyData}
                setShow={setShow}
                selected={propertyData}
                title="propery"
            />}
            {showFeature && <MultipleSelectOption
                data={filterData}
                setData={setFilterData}
                setShow={setShowFeature}
                selected={filterData}
                title="feature"
            />}
             {showLife && <MultipleSelectOption
                data={allLifestyle}
                setData={setLifeData}
                setShow={setShowLife}
                selected={lifeData}
                title="lifeStyle"
            />}
            {showSize && <MultipleSelectOption
                data={sizes}
                setData={setSizeData}
                setShow={setShowSize}
                selected={sizeData}
                title="size"
            />}
        </ModalComponent>
    );
}

export const GeneralTitle = ({ color, title, weight }) => {
    return (
        <span className={`text-sm leading-6 text-${color} font-${weight} font-sans`}>
            {title}
        </span>
    )
}
export default FilterModal;
