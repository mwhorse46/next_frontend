import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { roboto } from "../font/font";

const Carousel = ({ data, title }) => {
  const mainSliderRef = useRef();
  const thumbnailSliderRef = useRef();
  const [centerIndex, setCenterIndex] = useState(0);
  const [nextId, setNextId] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar slick-dots",
    arrows: false,
    beforeChange: (current, next) => {
      setNextId(nextId + 1);
      thumbnailSliderRef.current.slickGoTo(nextId);
    },
    appendDots: (dots) => {
      return (
        <div>
          <ul>{dots.slice(0, 3)}</ul>
        </div>
      );
    },
  };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    dotsClass: "button__bar slick-dots",
    arrows: true,
    beforeChange: (current, next) => {
      setNextId(nextId + 1);
      thumbnailSliderRef.current.slickGoTo(nextId);
    },
    appendDots: (dots) => {
      return (
        <div>
          <ul>{dots.slice(0, 3)}</ul>
        </div>
      );
    },
  };

  const feSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    className: "center",
    arrows: false,
    beforeChange: (current, next) => {
      setCenterIndex(next);
    },
  };

  const getScaleFactor = (index, centerIndex, totalItems) => {
    const distanceFromCenter = Math.min(
      Math.abs(centerIndex - index),
      totalItems - Math.abs(centerIndex - index)
    );
    const scaleFactor = 1 - distanceFromCenter * 0.2;
    return Math.max(scaleFactor, 0.5);
  };

  const getItemStyle = (index, centerIndex, totalItems) => {
    const scaleFactor = getScaleFactor(index, centerIndex, totalItems);
    return {
      transform: `scale(${scaleFactor})`,
    };
  };

  return (
    <div className="relative text-align-center">
      <Slider {... title==="arrayCarousel" ? settings1 : settings } ref={mainSliderRef}>
        {data.map((item, index) => (
          <div className="relative" key={index}>
            {title === "banner" && (
              <div className="flex flex-col items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
                <span
                  className={`text-sm text-white font-normal ${roboto.className}`}
                >
                  New Development
                </span>
                <span
                  className={`text-5xl text-center text-white font-normal ${roboto.className}`}
                >
                  Baccarat Residences
                </span>
                <span
                  className={`text-sm text-white font-normal ${roboto.className}`}
                >
                  Downtown Dubai
                </span>
                <button
                  className={`bg-white flex items-center justify-center text-center py-[18px] px-[52px] rounded-[10px] text-base font-normal ${roboto.className}`}
                >
                  Inquire Now
                </button>
              </div>
            )}
            {title === "feature" && (
              <button className="absolute bg-black py-2 px-5 text-base text-center text-white top-5 left-5">
                {item.title}
              </button>
            )}
            <img
              alt="banner"
              src={item.img}
              className={`object-cover w-full ${
                title === "header" ?
                  "h-[500px] lg:h-[800px] md:h-[670px] sm:h-[550px]"
                  :title === "banner"
                    ? "h-[1113px]"
                    : title === "Search"
                    ? "h-[434px] 2xl:h-[630px]"
                    : "h-auto"
                }`}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute text-white bottom-4 w-20 sm:w-24 left-1/2 right-1/2 ml-[-48px]">
        <Slider {...feSettings} ref={thumbnailSliderRef}>
          {new Array(100).fill().map((item, idx) => (
            <div key={idx}>
              <span 
              className={`bg-white w-2 h-2 sm:w-2.5 sm:h-2.5 flex items-center justify-center rounded-full`}
              style={getItemStyle(idx, centerIndex, 100)}>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
