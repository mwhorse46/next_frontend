import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useContext, useState } from 'react'
import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import StayBiling from "@/components/staybil/StaylBiling";
import Pagination, { paginate } from "@/components/pagination/index";
import { SearchIcon } from "@/components/search/SearchBar";
import Image from "next/image";
import { StateContext } from "@/contexts/StateContext";
import downSvg from "@/public/images/angle-down-solid.svg"
import sortbyIcon from "@/public/images/sortby.svg"
import filterIcon from "@/public/images/filter.svg"
import AdvancedFilter from "../../components/popup/AdvancedFilter";
import SortByModal from "@/components/popup/SortByModal";
import FilterModal from "@/components/popup/FilterModal";
import PriceModal from "@/components/popup/PriceModal";
import PropertyModal from "@/components/popup/PropertyModal"
const SearchPage = () => {
    const { dispatch, state } = useContext(StateContext)
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const onPageChange = (page) => {
        setCurrentPage(page);
    };
    const data = [
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/01.avif"
                },
                {
                    id: 2,
                    img: "/images/search/01.avif"
                },
                {
                    id: 3,
                    img: "/images/search/01.avif"
                },
                {
                    id: 4,
                    img: "/images/search/01.avif"
                },
                {
                    id: 5,
                    img: "/images/search/01.avif"
                },
                {
                    id: 6,
                    img: "/images/search/01.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/02.avif"
                },
                {
                    id: 2,
                    img: "/images/search/02.avif"
                },
                {
                    id: 3,
                    img: "/images/search/02.avif"
                },
                {
                    id: 3,
                    img: "/images/search/02.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/03.avif"
                },
                {
                    id: 2,
                    img: "/images/search/03.avif"
                },
                {
                    id: 3,
                    img: "/images/search/03.avif"
                },
                {
                    id: 3,
                    img: "/images/search/03.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/04.avif"
                },
                {
                    id: 2,
                    img: "/images/search/04.avif"
                },
                {
                    id: 3,
                    img: "/images/search/04.avif"
                },
                {
                    id: 3,
                    img: "/images/search/04.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/05.avif"
                },
                {
                    id: 2,
                    img: "/images/search/05.avif"
                },
                {
                    id: 3,
                    img: "/images/search/05.avif"
                },
                {
                    id: 3,
                    img: "/images/search/05.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/06.avif"
                },
                {
                    id: 2,
                    img: "/images/search/06.avif"
                },
                {
                    id: 3,
                    img: "/images/search/06.avif"
                },
                {
                    id: 3,
                    img: "/images/search/06.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/01.avif"
                },
                {
                    id: 2,
                    img: "/images/search/01.avif"
                },
                {
                    id: 3,
                    img: "/images/search/01.avif"
                },
                {
                    id: 3,
                    img: "/images/search/01.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/02.avif"
                },
                {
                    id: 2,
                    img: "/images/search/02.avif"
                },
                {
                    id: 3,
                    img: "/images/search/02.avif"
                },
                {
                    id: 3,
                    img: "/images/search/02.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/03.avif"
                },
                {
                    id: 2,
                    img: "/images/search/03.avif"
                },
                {
                    id: 3,
                    img: "/images/search/03.avif"
                },
                {
                    id: 3,
                    img: "/images/search/03.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/04.avif"
                },
                {
                    id: 2,
                    img: "/images/search/04.avif"
                },
                {
                    id: 3,
                    img: "/images/search/04.avif"
                },
                {
                    id: 3,
                    img: "/images/search/04.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/05.avif"
                },
                {
                    id: 2,
                    img: "/images/search/05.avif"
                },
                {
                    id: 3,
                    img: "/images/search/05.avif"
                },
                {
                    id: 3,
                    img: "/images/search/05.avif"
                }
            ]
        },
        {
            data: [
                {
                    id: 1,
                    img: "/images/search/06.avif"
                },
                {
                    id: 2,
                    img: "/images/search/06.avif"
                },
                {
                    id: 3,
                    img: "/images/search/06.avif"
                },
                {
                    id: 3,
                    img: "/images/search/06.avif"
                }
            ]
        },
    ];
    const propertyData = [
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
    const [selectedProperty, setSelectedProperty] = useState("All");
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
            label: "Most Viewed",
            selected: false
        },
        {
            label: "Most Popular",
            selected: false
        },
    ]
    const [sort, setSort] = useState("Recommended");
    const paginatedPosts = paginate(data, currentPage, pageSize);
    const handleAdvancedFilter = () => {
        dispatch({
            type: 'ShowAdvancedModal',
        })
    }
    const handleSortBy = () => {
        dispatch({
            type: 'ShowSortModal',
        })
    }
    const handleFilter = () => {
        dispatch({
            type: 'ShowFilterModal',
        })
    }
    const handleSortDeskBy = () => {
        dispatch({
            type: 'ShowSortPcModal',
        })
    }
    const close = () => {
        dispatch({
            type: 'HideAdvancedModal',
        })
    }
    const closeSort = () => {
        dispatch({
            type: 'HideSortModal',
        })
    }
    const closeFilter = () => {
        dispatch({
            type: 'HideFilterModal',
        })
    }
    const closeSize = () => {
        dispatch({
            type: 'HideSortPcModal',
        })
    }
    return (
        <div>
            <div className="bg-black h-full pt-16 xl:pt-32 relative">
                <div className="xl:grid xl:grid-cols-12 px-6 xl:px-40 w-full mb-5 xl:mb-12">
                    <div className="col-span-12 lg:col-span-7 hidden xl:flex flex-col gap-4 2xl:gap-24 lg:flex-row lg:items-center w-full">
                        <div className="flex items-center gap-12">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="cursor-pointer flex items-center gap-2.5 outline-none">
                                        <span className="text-base text-[#7a7c83] font-myraidPro tracking-[5px] uppercase">Property</span>
                                        <Image alt="arrow" src={downSvg} width={13} height={10} />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute bg-gray-200 w-[197px] z-50 py-6 px-5 top-8 -left-12 outline-none">
                                        <div className=''>
                                            <Menu.Item>
                                                <PropertyModal 
                                                    data={propertyData} 
                                                    sort={selectedProperty} 
                                                    setSort={setSelectedProperty} />
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>

                                </Transition>
                            </Menu>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="cursor-pointer flex items-center gap-2.5 outline-none">
                                        <span className="text-base text-[#7a7c83] font-myraidPro tracking-[5px] uppercase">PRICE</span>
                                        <Image alt="arrow" src={downSvg} width={13} height={10} />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute bg-gray-200 w-[325px] z-50 py-6 px-5 top-8 -left-32 outline-none">
                                        <div className=''>
                                            <Menu.Item>
                                                <PriceModal />
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>

                                </Transition>
                            </Menu>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="cursor-pointer flex items-center gap-2.5 outline-none">
                                        <span className="text-base text-[#7a7c83] font-myraidPro tracking-[5px] uppercase">sort by</span>
                                        <Image alt="arrow" src={downSvg} width={13} height={10} />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute bg-gray-200 w-[325px] z-50 py-6 px-5 top-8 -left-32 outline-none">
                                        <div className=''>
                                            <Menu.Item>
                                            <PropertyModal 
                                                    data={sortData} 
                                                    sort={sort} 
                                                    setSort={setSort} />
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>

                                </Transition>
                            </Menu>
                        </div>
                        <div
                            onClick={() => handleAdvancedFilter()}
                            className="cursor-pointer font-myraidPro flex items-center justify-center tracking-[5px] text-base text-[#7a7c83] uppercase px-4 py-3 border-x border-y border-solid border-white">
                            ADVANCED FILTERS
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 flex flex-end lg:ml-auto mt-3 lg:mt-0 w-full xl:w-auto">
                        <div className="flex items-center border-x border-y border-solid border-[#4a4b4d] bg-[#0d0e11] py-3 px-5 w-full xl:min-w-[334px] min-w-full">
                            <input
                                className="bg-transparent text-xs text-white tracking-[5px] uppercase font-myraidPro outline-none border-none w-full"
                                type="text"
                                placeholder="the crescent, atlantis"

                            />
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 xl:hidden w-full px-6">
                    <button
                        onClick={handleSortBy}
                        className="w-full py-3 gap-4 border-x border-y border-solid border-[#7a7c83] bg-black flex items-center justify-center">
                        <Image alt="sortby" src={sortbyIcon} width={10} height={8} />
                        <span className="text-xs tracking-[5px] text-[#7a7c83] uppercase font-myraidPro">
                            sort by
                        </span>
                    </button>
                    <button
                        onClick={handleFilter}
                        className="w-full py-2 gap-4 border-x border-y border-solid border-[#7a7c83] bg-black flex items-center justify-center">
                        <Image alt="sortby" src={filterIcon} width={10} height={8} />
                        <span className="text-xs leading-6 tracking-[5px] text-[#7a7c83] uppercase font-myraidPro">
                            filter
                        </span>
                    </button>
                </div>
                <div className="grid grid-cols-12 lg:gap-10 px-6 lg:px-40 w-full">
                    {
                        paginatedPosts.map((item, index) => (
                            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 mt-10 sm:mt-7" key={index}>
                                <Carousel data={item.data} title="Search" />
                                <span className="text-white uppercase text-lg font-bold font-CormorantGaramond">
                                    Downtown Dubai Penthouse
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] text-white font-bold leading-6 font-sans">
                                        PENTHOUSE
                                    </span>
                                    <span className="bg-white h-0.5 w-1 flex"></span>
                                    <span className="text-[11px] text-white font-bold leading-6 font-sans">
                                        3 BEDS
                                    </span>
                                    <span className="bg-white h-0.5 w-1 flex"></span>
                                    <span className="text-[11px] text-white font-bold leading-6 font-sans">
                                        13,000 SQ.FT
                                    </span>

                                </div>
                                <span className="font-sans font-light text-white text-base">
                                    Luxhabitat Sotheby’s International Realty is pleased to present this modern 6-bedroom villa in Emirates Hills. This independently situated villa is a spacious and contemporary
                                </span>
                                <div className="flex items-center gap-2.5">
                                    <span className="text-white uppercase text-[22px] leading-8 font-bold font-CormorantGaramond">
                                        aed
                                    </span>
                                    <span className="text-white uppercase text-[26px] leading-8 translate-x-0.5 font-bold font-CormorantGaramond">
                                        144.220,00
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Pagination
                    items={data.length}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChange={onPageChange}
                    title="search"
                />
                <div className="px-0 lg:px-16">
                    <StayBiling />
                    <Footer />
                </div>
            </div>
            <AdvancedFilter
                isOpen={state?.isOpen}
                close={close}
            />
            <SortByModal
                isOpen={state?.isSortOpen}
                close={closeSort} />
            <FilterModal
                isOpen={state?.isFilterOpen}
                close={closeFilter} />

        </div>
    );
}

export default SearchPage;