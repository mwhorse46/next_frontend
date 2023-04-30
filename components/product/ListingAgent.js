import Image from "next/image";
import { Text24 } from "../typegraphy";
import ProductTitle from "./Title";
import userPng from "@/public/images/product/user.png";
import phoneSvg from "@/public/images/product/phone.svg";
import whatsappSvg from "@/public/images/product/whatsapp.svg"
const ListingAgent = () => {
    return (
        <section className="bg-black flex flex-col gap-12 px-6 lg:pl-20 lg:pr-14">
            <ProductTitle text="Listing Agent" />
            <div className="flex flex-col xl:flex-row xl:items-center gap-3 lg:gap-10">
                <Image 
                    alt="user" 
                    src={userPng}
                    width={355}
                    height={355}
                    objectFit="cover"
                    className="rounded-3xl xl:rounded-[40px]"
                />
                <div className="flex flex-col gap-3 flex-1">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col gap-2.5">
                            <ProductTitle text="Mark Lister" />
                            <span className="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal text-white text-opacity-60">
                                Languages: English, Russian - RERA License Number : 93740
                            </span>
                        </div>
                        <div className="hidden md:flex items-center gap-5">
                            <button className="rounded-full p-3 xl:p-5 flex items-center justify-center bg-gras-600">
                                <Image alt="phone" src={phoneSvg} />
                            </button>
                            <button className="rounded-full p-3 xl:p-5 flex items-center justify-center bg-gras-600">
                                <Image alt="whatsapp" src={whatsappSvg} width={30} />
                            </button>
                        </div>
                    </div>
                    <span className="hidden md:block text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white font-sans font-normal">
                        Mark is a key member of our Private Client Office, specializing in some of the finest homes available on Palm Jumeirah, among other prime areas of Dubai. He is a true superstar in the field of real estate and has developed a high level of expertise when it comes to high-end properties. He understands the market quite well, keeping an eye on the latest trends and happenings so he can deliver the most well-informed and reliable advisory.
                    </span>
                    <button className="bg-white hidden md:flex items-center justify-center text-center uppercase text-sm lg:text-base xl:text-lg 2xl:text-[21px] font-semibold font-sans text-[#020202] 2xl:h-[74px] py-2 px-3.5 xl:py-3.5 xl:px-7 2xl:py-7 2xl:px-14 w-max lg:mt-5 rounded-3xl">
                        Contact Agent
                    </button>

                </div>
            </div>
            <span className="block md:hidden text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-none text-white font-sans font-normal text-justify">
                Mark is a key member of our Private Client Office, specializing in some of the finest homes available on Palm Jumeirah, among other prime areas of Dubai. He is a true superstar in the field of real estate and has developed a high level of expertise when it comes to high-end properties. He understands the market quite well, keeping an eye on the latest trends and happenings so he can deliver the most well-informed and reliable advisory.
            </span>
            <div className="flex items-center gap-5">
                        <button className="bg-white flex md:hidden items-center justify-center text-center uppercase text-sm lg:text-base xl:text-lg 2xl:text-[21px] font-semibold font-sans text-[#020202] 2xl:h-[74px] py-2 px-3.5 xl:py-3.5 xl:px-7 2xl:py-7 2xl:px-14 w-max lg:mt-10 rounded-3xl">
                            Contact Agent
                        </button>
                        <div className="flex md:hidden items-center gap-5">
                            <button className="rounded-full p-3 xl:p-5 flex items-center justify-center bg-gras-600">
                                <Image 
                                    alt="contact-icon" 
                                    src={phoneSvg}
                                    width={30} 
                                    height={30}
                                 />
                            </button>
                            <button className="rounded-full p-3 flex items-center justify-center bg-gras-600">
                                <Image alt="contact-icon" src={whatsappSvg} width={30} height={30} />
                            </button>
                        </div>
                    </div>
        </section>
    );
}

export default ListingAgent;