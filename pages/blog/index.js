import JournalItem from "@/components/blog/JournalItem";
import BlogCarousel from "@/components/carousel/BlogCarousel";
import Footer from "@/components/footer/Footer";
import Pagination, { paginate } from "@/components/pagination";
import StayBiling from "@/components/staybil/StaylBiling";
import BlogDescription from "@/components/typegraphy/BlogDescription";
import Image from "next/image";
import { useState } from "react";

const BlogPage = () => {
    const journal = Array(30).fill("");
    const data = Array(3).fill("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const onPageChange = (page) => {
        setCurrentPage(page);
    };
    const paginatedPosts = paginate(journal, currentPage, pageSize);
    return (
        <div className="">
            <BlogCarousel data={data} />
            <div className="bg-[#f4f4f4] flex flex-col gap-7 py-5 xl:py-32 px-6 xl:px-[69px] w-full">
                <div className="flex flex-col xl:grid xl:grid-cols-3 gap-3 xl:gap-8  w-full">
                    <div className="col-span-1 bg-customGray-900 py-7 pl-8 pr-5 border-[3px] border-solid border-white rounded-4xl relative">
                        <div className="flex flex-col justify-between gap-10">
                            <span className="font-light font-sans text-customGray-300 text-[72px] leading-[64px]">
                                10k
                            </span>
                            <span className="absolute right-5 top-6 flex items-center justify-center uppercase border-2 border-solid border-[#6f6f6f] rounded-full w-12 h-6 text-[11px] leading-6 text-[#6f6f6f] font-semibold font-sans">
                                team
                            </span>
                            <div className="flex items-center justify-between w-full">
                                <span className="text-xs leading-6 font-normal font-sans text-customGray-200">
                                    EMPLOYEES ALL OVER THE WORLD
                                </span>
                                <span className="bg-[#3f4145] flex items-center justify-center w-[30px] h-[30px] rounded-full">
                                    <Image
                                        alt="arrow-icon"
                                        src="/images/arrow-right-45.svg"
                                        width={11}
                                        height={9}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-customGray-900 py-7 pl-8 pr-5 border-[3px] border-solid border-white rounded-4xl relative">
                        <div className="flex flex-col justify-between gap-10">
                            <span className="font-light font-sans text-customGray-300 text-[72px] leading-[64px]">
                                $12 Bn
                            </span>

                            <div className="flex items-center justify-between w-full">
                                <span className="text-xs leading-6 font-normal font-sans text-customGray-200">
                                    OF CONSTRUCTION
                                </span>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 bg-[#2e3034] py-7 pl-8 pr-5 rounded-4xl border-[3px] border-solid border-white relative">
                        <div className="flex flex-col justify-between gap-10">
                            <span className="font-light font-sans text-[#d2d2e1] text-[72px] leading-[64px]">
                                1,500
                            </span>

                            <div className="flex items-center justify-between w-full">
                                <span className="text-xs leading-6 font-normal font-sans text-customGray-200">
                                    PROJECTS EACH YEAR
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
                <section className="flex flex-col xl:grid xl:grid-cols-2 gap-4 xl:gap-14 py-6 w-full">
                    <div className="col-span-1 flex flex-col gap-7">
                        <BlogDescription
                            description={"Dubai's UHNW home owners are younger, with a more industry-oriented business focus, reveals a Wealth-X report"} />
                        <img alt="blog" src="/images/product/01.avif" className="rounded-[30px] xl:h-auto" />
                        <img alt="blog" src="/images/product/01.avif" className="rounded-[30px] hidden xl:flex xl:h-[280px]" />
                    </div>
                    <div className="col-span-1 flex flex-col gap-7">
                        <div className="pl-4 grid grid-cols-12 items-start gap-3">
                            <img alt="blog" src="/images/product/01.avif" className="col-span-4 rounded-[30px] hidden xl:flex xl:h-[388px]" />
                            <img alt="blog" src="/images/product/01.avif" className="col-span-8 rounded-[30px] hidden xl:flex xl:h-[388px] w-full" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-2xl leading-6 text-black font-bold font-CormorantGaramond">
                                About
                            </span>
                            <div className="flex flex-col xl:grid xl:grid-cols-2 gap-3 xl:gap-5">
                                <div className="col-span-1">
                                    <BlogDescription description={"Dubai's UHNW cohort also has the youngest age distribution of the three cities, with a lower proportion of homeowners over the age of 70 compared to Monaco."} />
                                </div>
                                <div className="col-span-1">
                                    <BlogDescription description="In terms of nationality, the top three countries by origin of primary residence among secondary home owners are the UK, France and Switzerland." />
                                </div>

                            </div>
                            <span className="text-2xl leading-9 font-medium font-sans text-[#484747]">
                                Another interesting finding is that only 1.4% of UHNWIs in Dubai are known jet owners, while 0.7% are known yacht owners.
                            </span>
                        </div>
                    </div>
                </section>
            </div>
            <section className="bg-[#2c2e32] flex flex-col xl:grid xl:grid-cols-2 gap-4 py-5 px-6 xl:px-[69px] h-full">
                <div
                    className="col-span-1 relative bg-[#f4f4f4] rounded-[30px] group">
                    <div className="absolute bg-black group-hover:bg-[#f4f4f4] top-0 left-0 w-full h-full rounded-[30px] z-10 opacity-60 group-hover:opacity-50"></div>
                    <img alt="blog" src="/images/product/01.avif" className="rounded-[30px] h-[533px] xl:h-auto" />
                    <div className="flex flex-col gap-8 absolute top-14 left-5 xl:left-9 z-10">
                        <span className="text-4xl leading-9 text-white font-normal font-sans group-hover:text-black">
                            So/ Uptown Residences
                        </span>
                        <span className="text-3xl text-white font-light font-sans group-hover:text-black">
                            2 060 sq. ft.
                        </span>
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl text-white font-light font-sans group-hover:text-black">
                                1 300
                            </span>
                            <span className="text-sm text-white font-[275] font-sans group-hover:text-black">
                                apartment
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-3xl text-white font-light font-sans group-hover:text-black">
                                900
                            </span>
                            <span className="text-sm text-white font-[275] font-sans group-hover:text-black">
                                parking spaces
                            </span>
                        </div>
                    </div>
                    <div className="absolute flex items-center gap-5 bottom-10 left-5 xl:left-9 z-10">
                        <button className="border-x border-y border-solid border-white group-hover:border-black group-hover:text-black text-sm leading-9 font-light font-sans rounded-[20px] flex items-center justify-center text-center bg-transparent text-white max-w-max px-3 2xl:px-8 2xl:py-4">
                            PUBLIC BUILDINGS
                        </button>
                        <button className="border-x border-y border-solid border-white group-hover:border-black group-hover:text-black rounded-[20px] text-sm leading-9 font-light font-sans flex items-center justify-center text-center bg-transparent text-white max-w-max px-3 2xl:px-8 2xl:py-4">
                            IMPLEMENTED
                        </button>
                    </div>
                </div>
                <div className="col-span-1 relative flex flex-col xl:grid xl:grid-cols-2 gap-4">
                    <div
                        style={{ backgroundImage: `url('/images/product/01.avif')` }}
                        className="col-span-1 w-full bg-cover bg-no-repeat bg-center relative rounded-[30px] h-[351px] xl:h-auto group">
                        <div className="absolute bg-black hover:bg-[#f4f4f4] top-0 left-0 w-full h-full rounded-[30px] z-10 opacity-60 hover:opacity-50"></div>
                        <div className="absolute bottom-10 flex flex-col gap-3 z-100 px-6">
                            <span className="text-2xl leading-9 text-white group-hover:text-black font-normal font-sans">
                                Presentation
                            </span>
                            <span className="text-sm leading-[18px] text-white group-hover:text-black font-light font-sans">
                                Experience unparalleled luxury and style at the inaugural SO/ Uptown Dubai by Accor, located in the iconic Uptown Tower.
                            </span>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url('/images/product/01.avif')` }}
                        className="col-span-1 w-full bg-cover bg-no-repeat bg-center relative rounded-[30px] h-[351px] xl:h-auto group">
                        <div className="absolute bg-black hover:bg-[#f4f4f4] top-0 left-0 w-full h-full rounded-[30px] z-10 opacity-60 hover:opacity-50"></div>
                        <div className="absolute top-10 flex flex-col gap-3 z-100 px-6">
                            <span className="text-2xl leading-9 text-white group-hover:text-black font-normal font-sans">
                                Presentation
                            </span>
                            <span className="text-sm leading-[18px] text-white group-hover:text-black font-light font-sans">
                                Experience unparalleled luxury and style at the inaugural SO/ Uptown Dubai by Accor, located in the iconic Uptown Tower.
                            </span>
                        </div>
                        <div className="bg-white absolute bottom-9 right-9 flex items-center justify-center w-[51px] h-[51px] rounded-full z-100">
                            <Image
                                alt="back-icon"
                                src="/images/arrow-left.svg"
                                width={14}
                                height={14}
                                className="rotate-[135deg]"
                            />
                        </div>
                    </div>

                </div>

            </section>
            <section className="flex flex-col w-full py-9 px-6 xl:px-[69px]">
                <div className="flex flex-col xl:grid xl:grid-cols-3 gap-3">
                    <div className="col-span-1 flex items-center justify-between xl:items-start xl:flex-col gap-5 xl:justify-center xl:mx-auto mb-9">
                        <span className="text-4xl leading-[18px] text-black font-bold font-CormorantGaramond">
                            Our Journals
                        </span>
                        <button className="bg-black rounded-md flex items-center justify-center max-w-max h-10 px-5">
                            <span className="text-center text-white text-sm font-medium font-sans leading-8">
                                Show More
                            </span>
                        </button>
                    </div>
                    {
                        paginatedPosts.map((item, index) => (
                            <JournalItem key={index} />
                        ))
                    }
                </div>
                <Pagination
                    items={journal.length}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onPageChange={onPageChange}
                    title="blog"
                />
            </section>

            <div className="bg-black flex flex-col gap-8 py-9">
                <StayBiling />
                <Footer />
            </div>

        </div>
    );
}

export default BlogPage;