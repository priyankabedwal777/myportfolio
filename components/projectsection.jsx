"use client";
import React, {useState, useRef} from 'react';
import Image from 'next/image';
import Projectscards from './projectscards';
import Projecttag from './projecttag';
import project1img from "../public/projects/1.png";
import project2img from "../public/projects/2.png";
import project3img from "../public/projects/3.png";
import project4img from "../public/projects/4.png";
import project5img from "../public/projects/5.png";
import project6img from "../public/projects/6.png";
import Link from 'next/link';
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description: "Project 1 description",
        image: project1img,
        tag: ["All", "Web"],
        gitUrl:"https://github.com/priyankabedwal777/newwebsite",
        previewUrl:"https://easycampus.ai/",
    },
    {
        id: 2,
        title: "Project 2",
        description: "Project 2 description",
        image: project2img,
        tag: ["All", "Web"],
        gitUrl:"/",
        previewUrl:"http://89.116.33.93:3050/",
    },
    // {
    //     id: 3,
    //     title: "Project 3",
    //     description: "Project 3 description",
    //     image: project3img,
    //     tag: ["All", "Web"],
    //     gitUrl:"/",
    //     previewUrl:"/",
    // },
    // {
    //     id: 4,
    //     title: "Project 4",
    //     description: "Project 4 description",
    //     image: project4img,
    //     tag: ["All", "Mobile"],
    //     gitUrl:"/",
    //     previewUrl:"/",
    // },
    // {
    //     id: 5,
    //     title: "Project 5",
    //     description: "Project 5 description",
    //     image: project5img,
    //     tag: ["All", "Web"],
    //     gitUrl:"/",
    //     previewUrl:"/",
    // },
    // {
    //     id: 6,
    //     title: "Project 6",
    //     description: "Project 6 description",
    //     image: project6img,
    //     tag: ["All", "Mobile"],
    //     gitUrl:"/",
    //     previewUrl:"/",
    // }
];

const Projectsection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag)
    };

    const filterdProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0},
        animate: { y: 0, opacity:1}
    }

    return (
        <section ref={ref}>
        <div>
            <h2 className='text-white text-center text-2xl font-semibold mt-2'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
            {/* <Projecttag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"}
            /> */}
            {/* <Projecttag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag === "Web"}
            /> */}
            {/* <Projecttag 
            onClick={handleTagChange} 
            name="Mobile" 
            isSelected={tag === "Mobile"}
            /> */}
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-10"> 
                {filterdProjects.map((project) => (
                 <motion.li>  
                    <div key={project.id} className="relative">
                        <div className="group relative">
                            <Image src={project.image} alt={project.title} className='rounded-t-xl' />
                            <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-500'>
                                <Link href={project.gitUrl} className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                                        className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                    </svg>
                                </Link>
                                <Link href={project.previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"  className="h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                </Link>
                            </div>
                        </div>
                        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
                            <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
                            <p className='text-gray-400'>{project.description}</p>    
                        </div>
                        <div
                         gitUrl={project.gitUrl}
                         previewUrl={project.previewUrl}
                         >
                        </div>
                    </div>
                 </motion.li> 
                ))}
            </ul>
            </div>
        </section>
    )
}

export default Projectsection;
