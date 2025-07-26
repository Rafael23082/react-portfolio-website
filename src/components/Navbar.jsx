import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Navbar({current}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1024px)")

    mediaQuery.addEventListener("change", (e) => {
      if (e.matches) {
        setMenuOpen(false);
      }
    })
  })

  return (
    <div className="bg-[#141414] max-w-[1300px] mx-auto">
      <div className="w-full flex bg-[#141414] navbar items-center py-[1em] relative">
        <p className="text-[1.2rem] lg:text-[1.4rem] text-white font-medium grow pl-[1em] md:pl-[2em]" style={{fontFamily: "helvetica"}}>RAFAEL ANDERSON</p>

        <div id="menu" className={`mr-[2em] ${menuOpen ? 'hidden': 'block p-[0.6em]'} lg:hidden`}>
          <FiMenu className={`cursor-pointer`} color="#84fc1c" size={25} onClick={() => {setMenuOpen(!menuOpen)}} />
        </div>

        <div id="menu" className={`mr-[2em] ${menuOpen ? 'block p-[0.6em]': 'hidden'} lg:hidden`}>
          <FiX className={`cursor-pointer`} color="#84fc1c" size={25} onClick={() => {setMenuOpen(!menuOpen)}} />
        </div>

        <div className="hidden lg:flex grow-0 items-center text-white" style={{fontFamily: "figtree"}}>
          <p className={`${current == "home" ? "text-[#84fc1c]": "hover:text-[#a9e877] duration-[0.3s] ease-in-out"} cursor-pointer`} onClick={() => {navigate("/")}}>Home</p>
          <p className={`pl-[2em] ${current == "about" ? "text-[#84fc1c]": "hover:text-[#a9e877] duration-[0.3s] ease-in-out"} cursor-pointer`} onClick={() => {navigate("/about")}}>About</p>
          <p className={`pl-[2em] ${current == "projects" ? "text-[#84fc1c]": "hover:text-[#a9e877] duration-[0.3s] ease-in-out"} cursor-pointer`} onClick={() => {navigate("/projects")}}>Projects</p>
          <p className={`pl-[2em] ${current == "contact" ? "text-[#84fc1c]": "hover:text-[#a9e877] duration-[0.3s] ease-in-out"} cursor-pointer`} onClick={() => {navigate("/contact")}}>Contact</p>
          
          <button className="ml-[2em] bg-[#141414] border border-white text-white rounded-[1.25rem] self-center px-[1.5rem] py-[0.5rem] cursor-pointer hover:bg-[#84fc1c] hover:text-black hover:border-[#84fc1c] transition ease-in duration-200 mr-[1em] md:mr-[2em]">Contact Me</button>
        </div>
        <div className={`absolute w-[100%] top-[100%] ${menuOpen ? 'flex flex-col': 'hidden'} text-white text-[0.9rem] z-10`}>
          <div className={`cursor-pointer ${current == "home" ? "bg-[#1c1c1c] text-[#a9e877]": "bg-[#141414] hover:text-[#a9e877] hover:bg-[#1c1c1c] duration-[0.3s] ease-in-out"} pl-[2.4em] py-[1em]`} onClick={() => {navigate("/")}}>Home</div>
          <div className={`cursor-pointer ${current == "about" ? "bg-[#1c1c1c] text-[#a9e877]": "bg-[#141414] hover:text-[#a9e877] hover:bg-[#1c1c1c] duration-[0.3s] ease-in-out"} pl-[2.4em] py-[1em]`} onClick={() => {navigate("/about")}}>About</div>
          <div className={`cursor-pointer ${current == "projects" ? "bg-[#1c1c1c] text-[#a9e877]": "bg-[#141414] hover:text-[#a9e877] hover:bg-[#1c1c1c] duration-[0.3s] ease-in-out"} pl-[2.4em] py-[1em]`} onClick={() => {navigate("/projects")}}>Projects</div>
          <div className={`cursor-pointer ${current == "contact" ? "bg-[#1c1c1c] text-[#a9e877]": "bg-[#141414] hover:text-[#a9e877] hover:bg-[#1c1c1c] duration-[0.3s] ease-in-out"} pl-[2.4em] py-[1em]`} onClick={() => {navigate("/contact")}}>Contact</div>
        </div>
      </div>
    </div>
  );S
}

export default Navbar;