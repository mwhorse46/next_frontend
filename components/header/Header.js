import data from "@/components/header/Header.item";
import mobileData from "@/components/header/MobileHeader.item"
import Link from "next/link";
import { MyListbox } from "../dropdown/DropDownBox";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Image from "next/image";
import { roboto } from "../font/font";
import { useEffect, useState } from "react";
import menuIcon from "@/public/images/menu.svg";
const Header = () => {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false)
    console.log("menuOpenmenuOpen", menuOpen)
    const item = [
        {
            title: "AED"
        },
        {
            title: "USD"
        },
        {
            title: "EUR"
        }
    ];
    const [selected, setSelected] = useState(item[0]);
    const [previousStep, setPreviousStep] = useState(1);
    const [bg,setBg] = useState("transparent")
    const listenScrollEvent =()=>{
        if(window.scrollY >300){
            setBg("black")
        } else{
            setBg("transparent")
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',listenScrollEvent)
    },[]);
    const handleClose =()=>{
        setMenuOpen(false);
        setPreviousStep(1)
    }
    let classname = router.pathname === "/product" ?`bg-${bg}`:'bg-black'
    return (
        <header className={`flex items-center justify-between py-4 px-[30px] w-full z-1000 ${classname}`} style={{ backgroundColor: 'black !important' }}>
            <Link href="/">
                <span className="text-2xl leading-6 text-white font-bold uppercase font-CormorantGaramond">
                    Delattio
                </span>
            </Link>
            <div className="hidden xl:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
                {
                    data.map((item, index) => (
                        <div className="flex flex-col relative" key={index}>
                            <Link
                                href={item.path}
                                className={`text-xl font-normal text-white text-opacity-[0.741] ${roboto.className}`}
                                key={index}
                            >
                                {item.label}
                            </Link>
                            {router.pathname === item.path && <span className="h-0.5 w-full flex bg-[#f3f3f3] absolute bottom-0"></span>}
                        </div>
                    ))
                }
            </div>
            <div className="hidden xl:flex items-center gap-[30px]">
                <MyListbox
                    value={selected}
                    data={item}
                    setSelected={setSelected}
                    className={`flex items-center gap-2.5 px-3 justify-center text-center border-white border-x border-y border-solid rounded-[10px] text-white text-xl h-11 font-bold ${roboto.className}`} />
                <button
                    className={`flex items-center justify-center border-white border-x border-y border-solid rounded-[10px] text-white text-xl h-11 font-normal py-2 px-6 ${roboto.className}`}>
                    Sign In
                </button>
            </div>
            <button 
                onClick={()=>setMenuOpen(!menuOpen)}
                className="flex xl:hidden items-center justify-center border-none outline-none">
                <Image alt="menu" src={menuIcon} width={30} height={30} />
            </button>
            <Navbar 
                data={mobileData} 
                selected={selected} 
                setSelected={setSelected}
                item={item}
                open={menuOpen}
                previousStep={previousStep}
                setPreviousStep={setPreviousStep}
                close={()=>handleClose()}
            />
        </header>
    );
}

export default Header;