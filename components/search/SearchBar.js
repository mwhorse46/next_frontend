import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Text14, Text16 } from '../typegraphy';
import CustomDropDown from '../dropdown/Dropdown';
import { roboto } from '../font/font';
const SearchBar = () => {
    const apartData =[
        {
            id:1,
            title:"something"
        },
        {
            id:2,
            title:"something"
        }
    ]
    return (
        <div className="absolute -bottom-8 bg-white rounded-full h-[70px] lg:w-[928px] z-50">
            <div className='flex items-center justify-between pr-5 pl-9 h-full py-4 relative'>
                <div className='flex flex-col items-start gap-1'>
                    <Text14
                        color="gray-800"
                        text="Location"
                        position=""
                        weight={'400'}
                    />
                    <CustomDropDown 
                        color="black"
                        font={roboto} 
                        title="Area, development..." 
                        data={apartData}
                    />

                </div>
                <div className='flex items-center gap-5'>
                    <Menu as="div" className="inline-block text-left">
                        <div>
                            <Menu.Button>
                                <Text14
                                    color="black"
                                    text="Filters"
                                    position=""
                                    weight={'500'}
                                />
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
                            <Menu.Items className="absolute mt-7 left-4 w-[900px]  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="px-1 py-1 ">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                            className={`${active ? 'text-gray-900' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >

                                                Edit
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${active ? 'text-gray-900' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            >

                                                Duplicate
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                                
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    <div className='bg-black flex items-center justify-center rounded-full h-12 w-12'>
                        <SearchIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;

export function SearchIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height="15.003"
            viewBox="771.5 38.499 15 15.003"
        >
            <path
                d="M783.688 44.593a6.08 6.08 0 0 1-1.172 3.594l3.71 3.713a.939.939 0 0 1-1.328 1.327l-3.709-3.712a6.06 6.06 0 0 1-3.595 1.172 6.093 6.093 0 0 1-6.094-6.094 6.093 6.093 0 0 1 6.094-6.094 6.093 6.093 0 0 1 6.094 6.094Zm-6.094 4.219a4.219 4.219 0 1 0 0-8.438 4.219 4.219 0 0 0 0 8.438Z"
                fill="#fff"
                fillRule="evenodd"
            />
        </svg>

    )
}
