import Image from "next/image";
import { Text16, Text24 } from "../typegraphy";

const ImageCard = ({ data, section }) => {
    return (
        <div className="grid grid-cols-12 items-center lg:gap-[51px] w-full">
            {
                data.map((item, index) => (
                    <div
                        className={`bg-cover w-full col-span-12 lg:col-span-4 relative mt-10 ${section === "plan" && index !== 1 ? "h-[454px]" : "h-[516px]"}`}
                        style={{
                            background: `url(${item.img}) center center no-repeat`,
                            backgroundSize:'cover'
                        }}
                        key={index}
                    >
                        <div className="absolute bottom-6 left-5 flex flex-col gap-3">
                            <Text24 color="white" text={item.title} weight="400" />
                            <button className="flex items-center gap-2">
                                <Text16 color="white" text={item.more} weight="300" />
                                <Image alt="arrow" src="/images/angle-right.svg" width={10} height={10} />
                            </button>
                        </div>

                    </div>
                ))
            }
        </div>
    );
}

export default ImageCard;