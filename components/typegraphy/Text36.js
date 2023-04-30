const Text36 = ({color,text,weight}) => {
    return ( 
        <div className={`text-2xl xl:text-3xl 2xl:text-4xl leading-6 text-${color} font-${weight}`}>
            {text}
        </div>
     );
}
 
export default Text36;