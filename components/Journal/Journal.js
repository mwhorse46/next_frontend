import BorderBottom from "../border/BorderBottom";
import DCarousel from "../carousel/3dCarousel";
import { Text14, Text16, Text36 } from "../typegraphy";

const Journal = () => {
    const data =[
        {
            id:1,
            img:"/images/jour/01.png"
        },
        {
            id:2,
            img:"/images/jour/01.png"
        },
        {
            id:3,
            img:"/images/jour/01.png"
        },
        {
            id:4,
            img:"/images/jour/01.png"
        }
    ]
    return ( 
        <div className="flex flex-col items-center justify-center gap-14 px-6 md:px-[70px] w-full">
            <div className="text-center border-b-[1px] border-solid border-white h-7">
                <Text36 text="From The Journal" color="white" weight="400" />
            </div>
            <div className="grid grid-cols-12 items-center md:gap-14">
                <div className="block col-span-12 items-center justify-center lg:col-span-6">
                    <DCarousel data={data} title="journal" />
                </div>
                <div className="col-span-12 lg:col-span-6 mt-10 md:mt-0">
                    <div className="flex flex-col items-center justify-center md:items-start gap-5">
                        <Text36 text="Dubai is yours" color="white" weight="400" />
                        <Text16 
                            color="white" 
                            weight="400" 
                            text="This city is a global socio-economic mainstay, The core strength of Dubai are the people, places, and experiences we come to share. These cornerstones of society come together to sustain a city that has become one of the fastest- growing economies on the planet."
                        />
                        <Text16 
                            color="white" 
                            weight="400" 
                            text="Essentially, it's our home - and where our hearts will always be."
                        />
                        <div className="flex flex-col md:flex-row md:items-center justify-between mt-10 w-full">
                            <div className="flex flex-col gap-[26px]">
                                <Text14 
                                    color="white" 
                                    text="THE LIFESTYLE" 
                                    weight="400"
                                    position=""
                                />
                                <Text14 
                                    color="white" 
                                    text="Read More" 
                                    weight="500"
                                    position=""
                                />
                            </div>
                            <div className="flex flex-col gap-[26px]">
                                <Text14 
                                    color="white" 
                                    text="FEBRUARY 22, 2023"
                                    position="" 
                                    weight="400" />
                                <Text14 
                                    color="white" 
                                    text="7 MIN. READ" 
                                    weight="500" 
                                    position="right" 
                                />
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
            <div className="mt-[26px] text-gray-900 w-full">
                <BorderBottom color="gray-900" />
            </div>

        </div>
     );
}
 
export default Journal;