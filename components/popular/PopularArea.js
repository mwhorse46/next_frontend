import Image from "next/image";
import { Text16, Text24, Text36 } from "../typegraphy";
import BorderBottom from "../border/BorderBottom";
import ImageCard from "../card/ImageCard";

const PopularArea = () => {
    const data =[
        {
            img:"/images/popular/01.png",
            title:"Business B",
            more:"Learn More"
        },
        {
            img:"/images/popular/01.png",
            title:"Seaside Hil",
            more:"Learn More"
        },
        {
            img:"/images/popular/01.png",
            title:"AVA at Plam Jumeir",
            more:"Learn More"
        }
    ]
    return ( 
        <div className="flex flex-col gap-7 pt-9 pb-[50px] px-6 lg:px-[70px]">
            <Text36 text="Popular Areas" color="white" />
            <ImageCard data={data} section="popular" />
            <BorderBottom color="gray-900" />
        </div>
     );
}
 
export default PopularArea;