import Image from "next/image";
import RelatedPost from "./RelatedPost";
const ArticlePage = () => {

    return (
        <div>
            <div className="bg-white flex flex-col gap-5 px-6 xl:px-[92px] pt-32">
                <div className="flex items-center gap-4">
                    <span className="font-myraidPro leading-8 text-xs tracking-wider text-customGray-500  uppercase">
                        popular areas
                    </span>
                    <span className="bg-customGray-500 flex h-px w-8"></span>
                    <span className="font-myraidPro leading-8 text-xs tracking-widest text-customGray-500  uppercase">
                        april 19, 2023
                    </span>
                </div>
                <div className="flex flex-col gap-8">
                    <span className=" font-CormorantGaramond font-bold text-3xl xl:text-4xl 2xl:text-5xl leading-9">
                        The Escape: Cap Karoso
                    </span>
                    <div
                        style={{
                            backgroundImage: `url('/images/article/02.avif')`,
                            backgroundRepeat: 'no-repeat',
                        }}
                        className="bg-cover bg-center h-[400px] xl:h-[569px] w-full block items-center justify-center">
                    </div>

                    <div className="px-2 xl:px-8 flex flex-col gap-8">
                        <span className=" font-normal font-CormorantGaramond leading-7 text-lg xl:text-xl text-black">
                            For this edition of The Escape and with the Eid holidays around the corner, we take a look at Cap Karoso in Sumba, Indonesia. Founded by culinary bloggers Fabrice & Evguenia Ivara, Cap Karosois an inviting design hotel offering you fantastic experiences from art residencies to various healing treatments. The contemporary structure blends well with the tropical surroundings and the owners have worked hand in hand with local artisans and craftsmen to deliver a world-class experience blended with local flavour.
                        </span>
                        <span className=" font-normal font-CormorantGaramond leading-7 text-lg xl:text-xl text-black">
                            Nestled on the stunning island of Sumba in Indonesia, Cap Karoso is a luxury resort that offers a unique blend of natural beauty and exquisite architecture. The resort is known for its mesmerizing design that seamlessly integrates traditional Sumbanese elements with modern aesthetics, creating an enchanting and immersive experience for guests.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <span className=" font-CormorantGaramond font-bold text-2xl xl:text-4xl leading-8 px-2 xl:px-8">
                        Chapter 10: The Lobster Quadrille
                    </span>
                    <div className="px-2 xl:px-8 flex flex-col gap-8">
                        <span className=" font-normal font-CormorantGaramond leading-7 text-lg xl:text-xl text-black">
                            Upon arriving at Cap Karoso, guests are immediately captivated by the resort's breathtaking architecture. The design of the resort is inspired by the traditional Sumbanese houses known as "Uma Mbatangu" or "peaked houses," which are iconic symbols of the local culture. These houses are characterized by their high-pitched thatched roofs and distinctive peaked shapes, which are beautifully recreated in Cap Karoso's design.
                        </span>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url('/images/article/02.png')`,
                            backgroundRepeat: 'no-repeat',
                        }}
                        className="bg-cover bg-center h-[400px] xl:h-[569px] w-full block items-center justify-center">
                    </div>
                    <div className="px-2 xl:px-8 flex flex-col gap-8">
                        <span className=" font-normal font-CormorantGaramond leading-7 text-lg xl:text-xl text-black">
                            The resort's main building, which serves as the reception area and lounge, is a stunning example of Sumbanese architecture. The thatched roof soars high above, creating a sense of grandeur, while the intricate wooden carvings on the walls and pillars add a touch of elegance. The use of natural materials such as wood, stone, and thatch throughout the resort creates a harmonious connection with the surrounding environment, blending seamlessly with the pristine natural beauty of Sumba.
                        </span>
                    </div>
                    <div className="my-9 border-l-[3px] border-solid border-black">
                        <div className="flex flex-col gap-5 px-2 xl:pl-8">
                            <span className=" font-CormorantGaramond italic font-semibold text-lg lg:text-xl xl:text-2xl text-black">
                                One of the most striking features of Cap Karoso's architecture is its unique layout. The resort is designed to resemble a traditional Sumbanese village, with individual villas scattered across the lush landscape.
                            </span>
                            <span className="font-sans font-normal leading-7 text-base text-customBlack-400">
                                — Aneesha Rai
                            </span>
                        </div>
                    </div>
                    <div className="px-2 xl:px-8">
                        <span className="leading-7 font-normal font-CormorantGaramond text-lg xl:text-xl text-black">
                            The resort is designed to resemble a traditional Sumbanese village, with individual villas scattered across the lush landscape. Each villa is designed as a separate "house" with its own private courtyard, evoking a sense of intimacy and privacy. The villas are crafted with meticulous attention to detail, featuring traditional Sumbanese elements such as high thatched roofs, wooden beams, and intricately carved doors and windows. The use of natural colors and textures in the interior design creates a warm and inviting ambiance, inviting guests to relax and unwind in the lap of luxury.
                        </span>
                    </div>

                </div>
                <div className="flex flex-col gap-8">
                    <span className=" font-CormorantGaramond font-bold text-2xl xl:text-4xl leading-8 px-2 xl:px-8">
                        Chapter 10: The Lobster Quadrille
                    </span>
                    <div className="px-2 xl:px-8 flex flex-col gap-8">
                        <span className=" font-normal font-CormorantGaramond leading-7 text-lg xl:text-xl text-black">
                            Another highlight is its stunning infinity pool, which offers breathtaking views of the Indian Ocean. The pool is ingeniously designed to blend seamlessly with the horizon. Surrounded by lush gardens and comfortable sun loungers, the pool area provides a serene oasis where guests can soak up the sun and take in breathtaking vistas.                    </span>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="w-full col-span-1 row-span-2">
                            <div
                                style={{
                                    backgroundImage: `url('/images/article/02.avif')`,
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className="bg-cover bg-center h-[143px] xl:h-[283px] w-full block items-center justify-center">
                            </div>
                        </div>
                        <div className="w-full col-span-1 row-span-2">
                            <div
                                style={{
                                    backgroundImage: `url('/images/article/02.avif')`,
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className="bg-cover bg-center h-[143px] xl:h-[283px] w-full block items-center justify-center">
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div
                                style={{
                                    backgroundImage: `url('/images/article/02.avif')`,
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className="bg-cover bg-center h-[191px] xl:h-[481px] w-full block items-center justify-center">
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-9 px-2 xl:px-8">
                        <span className="leading-7 font-normal font-CormorantGaramond text-lg xl:text-xl text-black">
                            An additional standout feature of Cap Karoso's architecture is its commitment to sustainability and eco-friendliness. The resort has been designed with a strong emphasis on using locally sourced materials and traditional building techniques, minimizing its carbon footprint and preserving the local environment.                    </span>
                        <span className="leading-7 font-normal font-CormorantGaramond text-lg xl:text-xl text-black">
                            Cap Karoso also offers a range of unique design elements that add to its charm. The resort's interiors are adorned with an impressive collection of local art and crafts, showcasing the rich cultural heritage of Sumba.
                        </span>
                        <span className="leading-7 italic font-normal font-CormorantGaramond text-lg xl:text-xl text-black">
                            All images are courtesy Design Hotels.
                        </span>
                        <div className="flex flex-col gap-9">
                            <span className="text-sm leading-7 font-normal font-sans text-customGray-600">
                                Tags: lifestyle, travel
                            </span>
                            <div className="flex items-center gap-2.5">
                                <Image alt="user" src="/images/article/user.svg" width={30} height={30} />
                                <span className="font-normal font-sans text-black text-base leading-7">
                                    Grace Telford
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-0 bg-customGray-800 py-5 px-6 xl:px-[92px]">
                <div className="flex items-center justify-between w-full">
                    <span className="cursor-pointer text-[10px] tracking-[4px] leading-7 text-customGray-700 uppercase">
                    PREVIOUS POST
                    </span>
                    <span className="cursor-pointer text-[10px] tracking-[4px] leading-7 text-customGray-700 uppercase">
                    NEXT POST
                    </span>
                </div>
                <div className="flex items-center justify-between w-full">
                    <span className=" text-lg  text-black font-CormorantGaramond font-medium truncate max-w-[120px] md:max-w-[248px]">
                        Design House: A Glamorous Dubai Hills Villa
                    </span>
                    <span className=" text-lg  text-black font-CormorantGaramond font-medium truncate max-w-[120px] md:max-w-[248px] text-right">
                        Design House: A Glamorous Dubai Hills Villa
                    </span>
                </div>
            </div>
            <RelatedPost />
        </div>
    );
}

export default ArticlePage;