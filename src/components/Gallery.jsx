import DecorativePill from "./DecorativePill.jsx";

function Gallery({text, bg, title1, title2, image1, image2, image3, image4}){
    let white;
    if (text == "black"){
        white = true
    }else{
        white = false
    }
    return(
        <div className={`bg-[${bg}]`}>
            <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[1em] md:px-[2em]">
                <DecorativePill text={"MY WORLD"} centered={true} white={white} />
                <p className={`font-medium text-[3rem] lg:text-[4.5rem] leading-[1em] mt-[0.4em] text-${text} text-center`} style={{fontFamily: "figtree"}}>{title1}<br />{title2}</p>
                <div className="flex flex-col gap-[20px] md:gap-0 items-center md:flex-row md:justify-between mt-[3em]">
                    <div className="w-[min(100%,350px)] min-w-[200px] md:min-w-[0px] md:w-[24%] aspect-[5/8] rounded-[20px] overflow-hidden">
                        <img src={`${image1}`} className="w-full h-full object-cover"></img>
                    </div>
                    <div className="w-[min(100%,350px)] min-w-[200px] md:min-w-[0px] md:w-[24%] aspect-[5/8] rounded-[20px] overflow-hidden">
                        <img src={`${image2}`} className="w-full h-full object-cover"></img>
                    </div>
                    <div className="w-[min(100%,350px)] min-w-[200px] md:min-w-[0px] md:w-[24%] aspect-[5/8] rounded-[20px] overflow-hidden">
                        <img src={`${image3}`} className="w-full h-full object-cover"></img>
                    </div>
                    <div className="w-[min(100%,350px)] min-w-[200px] md:min-w-[0px] md:w-[24%] aspect-[5/8] rounded-[20px] overflow-hidden">
                        <img src={`${image4}`} className="w-full h-full object-cover"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;