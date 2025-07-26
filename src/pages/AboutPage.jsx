import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import Gallery from "../components/Gallery.jsx";

function AboutPage(){
    return(
        <>
            <header>
                <Navbar current={"about"} />
            </header>
            
            <main>
                <section className="bg-[#141414]">
                    <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[1em] md:px-[2em]">
                        <p className="text-white font-medium text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[10rem]">ABOUT</p>
                        <div className="flex items-center flex-col lg:flex-row mt-[5em] lg:mt-[1em]">
                            <div className="w-[min(100%,400px)] min-w-[200px] lg:w-[50%]">
                                <div className="rounded-[20px] aspect-[8/9] overflow-hidden w-[100%] lg:w-[75%]">
                                    <img src="about.jpg" className="w-full h-full object-cover"></img>
                                </div>
                            </div>
                            <div className="w-[100%] lg:w-[50%] px-0 md:px-[4em] lg:px-0">
                                <p className="font-medium text-[2.7rem] lg:text-[4.5rem] leading-[1em] mt-[0.4em] text-white mt-[1em] lg:mt-0" style={{fontFamily: "figtree"}}>Welcome to my Creative World</p>
                                <p className="text-white pt-[2em]">My journey into the world of technology began during my university years, where I discovered a deep passion for problem-solving and building impactful digital experiences. Fascinated by how software can shape the way we live and interact, I chose to pursue a degree in Computer Science with the goal of becoming a software engineer.</p>
                                <p className="text-white pt-[1em]">Today, I'm driven by a desire to create tools and applications that not only function seamlessly but also improve people's lives through thoughtful design and efficient engineering.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <Gallery text={"black"} bg={"#f8f8f8"} title1={"When I'm not Studying"} title2={"I Watch Anime"} image1={"oregairu.png"} image2={"HxH.jpg"} image3={"stone.jpg"} image4={"haikyu.jpg"} />
                </section>
                
                <section>
                    <Gallery text={"white"} bg={"#141414"} title1={"I Enjoy Reading"} title2={"as Well!"} image1={"solo.jpg"} image2={"tbate.jpg"} image3={"windbreaker.png"} image4={"cote.jpg"} />
                </section>

                <section className="bg-[#f8f8f8]">
                    <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[1em] md:px-[2em] flex items-center flex-col lg:flex-row">
                        <div className="w-[100%] lg:w-[50%]">
                            <div className="border border-black w-fit px-[1em] rounded-[20px] flex items-center">
                                <div className="w-2 h-2 rounded-full bg-[#84fc1c]"></div>
                                <p className="ml-[0.5em] text-[0.7rem] lg:text-[1.1rem] text-black whitespace-nowrap">MINDSET</p>
                            </div>
                            <p className="font-medium text-[2.7rem] lg:text-[4.5rem] leading-[1em] mt-[0.4em] text-black mt-[0.3em] w-[60%]" style={{fontFamily: "figtree"}}>MY PHILOSOPHY</p>
                        </div>
                        <div className="w-[100%] lg:w-[50%] text-black mt-[2em] lg:mt-0">I believe great software is not just built with code — it's crafted with curiosity, clarity, and care.<br />As a developer-in-training, I see every bug as a learning opportunity and every project as a chance to grow. I value clean, maintainable code and strive to write software that balances functionality with user experience.<br />To me, technology should be accessible, human-centered, and purposeful. Whether I'm building a frontend interface or exploring backend logic, I aim to create tools that make a meaningful difference in people's lives.<br />I'm driven by a simple mindset:<br />Keep learning, stay humble, and build what matters.</div>
                    </div>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default AboutPage;