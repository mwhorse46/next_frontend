import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MyListbox } from "../dropdown/DropDownBox";
import MenuItems from "./MenuItem";
import { roboto } from "../font/font";
import { CloseSvg } from "../popup/AdvancedFilter";
import downSvg from "@/public/images/angle-down-solid.svg"
const Navbar = ({
    data,
    item,
    selected,
    setSelected,
    open,
    close,
    previousStep,
    setPreviousStep
}) => {
    let ref = useRef();
    const [childrenItem, setChildrenItem] = useState([]);
    const [animation, setAnimation] = useState(false)
    const handleShowChildren = useCallback((item) => {
        setPreviousStep(prev => prev + 1);
        setAnimation(true)
        setChildrenItem([...item])
    }, [childrenItem]);
    const handlePrevious = useCallback((item) => {
        setAnimation(false)
        setPreviousStep(prev => prev - 1)
        if (previousStep === 2) {
            setChildrenItem(data)
        } else if (previousStep === 3) {
            let data = data.filter((item) => {
                if (item.children?.length > 0) {
                    return item.children
                }
            })
            setChildrenItem(data[0].children)
        }
    }, [childrenItem])
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
            return () => document.body.style.overflow = 'unset';
        }
    }, [open])
    return (
        <>
            {open && <div className="absolute right-0 left-0 top-0 flex xl:hidden flex-col h-screen w-full bg-black z-[1000] overflow-hidden">
                <div className="flex items-center justify-between py-4 px-[30px]">
                    <Link href="/">
                        <span className="text-2xl leading-6 text-white font-bold uppercase font-CormorantGaramond">
                            Delattio
                        </span>
                    </Link>
                    <button onClick={close} className="outline-none">
                        <CloseSvg className={"text-white"} />

                    </button>
                </div>
                <div className={`z-[1000] flex flex-col w-full relative right-0 transition ease-in-out ${animation?" -translate-x-full left-full":"translate-x-0 left-0"}`}>
                    <div className="h-0.5 w-full flex bg-[#1b1b1b]"></div>
                    <div className="flex items-center justify-between px-6 py-6">
                        {previousStep > 1 && <div className="flex items-center gap-2"
                            onClick={() => handlePrevious()}
                        >
                            <Image
                                alt="arrow"
                                src={downSvg}
                                width={8}
                                height={14}
                                className={` rotate-90`} />
                            <span className="text-white text-sm">Back</span>
                        </div>}
                        <div className="ml-auto">
                            <MyListbox
                                value={selected}
                                data={item}
                                setSelected={setSelected}
                                className={`flex items-center gap-2.5 w-[99px] justify-center text-center border-white border-x border-y border-solid rounded-[10px] text-white text-[23px] h-[45px] font-bold ${roboto.className}`} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">

                        <div className="flex flex-col gap-5 w-full pb-10" ref={ref}>
                            <MenuItems
                                item={previousStep > 1 ? childrenItem : data}
                                close={close}
                                handleShowChildren={handleShowChildren}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className={`px-6 w-full flex items-center justify-center absolute bottom-20`}>
                        <button
                            className={`flex items-center justify-center border-white border-x border-y border-solid rounded-[10px] mt-10 text-white text-xl h-[45px] w-full font-normal py-2 px-11 ${roboto.className}`}>
                            {previousStep > 1 ? "View All" : "Sign In"}
                        </button>
                </div>
            </div>}
        </>
    );
}

export default Navbar;

