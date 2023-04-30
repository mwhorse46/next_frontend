const InputBox = ({placeholder,value, setValue}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder={placeholder}
            className="bg-transparent border-x border-y border-solid border-[#bbbbbb] outline-none py-2 px-5 text-lg text-[#898989] font-sans w-full"
        />
    );
}

export default InputBox;