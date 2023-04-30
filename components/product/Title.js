import { roboto } from "../font/font";
const ProductTitle = ({text}) => {
    return ( 
        <span className={`font-bold text-2xl xl:text-4xl 2xl:text-[51px] text-white ${roboto.className}`}>
            {text}
        </span>
     );
}
 
export default ProductTitle;