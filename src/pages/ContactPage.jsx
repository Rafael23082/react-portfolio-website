import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FAQ from "../components/FAQ.jsx";

function ContactPage(){
    return(
        <>
            <Navbar current={"contact"} />
            <div className="bg-[#141414]">
                <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[2em]">
                    <p className="text-white font-medium text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[10rem]">CONTACT</p>
                    <div className="flex justify-between text-white mt-[5em] lg:mt-[1em] flex-col lg:flex-row">
                        <div className="w-[100%] lg:w-[49%] bg-[#1c1c1c] flex flex-col justify-center items-center rounded-[20px] py-[3em]">
                            <p>EMAIL ME</p>
                            <div className="mt-[1.5em]">
                                <p className="text-[1rem] md:text-[1.6rem] ml-[0.2em]">raf.anderson777@gmail.com</p>
                                <div className="h-[2px] bg-[#4c4c4c]"></div>
                            </div>
                        </div>
                        <div className="w-[100%] lg:w-[49%] bg-[#1c1c1c] flex flex-col items-center py-[2em] rounded-[20px] mt-[1.5em] lg:mt-0">
                            <p>FIND ME</p>
                            <div className="flex gap-[15px] mt-[1.5em]">
                                <div className="p-[1em] bg-[#84fc1c] rounded-full hover:bg-[#a9e877] transition ease duration-[0.3s] cursor-pointer" onClick={() => {window.open("https://www.instagram.com/rafael_anderson777/")}}><FaInstagram size={25} color="#1c1c1c" /></div>
                                <div className="p-[1em] bg-[#84fc1c] rounded-full hover:bg-[#a9e877] transition ease duration-[0.3s] cursor-pointer" onClick={() => {window.open("https://www.linkedin.com/in/rafael-anderson-9a9387354/")}}><FaLinkedinIn size={25} color="#1c1c1c" /></div>
                                <div className="p-[1em] bg-[#84fc1c] rounded-full hover:bg-[#a9e877] transition ease duration-[0.3s] cursor-pointer" onClick={() => {window.open("https://github.com/Rafael23082")}}><FaGithub size={25} color="#1c1c1c" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
            <Footer />
        </>
    )
}

export default ContactPage;