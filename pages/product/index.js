import Description from "@/components/product/Description";
import FeaturesSection from "@/components/product/Features"
import ListingAgent from "@/components/product/ListingAgent"
import StayBiling from "@/components/staybil/StaylBiling";
import SimilarProperty from "@/components/product/SimilarProperty";
import BorderBottom from "@/components/border/BorderBottom";
const ProductPage = () => {
    return (
        <div className="relative bg-black pb-20">
            <section>
                <div className="flex flex-col gap-7 items-start justify-center lg:px-[89px] w-full  md:h-screen banner relative">
                    <div className="w-full 2xl:w-1/2 flex flex-col items-center justify-center lg:items-start gap-7 pt-28 pb-48">
                        <span className="font-semibold text-3xl md:text-5xl lg:text-[95px] lg:leading-none text-white uppercase relative text-center lg:text-left">
                            Downtown Dubai Penthouse
                        </span>
                        <span className="font-semibold text-lg lg:text-3xl text-left uppercase relative text-white">
                            Exclusive . Ready . Emirates Hills
                        </span>
                        <div className="flex items-center gap-3 lg:gap-10 mt-5 relative">
                            <button className="bg-white font-semibold rounded-3xl py-4 px-8 lg:py-[26px] lg:px-[68px] uppercase text-sm lg:text-[21px] text-[#020202]">
                                show more
                            </button>
                            <button className="bg-transparent border-[3.15px] border-solid border-white font-semibold rounded-3xl py-3 px-8 lg:py-5 lg:px-11 uppercase text-sm lg:text-[21px] text-white video-tour relative">
                                Video tour
                            </button>
                        </div>
                    </div>

                    <div className="absolute -bottom-7 lg:-bottom-8 flex items-center justify-between left-1/2 -translate-x-1/2 lg:right-0 lg:left-auto lg:-translate-x-0 bg-black rounded-[40px] lg:rounded-r-none  lg:rounded-l-[40px] pt-4 pb-10 px-5 lg:pt-7 lg:pb-16 lg:pr-14 lg:pl-[69px] w-5/6 lg:w-[743px]">
                        <div className="flex flex-col gap-2 lg:gap-2.5">
                            <span className="font-semibold text-xl md:text-2xl lg:text-[45px] text-white">
                                AED 2,600,000
                            </span>
                            <span className="font-semibold text-[10px] sm:text-sm lg:text-2xl text-white">
                                6 beds 6 baths 13,000 sq. ft
                            </span>
                        </div>
                        <button className="bg-white font-semibold text-sm lg:text-base text-[#020202] py-2 px-3 lg:px-10 lg:py-4 rounded-3xl uppercase">
                            Book a viewing
                        </button>
                    </div>
                </div>
            </section>
            <Description />
            <FeaturesSection />
            <ListingAgent />
            <SimilarProperty />
            <div className="w-full flex py-20 px-16">
                <BorderBottom color="gray-900" />
            </div>
            <StayBiling />
        </div>
    );
}

export default ProductPage;