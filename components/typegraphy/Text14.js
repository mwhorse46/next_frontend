import { roboto } from "../font/font";

const Text14 = ({color, text, weight,position}) => {
    return ( 
        <div className={`text-sm text-${color}  font-${weight} ${roboto.className} ${position==="right"?"text-right":""}`}>
            {text}
        </div>
     );
}
 
export default Text14;