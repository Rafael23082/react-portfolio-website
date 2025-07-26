import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FAQ from "../components/FAQ.jsx";
import DecorativePill from "../components/DecorativePill.jsx";
import { useState } from "react";
import { BiSolidError } from "react-icons/bi";

function ContactPage(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [budget, setBudget] = useState("");
    const [description, setDescription] = useState("");
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e, value) => {
        if (value == "email"){
            setEmail(e.target.value);
        } else if (value == "name"){
            setName(e.target.value)
        } else if (value == "budget"){
            setBudget(e.target.value)
        } else if (value == "description"){
            setDescription(e.target.value)
        }
    }

    const handleSubmit = () => {
        let valid = true;
        if (name == ""){
            setNameError("This field is required.");
            valid = false;
        }else{
            setNameError("");
        }
        if (email == ""){
            setEmailError("This field is required.");
            valid = false;
        }else{
            setEmailError("");
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const correctEmail = emailPattern.test(email);
        if (!correctEmail){
            setEmailError("Invalid email format.")
            valid = false;
        }else{
            setEmailError("");
        }
        if (valid){
            setSuccess(true);
        }
    }
    return(
        <>
            <Navbar current={"contact"} />
            <div className="bg-[#141414]">
                <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[1em] md:px-[2em]">
                    <p className="text-white font-medium text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[10rem]">CONTACT</p>
                    <DecorativePill white={false} text={"BOOK A CALL"} margin={true} />
                    <div className="flex flex-col lg:flex-row">
                        <p className="font-medium text-[2.7rem] lg:text-[4.5rem] leading-[1em] text-white mt-[0.3em] pr-[1em] w-[100%] lg:w-[50%]" style={{fontFamily: "figtree"}}>I'd love to hear from you!</p>
                        {success && (
                            <div className="w-[100%] lg:w-[50%] bg-[#e8fcc4] p-[1em] h-fit">Thanks for contacting us! We will be in touch with you shortly.</div>
                        )}
                        {!success && (
                            <div className="w-[100%] lg:w-[50%] text-white mt-[5em] lg:mt-0">
                                <p className="font-bold">
                                    <span className="text-white">Name </span>
                                    <span className="text-[#d43828]">*</span>
                                </p>
                                <input type="text" className="w-[100%] bg-[#1c1c1c] py-[0.7em] rounded-[5px] mt-[0.75em] pl-[1em] border border-transparent focus:border-[#84fc1c] border-[1.5px] focus:outline-none transition-colors duration-[0.1s]" onChange={(e) => {handleChange(e, "name")}} value={name}></input>
                                {nameError != "" && (
                                    <span className="flex mt-[1em] items-center"><BiSolidError color="#cc3434" size={18} /><p className="text-[#cc3434] text-[0.9rem] pl-[0.3em]">{nameError}</p></span>
                                )}
                                <p className="font-bold mt-[1.5em]">
                                    <span className="text-white">Email Address </span>
                                    <span className="text-[#d43828]">*</span>
                                </p>
                                <input type="text" className="w-[100%] bg-[#1c1c1c] py-[0.7em] rounded-[5px] mt-[0.75em] pl-[1em] border border-transparent focus:border-[#84fc1c] border-[1.5px] focus:outline-none transition-colors duration-[0.1s]" onChange={(e) => {handleChange(e, "email")}} value={email}></input>
                                {emailError != "" && (
                                    <span className="flex mt-[1em] items-center"><BiSolidError color="#cc3434" size={18} /><p className="text-[#cc3434] text-[0.9rem] pl-[0.3em]">{emailError}</p></span>
                                )}
                                <p className="text-white font-bold mt-[1.5em]">Your Budget</p>
                                <input type="text" className="w-[100%] bg-[#1c1c1c] py-[0.7em] rounded-[5px] mt-[0.75em] pl-[1em] border border-transparent focus:border-[#84fc1c] border-[1.5px] focus:outline-none transition-colors duration-[0.1s]" onChange={(e) => {handleChange(e, "budget")}} value={budget}></input>
                                <p className="text-white font-bold mt-[1.5em]">Description</p>
                                <textarea className="w-[100%] bg-[#1c1c1c] py-[0.7em] rounded-[5px] mt-[0.75em] pl-[1em] border border-transparent focus:border-[#84fc1c] border-[1.5px] focus:outline-none transition-colors duration-[0.1s] h-[210px]" onChange={(e) => {handleChange(e, "description")}} value={description} style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 #1c1c1c' }} />
                                <button className="rounded-[80px] bg-[#84fc1c] py-[0.6em] px-[1.2em] text-black mt-[1em] hover:brightness-90 transition cursor-pointer" onClick={handleSubmit}>Submit</button>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between text-white mt-[5em] lg:mt-[9em] flex-col lg:flex-row">
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