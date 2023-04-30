import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image';
import downSvg from "@/public/images/angle-down-solid.svg"

import { roboto } from '../font/font';
export function MyListbox({data, value,className,setSelected}) {

  return (
    <div className='relative'>
      <Listbox value={value} onChange={setSelected}>
        <div className={className}>
          <Listbox.Button className="text-white">{value.title}</Listbox.Button>
          <Image alt="arrow" src={downSvg} width={20} height={20} />
        </div>
        
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
            {data.map((person,index) => (
              <Listbox.Option
                key={index}
                value={person}
                disabled={person.unavailable}
                className={`px-3 cursor-pointer text-lg ${roboto.className}`}
              >
                {person.title}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>

      </Listbox>
    </div>

  )
}