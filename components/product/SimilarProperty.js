import SimilarCarousel from "../carousel/SimilarCarousel";
import ProductTitle from "./Title";

const SimilarProperty = () => {
    const data =Array(4).fill("");
    return (  
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-24 2xl:gap-[105px] mt-28 pb-24">
            <div className="pl-6 md:pl-[87px]">
                <ProductTitle text="Similar Properties" />
            </div>
            <SimilarCarousel data={data} title='similarProperty' />
        </div>
    );
}
 
export default SimilarProperty;