import { FiCornerDownRight } from "react-icons/fi";

function ProjectBox({name, year, image, url, centered}){
    return(
        <div className="w-[100%] rounded-[20px] border border-[#504c4c] overflow-hidden">
            <div className="flex px-[2em] py-[1.5em] items-center flex-row">
            <div className="flex items-center grow">
                <FiCornerDownRight strokeWidth={3} color="#84fc1c" className="cursor-pointer" onClick={() => {window.open(url)}} />
                <p className="text-white ml-[0.5em] max-w-[70%]">{name}</p>
            </div>
            <p className="text-white">{year}</p>
            </div>
            <div className="aspect-[12/9] w-[100%] rounded-[20px] overflow-hidden">
            <img src={image} className={`w-full h-full object-cover ${centered ? "object-center": "object-left"}`} />
            </div>
        </div>
    );
}

export default ProjectBox;