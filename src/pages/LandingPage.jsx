import Navbar from "../components/Navbar.jsx";
import { FiCornerDownRight } from "react-icons/fi";
import ProjectBox from "../components/ProjectBox.jsx";
import Footer from "../components/footer.jsx";
import DecorativePill from "../components/DecorativePill.jsx";

function LandingPage() {
  return (
    <>
      <div className="bg-[#141414]">
        <div className="bg-[#141414] max-w-[1300px] mx-auto overflow-hidden relative h-[max(740px,100vh)] md:h-[840px] lg:h-[920px]">
          <Navbar current={"home"} />
          <div className="bg-black mt-[3em]">
            <p className="absolute text-white font-medium text-[2.7rem] sm:text-[5rem] md:text-[6rem] lg:text-[10rem] text-center w-full top-[25%] leading-[0.9em]" style={{fontFamily: "helvetica"}}>RAFAEL<br />ANDERSON</p>
            <DecorativePill text={"AVAILABLE FOR WORK"} white={false} italic={true} absolute={true} centered={false} />
            <img src="./profile.png" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[270px] md:w-[350px] lg:w-[450px]" alt="Rafael Anderson" />
            <p className="text-white hidden md:block absolute md:top-[65%] lg:top-[70%] left-[5%] md:w-[25%] lg:w-[30%] lg:text-[1rem]" style={{fontFamily: "figtree"}}>"Crafting immersive experiences at the intersection of design and technology."</p>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f8f8]">
        <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[1em] md:px-[2em]">
          <DecorativePill text={"WHY CHOOSE ME"} white={true} italic={false} absolute={false} centered={false} />
          <p className="font-medium text-[2.7rem] lg:text-[4.5rem] leading-[1em] mt-[0.4em]" style={{fontFamily: "figtree"}}>Why Work with Me</p>
          <div className="flex justify-between mt-[4em] flex-col lg:flex-row">
            <div className="w-[100%] lg:w-[32%] bg-white shadow-sm rounded-[10px] flex flex-col px-[2.5em] py-[2.5em]">
              <img src="website_logo.png" alt="website logo" className="w-[50px]" />
              <p className="text-[1.3rem] lg:text-[1.5rem] mt-[0.8em]">Custom-Crafted Websites</p>
              <p className="text-[0.9rem] lg:text-[1rem] mt-[0.5em]">Every business has its own story — I create websites that reflect your unique brand identity and vision.</p>
            </div>
            <div className="w-[100%] lg:w-[32%] bg-white shadow-sm rounded-[10px] flex flex-col px-[2.5em] py-[2.5em] mt-[1.5em] lg:mt-0">
              <img src="user.png" alt="user logo" className="w-[50px]" />
              <p className="text-[1.3rem] lg:text-[1.5rem] mt-[0.8em]">Designed for Your Users</p>
              <p className="text-[0.9rem] lg:text-[1rem] mt-[0.5em]">Prioritizing ease and clarity, I build user-friendly interfaces that guide visitors effortlessly through your site.</p>
            </div>
            <div className="w-[100%] lg:w-[32%] bg-white shadow-sm rounded-[10px] flex flex-col px-[2.5em] py-[2.5em] mt-[1.5em] lg:mt-0">
              <img src="tool.png" alt="tool logo" className="w-[50px]" />
              <p className="text-[1.3rem] lg:text-[1.5rem] mt-[0.8em]">Modern Tools & Techniques</p>
              <p className="text-[0.9rem] lg:text-[1rem] mt-[0.5em]">I leverage the latest in web development to ensure your site is fast, secure, and built with future-proof technologies.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#141414]">
        <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[1em] md:px-[2em]">
          <DecorativePill text={"SELECTED WORK 2023 - 2024"} white={false} italic={false} absolute={false} centered={false} />
          <p className="font-medium text-white text-[2.7rem] lg:text-[4.5rem] w-[75%] leading-[1em] mt-[0.4em]" style={{fontFamily: "figtree"}}>Crafted with Code & Creativity</p>
          <div className="flex justify-between mt-[4em] flex-col lg:flex-row">
            <div className="w-[100%] lg:w-[49%]">
              <ProjectBox name={"Platformer Game"} year={"2023"} image={"platformer.png"} url={"https://github.com/Rafael23082/Algorithm-and-Programming-Final-Project"} centered={false} />
            </div>
            <div className="w-[100%] lg:w-[49%] mt-[2em] lg:mt-0">
              <ProjectBox name={"Car Rental Application"} year={"2024"} image={"OOP.png"} url={"https://github.com/Rafael23082/OOP-FP"} centered={false} />
            </div>
          </div>
          <button className="bg-[#84fc1c] cursor-pointer px-[1.2em] py-[0.6em] rounded-[20px] block mx-auto mt-[3em] flex items-center gap-[0.5em] hover:bg-[#c9ff90] duration-[0.2s] ease-in-out" onClick={() => {window.open("https://github.com/Rafael23082")}}>
            <FiCornerDownRight strokeWidth={1} />
            Browse All Work</button>
        </div>
      </div>

      <div className="bg-[#f8f8f8]">
        <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[1em] md:px-[2em] flex flex-col lg:flex-row">
          <div className="w-[100%] lg:w-[50%]">
          <DecorativePill text={"MY PROCESS"} white={true} italic={false} absolute={false} centered={false} />
            <p className="font-medium text-black text-[2.7rem] lg:text-[4.5rem] leading-[1em] mt-[0.4em]" style={{fontFamily: "figtree"}}>My Creative Workflow</p>
          </div>
          <div className="w-[100%] lg:w-[50%]">
            <div className="pb-[2em] mt-[2em] lg:mt-0">
              <p className="text-[1.4rem] lg:text-[2rem]">1. Discovery</p>
              <p className="mt-[0.5em] text-[0.9rem] lg:text-[1rem]">I begin by understanding the project's purpose, target audience, and goals. This involves research, client conversations, and competitive analysis to lay a strong foundation for creative direction.</p>
            </div>
            <div className="w-[100%] h-[0.1px] bg-black"></div>
            <div className="pb-[2em] pt-[2em]">
              <p className="text-[1.4rem] lg:text-[2rem]">2. Design</p>
              <p className="mt-[0.5em] text-[0.9rem] lg:text-[1rem]">With clear insights from the discovery phase, I translate ideas into visual concepts. I explore layout, typography, color, and interaction to craft designs that are both functional and visually compelling.</p>
            </div>
            <div className="w-[100%] h-[0.1px] bg-black"></div>
            <div className="pb-[2em] pt-[2em]">
              <p className="text-[1.4rem] lg:text-[2rem]">3. Development</p>
              <p className="mt-[0.5em] text-[0.9rem] lg:text-[1rem]">I bring the designs to life through clean, responsive code. Whether it's a website, app, or interactive experience, I ensure performance, accessibility, and seamless functionality across devices.</p>
            </div>
            <div className="w-[100%] h-[0.1px] bg-black"></div>
            <div className="pb-[2em] pt-[2em]">
              <p className="text-[1.4rem] lg:text-[2rem]">4. Launch</p>
              <p className="mt-[0.5em] text-[0.9rem] lg:text-[1rem]">After thorough testing and final refinements, the project is deployed with precision. I ensure everything runs smoothly and is optimized for real-world use—ready to make an impact from day one.</p>
            </div>
            <div className="w-[100%] h-[0.1px] bg-black"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;