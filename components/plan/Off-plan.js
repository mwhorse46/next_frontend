import BorderBottom from "../border/BorderBottom";
import ImageCard from "../card/ImageCard";
import { Text36 } from "../typegraphy";

const OffPlan = () => {
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
        <div className="flex flex-col items-center justify-center md:items-start gap-[30px] px-6 md:px-[70px] py-14">
            <Text36 
                color="white"
                text="Off-plan Properties"
                weight="400"
            />
            <ImageCard data={data} section="plan" />
            <div className="mt-5 bg-gray-900 w-full">
                <BorderBottom color="gray-900" />
            </div>

        </div>
     );
}
 
export default OffPlan;