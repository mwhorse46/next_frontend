import ProductTitle from "./Title";

const Description = () => {
    const data = [
        {
            id: 1,
            title: "Developer",
            name: "GAMBRIN PROPERTIES"
        },
        {
            id: 2,
            title: "Building",
            name: "Rigel"
        },
        {
            id: 3,
            title: "RERA",
            name: "30495"
        },
        {
            id: 4,
            title: "Lifestyle",
            name: "Waterfront Properties"
        },
        {
            id: 5,
            title: "Reference",
            name: "6E203-203D"
        }
    ]
    return (
        <section className="flex flex-col gap-8 bg-black pt-14 xl:pt-20 2xl:pt-[95px] pb-14 px-6 lg:pl-20 lg:pr-14">
            <ProductTitle text="Description" />
            <div className="grid grid-cols-12 items-start xl:gap-8 2xl:gap-16 justify-between">
                <div className="flex flex-col gap-6 col-span-12 xl:col-span-6 2xl:col-span-7">
                    <span className="font-normal text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white font-sans text-justify">
                        Luxhabitat Sotheby’s International Realty is pleased to present this modern 6-bedroom villa in Emirates Hills. This independently situated villa is a spacious and contemporary luxury property available for rent that will appeal to those with large families or who want plenty of room for guests or entertaining. The villa has a well designed layout with separate formal living area and a combined dining and family room. The gourmet kitchen is also generously proportioned with built-in Siemens appliances. There are six bedrooms in the villa, two of which are on the ground floor so they are perfect for guests or as accessibility rooms.
                    </span>
                    <button className="border-x border-y border-solid rounded-full flex items-center justify-center px-6 py-3 text-white w-max hover:border-red-900">
                        Read more
                    </button>
                </div>
                <div className="bg-gras-400 flex flex-col gap-2.5 justify-between col-span-12 xl:col-span-6 2xl:col-span-5 py-9 px-7 mt-5 xl:mt-0">
                    <div className="flex flex-col gap-2.5">
                        {
                            data.map((item, index) => (
                                <div className="flex items-center justify-between" key={index}>
                                    <span className="font-sans font-medium text-base lg:text-xl xl:text-xl 2xl:text-[26px] leading-9 text-gras-500">
                                        {item.title}:
                                    </span>
                                    <span className="font-sans font-medium text-base lg:text-xl xl:text-xl 2xl:text-[26px] leading-9 text-white uppercase truncate max-w-[210px] md:max-w-[322px]">
                                        {item.name}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Description;