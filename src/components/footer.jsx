import { FiCornerDownRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Footer(){
    const navigate = useNavigate();
    return(
      <div className="bg-[#1c1c1c] relative">
        <div className="max-w-[1300px] mx-auto py-[5em] pb-[12em] sm:py-[5em] lg:py-[8em] px-[2em]">
          <div className="w-[100%] bg-[#141414] text-white mx-auto flex flex-col items-center py-[2em] md:py-[5em] rounded-[20px]">
            <div className="border w-fit px-[1em] rounded-[20px] flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#84fc1c]"></div>
              <p className="ml-[0.5em] text-[0.7rem] lg:text-[1.1rem]">HAVE A PROJECT IN MIND?</p>
            </div>
            <p className="text-[3rem] lg:text-[4.5rem] leading-[1em] text-center px-[0.3em]">Let's Turn your Ideas<br />into Reality</p>
            <div className="flex flex-col mt-[2em]">
              <div className="flex items-center">
                <FiCornerDownRight strokeWidth={1} size={10} className="block md:hidden" />
                <FiCornerDownRight strokeWidth={1} size={30} className="hidden md:block" />
                <p className="text-[1rem] md:text-[1.6rem] ml-[0.2em]">raf.anderson777@gmail.com</p>
              </div>
              <div className="h-[3px] bg-[#4c4c4c]"></div>
            </div>
          </div>
        </div>
        <div className="flex text-white absolute bottom-[25px] lg:bottom-[50px] gap-[10px] sm:gap-[20px] left-1/2 -translate-x-1/2 sm:flex-row flex-col text-[0.8rem] sm:text-[1rem] justify-center items-center">
          <p className="hover:text-[#a9e877] duration-[0.3s] ease-in-out cursor-pointer" onClick={() => {navigate("/"); window.scrollTo(0, 0);}}>Home</p>
          <p className="hover:text-[#a9e877] duration-[0.3s] ease-in-out cursor-pointer" onClick={() => {navigate("/about"); window.scrollTo(0, 0);}}>About</p>
          <p className="hover:text-[#a9e877] duration-[0.3s] ease-in-out cursor-pointer" onClick={() => {navigate("/projects"); window.scrollTo(0, 0);}}>Projects</p>
          <p className="hover:text-[#a9e877] duration-[0.3s] ease-in-out cursor-pointer" onClick={() => {navigate("/contact"); window.scrollTo(0, 0);}}>Contact</p>
        </div>
      </div>
    );
}

export default Footer;
