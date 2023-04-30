import BorderBottom from "../border/BorderBottom";
import Carousel from "../carousel/Carousel";
import { Text16,Text24,Text36 } from "../typegraphy";


const FeatureApart = () => {
    const data = [
        {
            id: 1,
            children: [
                {
                    title: "Property",
                    img: '/images/feature/03.png'
                },
                {
                    title: "Property",
                    img: '/images/feature/03.png'
                },
                {
                    title: "Property",
                    img: '/images/feature/03.png'
                }
            ],
            title: "Palm Jumeirah",
            description: 'Garden Homes',
            area: "15,500 sq. ft.",
            furniture: 'Villa | 5 beds'
        },
        {
            id: 1,
            children: [
                {
                    title: "Villa",
                    img: '/images/feature/03.png'
                },
                {
                    title: "Villa",
                    img: '/images/feature/03.png'
                },
                {
                    title: "Villa",
                    img: '/images/feature/03.png'
                }
            ],
            title: "Jumeirah",
            description: 'Umm Suqeim',
            area: "15,500 sq. ft.",
            furniture: 'Villa | 5 beds'
        },
        {
            id: 1,
            children: [
                {
                    title: "Property",
                    img: '/images/feature/03.png'
                },
                {
                    title: "Property",
                    img: '/images/feature/03.png'
                },
                {
                    title: "Property",
                    img: '/images/feature/03.png'
                }
            ],
            title: "Dubai Hills",
            description: 'Fairway Vistas',
            area: "13,862 sq. ft.",
            furniture: 'Villa | 5 beds'
        }
    ]
    return (
        <div className="flex flex-col gap-7 pt-9 pb-12 px-6 lg:px-[70px]">
            <Text36 color="white" text="Featured Apartments" />
            <div className="grid grid-cols-12 gap-4">
                {
                    data.map((items, index) => (
                        <div 
                            className="col-span-12 lg:col-span-4 flex flex-col gap-6"
                            key={index}
                        >
                            <Carousel data={items.children} title="feature" />
                            <div className="flex items-center justify-between pr-2.5">
                                <div className="flex flex-col gap-2">
                                    <Text24 color="white" text={items.title} weight="400" />
                                    <Text16 color="white" text={items.description} weight="400" />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Text16 color="white" text={items.area} weight="300" />
                                    <Text16 color="white" text={items.furniture} weight="300" />
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
            <BorderBottom color="gray-900" />
        </div>
    );
}

export default FeatureApart;