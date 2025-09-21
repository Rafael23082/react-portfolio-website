function DecorativePill({text, white, italic, absolute, centered, margin}){
    let color;
    if (white){
        color = "black"
    }else{
        color = "white"
    }
    return(
        <div className={`border border-${color} w-fit px-[1em] rounded-[20px] flex items-center ${margin ? "mt-[4em]": "mt-0"} ${absolute ? "absolute top-[150px] left-1/2 -translate-x-1/2": ""} whitespace-nowrap ${centered ? "mx-auto": ""}`}>
            <div className="w-2 h-2 rounded-full bg-[#84fc1c]"></div>
            <p className={`text-${color} ml-[0.5em] text-[0.9rem] lg:text-[1.1rem] ${italic ? "italic": ""}`}>{text}</p>
        </div>
    )
}

export default DecorativePill;