import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react';
import downSvg from "@/public/images/angle-down-solid.svg"
import Image from 'next/image';
const CustomDropDown = ({ color,font, title, data }) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className={'flex items-center gap-1'}>
                    <span className={`text-base font-normal text-${color} ${font.className}`}>{title}</span>
                    <Image alt="arrow" src={downSvg} />
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
                <Menu.Items className="absolute mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-6 py-1">
                        {
                            data.map((item, index) => (
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >

                                            {item.title}
                                        </button>
                                    )}
                                </Menu.Item>
                            ))
                        }

                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
    );
}

export default CustomDropDown;