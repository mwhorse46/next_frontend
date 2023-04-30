const Text24 = ({color, text,weight}) => {
    return ( 
        <div className={`text-3xl text-${color} font-${weight}`}>
            {text}
        </div>
     );
}
 
export default Text24;