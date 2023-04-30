const Text16 = ({color, text, weight}) => {
    return ( 
        <div className={`text-base text-${color} font-${weight}`}>
            {text}
        </div>
     );
}
 
export default Text16;