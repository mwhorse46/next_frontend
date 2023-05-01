import React,{useRef,useState} from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

const SimilarCarousel = ({data, title}) => {
    const [current, setCurrent] = useState(0);
    const slider = useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay: false,
        dotsClass: "similar__bar slick-dots",
        responsive:[
            {
                breakpoint: 1920,
                settings: {
                 slidesToShow: 3,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                 slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                 slidesToShow: 2,
                }
            },
            {
                breakpoint:768,
                settings: {
                 slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                 slidesToShow: 1,
                }
            }
        ],
        beforeChange:(prevIndex, newIndex)=>{
            setCurrent(newIndex)
        },
       
      };

    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: false,
        responsive:[
            {
                breakpoint: 1920,
                settings: {
                 slidesToShow: 3,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                 slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                 slidesToShow: 2,
                }
            },
            {
                breakpoint:768,
                settings: {
                 slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1.1,
                }
            }
        ],
        beforeChange:(prevIndex, newIndex)=>{
            setCurrent(newIndex)
        },
       
      };

    return ( 
        <div className="block">
            <Slider {... title==='similarProperty' ? settings : settings1 } ref={slider} className={(title === 'ourJournal' || title === 'offPlan') && 'ourJournal'}>
                {
                    data.map((item,index)=>(
                        <Box px={ title === 'similarProperty' ? 7 : 2 } key={index} sx={{
                            position: 'relative'
                        }}>
                            {
                                title === 'similarProperty' &&
                                <Box component={'img'} 
                                    alt="property"
                                    src={"/images/product/02.avif"} 
                                />
                            }
                            <Box component={'img'} 
                                alt="property" 
                                src={item.img} 
                                sx={{
                                    width: '100%',
                                    height: '420px',
                                    opacity: 0.7,
                                }}
                            />
                             {
                                title === 'similarProperty' &&
                                    <div className="absolute bottom-7 right-10 flex flex-col">
                                        <span className="font-sans font-medium text-white text-lg uppercase">
                                            Downtown Dubai Penthouse
                                        </span>
                                        <span className="font-sans font-medium text-white text-sm text-opacity-70 leading-[10px] uppercase">
                                            Downtown Dubai Penthouse
                                        </span>
                                    </div>
                             }
                              {
                                title === 'offPlan' &&
                                    <Typography variant="h4" sx={{
                                        maxWidth: '80%',
                                        position: 'absolute',
                                        left: '40px',
                                        fontSize: 18,
                                        fontWeight: 600,
                                        bottom: { xs: '30px', sm: 'initial'},
                                        textAlign: { sm: 'center', xs: 'left' },
                                        fontFamily: 'Cormorant Garamond',
                                    }}>
                                        {item.text}
                                    </Typography>
                                }
                                {title === 'ourJournal' &&
                                    <Box mt={6} mx={2}>
                                        <Typography variant='h4' sx={{
                                            fontFamily: 'Cormorant Garamond',
                                            fontSize: 20,
                                            fontWeight: 600,
                                        }}>{item.title}</Typography>
                                        <Typography variant='h6' my={2} sx={{ 
                                            fontFamily: 'Cormorant Garamond',
                                            fontSize: 20,
                                            fontWeight: 300,
                                            lineHeight: 1.3,
                                        }}>{item.details}</Typography>
                                        <Typography variant='h4' mt={4} sx={{ 
                                            fontSize: 12,
                                        }}>{item.portfolio}</Typography>  
                                        <Typography variant='h6' sx={{ fontSize: 12 }}>{item.date}</Typography>
                                    </Box>
                                }
                        </Box>
                    ))
                }
            </Slider>
        </div>
     );
}
 
export default SimilarCarousel;