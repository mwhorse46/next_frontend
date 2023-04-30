import Link from "next/link";

const JournalItem = ({ item }) => {
    return (
        <Link href="/article" className="flex flex-col gap-3">
       
            <img alt="blog" src="/images/product/01.avif" className="col-span-4 rounded-[30px] h-auto" />
            <div className="flex flex-col gap-4">
                <span className="text-lg leading-[18px] text-black font-bold font-CormorantGaramond">
                    Top 5 apartments in Downtown Dubai
                </span>
                <span className="text-lg leading-[18px] text-black font-normal font-CormorantGaramond">
                    Here are the most beautiful apartments & penthouses that are ready to move in 
                </span>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-xs leading-[18px] text-black font-[275] font-CormorantGaramond uppercase">
                            PORTFOLIO
                        </span>
                        <span className="w-0.5 h-0.5 bg-black text-xs leading-[18px] text-black font-[275] font-CormorantGaramond uppercase">

                        </span>
                        <span className="text-xs leading-[18px] text-black font-[275] font-CormorantGaramond uppercase">
                            4 MIN. READ
                        </span>
                    </div>
                    <span className="text-xs leading-[18px] text-black font-[275] font-CormorantGaramond uppercase">
                        APR 14TH, 2023
                    </span>
                </div>

            </div>
        </Link>
    );
}

export default JournalItem;