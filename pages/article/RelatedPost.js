import Image from "next/image";

const RelatedPost = () => {
    const post = Array(3).fill("");
    return (
        <div className="flex flex-col gap-8 items-center justify-center px-6 xl:px-[92px] pt-6 pb-9">
            <span className="text-center flex items-center justify-center text-2xl leading-7 text-black font-CormorantGaramond font-bold">
                Related Posts
            </span>
            <div className="flex items-center lg:grid lg:grid-cols-12 gap-5 xl:gap-8 w-full overflow-x-scroll md:overflow-hidden">
                {
                    post.map((item, i) => (
                        <div className="flex flex-col gap-3 col-span-12 lg:col-span-4 w-full max-w-[310px] min-w-[310px] lg:min-w-full lg:max-w-full" key={i}>
                            <img alt="related-post" src="/images/article/02.avif" className="h-[284px]" />
                            <span className=" text-lg  text-black font-CormorantGaramond font-medium max-w-[248px]">
                                Design House: A Glamorous Dubai Hills Villa
                            </span>
                            <div className="flex items-center gap-4">
                                <span className="font-sans leading-8 font-light text-[10px] tracking-widest text-customGray-500  uppercase">
                                    popular areas
                                </span>
                                <span className="bg-customGray-500 flex h-px w-8"></span>
                                <span className="font-sans leading-8 font-light text-[10px] tracking-widest text-customGray-500  uppercase">
                                    april 19, 2023
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default RelatedPost;