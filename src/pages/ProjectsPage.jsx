import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import ProjectBox from "../components/ProjectBox.jsx";
import { FaCirclePlus } from "react-icons/fa6";
import Footer from "../components/footer.jsx";
import FAQ from "../components/FAQ.jsx";

function ProjectsPage(){
    const [current, setCurrent] = useState("All");
    const [openedFAQ, setOpenedFAQ] = useState(false);
    const projects = [{
       "name": "Platformer Game" ,
       "year": "2023",
       "image": "platformer.png",
       "type": "Individual",
       "url": "https://github.com/Rafael23082/Algorithm-and-Programming-Final-Project",
       "centered": false
    }, {
        "name": "Car Rental Application",
        "year": "2024",
        "image": "OOP.png",
        "type": "Individual",
        "url": "https://github.com/Rafael23082/OOP-FP",
        "centered": false
    }, {
        "name": "E-Commerce Application",
        "year": "2024",
        "image": "ecommerce.png",
        "type": "Collaborative",
        "url": "https://github.com/cassievg/Database-FP",
        "centered": true
    }, {
        "name": "NMC Helpdesk Application",
        "year": "2025",
        "image": "NMC.png",
        "type": "Collaborative",
        "url": "https://github.com/Ella-Raputri/WADS-FinalProject",
        "centered": true
    }, {
        "name": "Pendulum Motion Simulator",
        "year": "2025",
        "image": "pendulum.png",
        "type": "Collaborative",
        "url": "https://github.com/gamakagami/Pendulum-Simulator",
        "centered": true
    }, {
        "name": "Workstation Placement Optimizer",
        "year": "2024",
        "image": "workstation.jpg",
        "type": "Collaborative",
        "url": "https://github.com/gamakagami/ADA-FinalProject",
        "centered": true
    }]
    return(
        <>
        <Navbar current={"projects"} />
        <div className="bg-[#141414]">
            <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[2em]">
                <p className="text-white font-medium text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[10rem]">PROJECTS</p>
                <div className="flex flex-col md:flex-row mt-[5em] lg:mt-[0.8em]">
                    <div className="flex flex-col">
                        <p className={`text-[1.3rem] lg:text-[1.5rem] cursor-pointer ${current == "All" ? "text-white": "text-[#504c4c] hover:text-white ease-in-out duration-[0.3s]"}`} onClick={() => {setCurrent("All")}} >All</p>
                        <div className={`bg-white overflow-hidden transition-all duration-300 ease-in-out w-full ${current === "All" ? "h-[2px] opacity-100" : "h-0 opacity-0"}`}/>
                    </div>
                    <div className="ml-0 md:ml-[2em] mt-[1em] md:mt-0">
                        <p className={`text-[1.3rem] lg:text-[1.5rem] cursor-pointer ${current == "Individual" ? "text-white": "text-[#504c4c] hover:text-white ease-in-out duration-[0.3s]"}`} onClick={() => {setCurrent("Individual")}}>Individual</p>
                        <div className={`bg-white overflow-hidden transition-all duration-300 ease-in-out w-full ${current === "Individual" ? "h-[2px] opacity-100" : "h-0 opacity-0"}`}/>
                    </div>
                    <div className="ml-0 md:ml-[2em] mt-[1em] md:mt-0">  
                        <p className={`text-[1.3rem] lg:text-[1.5rem] cursor-pointer ${current == "Collaborative" ? "text-white": "text-[#504c4c] hover:text-white ease-in-out duration-[0.3s]"}`} onClick={() => {setCurrent("Collaborative")}}>Collaborative</p>
                        <div className={`bg-white overflow-hidden transition-all duration-300 ease-in-out w-full ${current === "Collaborative" ? "h-[2px] opacity-100" : "h-0 opacity-0"}`}/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between mt-[2em]">
                    {current == "All" && projects.map((project) => {
                        return(
                            <div key={project.name} className="w-[100%] lg:w-[49%] mt-[2em]">
                                <ProjectBox name={project.name} year={project.year} image={project.image} url={project.url} centered={project.centered}  />
                            </div>
                        )
                    })}
                    {current === "Individual" && projects.map((project) => {
                        if (project.type == "Individual"){
                            return(
                                <div key={project.name} className="w-[100%] lg:w-[49%] mt-[2em]">
                                    <ProjectBox name={project.name} year={project.year} image={project.image} url={project.url} centered={project.centered}  />
                                </div>
                            )
                        }
                    })}
                    {current == "Collaborative" && projects.map((project) => {
                        if (project.type == "Collaborative"){
                            return(
                                <div key={project.name} className="w-[100%] lg:w-[49%] mt-[2em]">
                                    <ProjectBox name={project.name} year={project.year} image={project.image} url={project.url} centered={project.centered}  />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
        <FAQ />
        <Footer />
        </>
    );
}

export default ProjectsPage;