import Image from "next/image";
import Text30 from "../typegraphy/Text30";
import ProductTitle from "./Title";
import { roboto } from "../font/font";
const FeaturesSection = () => {
    return ( 
        <section className="bg-black flex flex-col gap-5 xl:gap-14 2xl:gap-[87px] lg:pl-20 px-6  lg:pr-14 pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
            <ProductTitle text="Features" />
            <div className="grid grid-cols-12 items-start xl:gap-8 2xl:gap-[90px]">
                <div className="col-span-12 xl:col-span-7 2xl:col-span-8 flex items-start justify-between gap-5 xl:gap-6 2xl:gap-24">
                    <div className="flex flex-col gap-7 w-full">
                        <div className="w-full border-b-2 border-solid border-[#e2e2e2] flex pb-7">
                            <Text30 text="Concierge service" />
                        </div>
                        <div className="w-full border-b-2 border-solid border-[#e2e2e2] flex pb-7">
                            <Text30 text="Pool" />
                        </div>
                        <div className="w-full border-b-2 border-solid border-[#e2e2e2] flex pb-7">
                            <Text30 text="Security" />
                        </div>
                            <Text30 text="Maid service" />
                    </div>
                    <div className="flex flex-col gap-7 w-full">
                        <div className="w-full border-b-2 border-solid border-[#e2e2e2] flex pb-7">
                            <Text30 text="Gym" />
                        </div>
                        <div className="w-full border-b-2 border-solid border-[#e2e2e2] flex pb-7">
                            <Text30 text="Equipped kitchen" />
                        </div>
                        <button className="w-max py-3 px-9 text-base lg:text-xl xl:text-xl 2xl:text-2xl leading-none text-white border-x border-y border-solid border-[#f3f3f3]">
                            View all
                        </button>
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-5 2xl:col-span-4 flex items-center gap-8 xl:gap-12 mt-8 xl:mt-0">
                    <Image alt="map" 
                        src="/images/product/location.png" 
                        sizes="10vw"
                        width={160}
                        height={160}
                        className="rounded-3xl 2xl:rounded-[40px]" />
                    <div className="flex flex-col gap-2.5">
                        <ProductTitle text="Location" />
                        <div className="flex flex-col gap-2.5">
                            <span className={`text-base lg:text-xl xl:text-xl 2xl:text-2xl text-white font-normal text-opacity-60 ${roboto.className}`}>
                                Atlantis The Royal Residences
                            </span>
                            <span className={`text-base lg:text-xl xl:text-xl 2xl:text-2xl text-white font-normal font-sans`}>
                            The Crescent Palm Jumeirah
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export default FeaturesSection;