import React, { useRef, useState } from "react";
import Slider from "react-slick";
const BlogCarousel = ({data}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "button__bar slick-dots",
        arrows: false,
    };
    return ( 
        <div className="pt-0">
            <Slider {...settings}>
                {
                    data.map((item,index)=>(
                        <div 
                            className="relative" 
                            key={index}
                        >
                            <div 
                                className="bg-cover bg-no-repeat w-full h-[721px]" 
                                style={{backgroundImage:`url('/images/product/01.avif')`}}
                            >
                                <div className="absolute bg-black opacity-60 top-0 left-0 w-full h-full"></div>
                            </div>
                            <div className="absolute z-20 top-1/2 -translate-y-1/2 flex flex-col gap-3 left-6 xl:left-[69px] w-[calc(100%-24px)] xl:w-auto">
                                <span className="font-light font-sans text-white leading-6 text-sm w-[calc(100%-24px)] xl:w-[496px]">
                                About 67% of the approximately 830 UHNWIs identified that are based in the city treat Dubai as their primary residence, while the remaining 33% choose Dubai as a secondary home. 
                                </span>
                                <span className="font-bold font-CormorantGaramond text-white text-4xl leading-[48px] xl:text-[60px] xl:leading-none w-[calc(100%-24px)] md:w-[550px] xl:w-[741px]">
                                    Dubai dominates as top choice
                                    for UHNW primary residents
                                </span>
                                <button className="bg-white flex items-center justify-center text-center text-sm leading-8 text-black font-medium font-sans py-2.5 px-10 rounded-md max-w-max">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
     );
}
 
export default BlogCarousel;