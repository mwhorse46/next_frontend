import BorderBottom from "../border/BorderBottom";
import DCarousel from "../carousel/3dCarousel";
import { Text36 } from "../typegraphy";

const FeaturedVilla = () => {
    const data =[
        {
            id:1,
            img:"/images/villa/01.png"
        },
        {
            id:2,
            img:"/images/villa/01.png"
        },
        {
            id:3,
            img:"/images/villa/01.png"
        },
        {
            id:4,
            img:"/images/villa/01.png"
        }
    ]
    return ( 
        <div className="flex flex-col gap-[58px] pb-[50px] px-6 lg:px-0">
            <div className="px-6 lg:px-[70px]">
                <Text36 color="white" text="Featured Villas" weight="400" />
            </div>
            <div className="block">
                <DCarousel data={data} title="villa" />   
            </div>
            <BorderBottom color="gray-900" />
        </div>
     );
}
 
export default FeaturedVilla;