import { FaCirclePlus } from 'react-icons/fa6';
import { FaCircleMinus } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function FAQ() {
    const questions = [
    {
        id: "1",
        question: "How do you approach a new project?",
        answer:
        "I start by understanding the problem and defining clear goals. Then, I break the project into smaller tasks, choose the right tools, and plan the structure. From there, I build iteratively, test often, and stay adaptable. I also reflect after each project to improve for the next one."
    },
    {
        id: "2",
        question: "What tools do you commonly use for development?",
        answer:
        "I frequently use VS Code, GitHub for version control, and tools like Figma for design. For front-end projects, I prefer React with Tailwind CSS. On the backend, I usually work with Node.js, Express, and PostgreSQL or Firebase depending on the project needs."
    },
    {
        id: "3",
        question: "How do you collaborate with team members?",
        answer:
        "I ensure clear communication using tools like Slack or Discord and manage tasks via Notion or Trello. I like to split responsibilities clearly, sync frequently, and use Git branching strategies like feature branches to avoid conflicts."
    },
    {
        id: "4",
        question: "How do you handle project deadlines?",
        answer:
        "I start by estimating the time for each major task, then break them into smaller milestones. I prioritize critical paths first, buffer in time for testing and review, and constantly check progress to adapt if needed."
    },
    {
        id: "5",
        question: "How do you stay updated with new technologies?",
        answer:
        "I regularly explore tech blogs, follow industry leaders on platforms like Twitter and LinkedIn, and experiment with new tools or frameworks during side projects. I also take online courses to deepen my skills when needed."
    }
    ];
    const [activeQuestion, setActiveQuestion] = useState(null);
    return(
        <div className="bg-[#f8f8f8]">
            <div className="max-w-[1300px] mx-auto py-[5em] lg:py-[8em] px-[1em] md:px-[2em] flex">
                <div className="flex w-[100%] flex-col lg:flex-row">
                    <div className="w-[100%] lg:w-[40%]">
                        <div className="border w-fit px-[1em] rounded-[20px] flex items-center">
                            <div className="w-2 h-2 rounded-full bg-[#84fc1c]"></div>
                            <p className="ml-[0.5em] text-[0.7rem] lg:text-[1.1rem]">FAQ</p>
                        </div>
                        <p className="font-medium text-[3rem] lg:text-[4.5rem] leading-[1em] mt-[0.4em] text-black mt-[0.3em] pr-[1em]" style={{fontFamily: "figtree"}}>Questions & Answers</p>
                    </div>
                    <div className="w-[100%] lg:w-[60%] flex flex-col pt-[1em] lg:pt-0">
                        <div className='w-[100%]'>
                            {questions.map((q) => (
                                <div key={q.id} className='w-[100%]'>
                                    <div className='w-[100%] flex cursor-pointer py-[0.8em] text-[1.2rem] lg:text-[1.3rem] items-center' onClick={() => {setActiveQuestion(activeQuestion == q.id ? null: q.id)}}>
                                        <p className='grow'>{q.question}</p>
                                        {activeQuestion == q.id ? <FaCircleMinus className='flex-shrink-0 ml-[1em]' />: <FaCirclePlus className='flex-shrink-0 ml-[1em]' />}
                                    </div>
                                    <AnimatePresence>
                                        {activeQuestion == q.id && (
                                            <motion.div initial={{opacity: 0, height: 0}} animate={{opacity: 1, height: "auto"}} exit={{opacity: 0, height: 0}}>
                                                <p>{q.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <div className={`w-[100%] h-[0.1px] bg-black ${activeQuestion == q.id ? "mt-[1em]": "mt-0"}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;