import { roboto } from "../font/font";

const Text18 = ({color, text, weight,position}) => {
    return ( 
        <div className={`text-sm xl:text-base 2xl:text-lg leading-6 text-${color} font-${weight} ${roboto.className} ${position==="right"?"text-right":""}`}>
            {text}
        </div>
     );
}
 
export default Text18;