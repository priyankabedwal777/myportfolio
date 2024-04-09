"use client";
import React,{useTransition,useState} from 'react';
import Image from 'next/image';
import Tabbutton from './tabbutton';

const TAB_DATA = [
    {
    title: "Skills",
    id: "skills",
    content: (
        <ul className='list-disc pl-2'>
            <li>HTML</li>
            <li>CSS</li>
            <li>javaScript</li>
            <li>jQuery</li>
            <li>BootStrap</li>
            <li>React js</li>
            <li>Node Js</li>
            <li>Tailwind CSS</li>
        </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    content: (
    <ul className='list-disc pl-2'>
        <li>FrontEnd Developer</li>
        <li>Web Designer</li>
        <li>Web Developer</li>
    </ul> 
    ) 
  },
  {
    title:"Certifications",
    id:"certifications",
    content: (
        <ul className='list-disc pl-2'>
            <li>Ducat India</li>
            <li>Udemy</li>
        </ul>
    )
  }

]
const Aboutsection = () => {
    const [tab, setTab] = useState("skills");
    const [ isPending,startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        });
    };
  return (
   <section className='text-white'>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
     <Image src="/images/about-image.png" width={500} height={500} />
     <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
      <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
      <p className='text-base lg:text-lg'>I am FrontEnd Web Developer  with a passion for creating interactive and responsive web application. I havw expericence working with HTML, CSS, Bootstrap, javaScript, jQuery, Tailwind CSS, React, Next js and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am team player and I am exicted to work with others to createamazing applications.
      </p>
      <div className='flex flex-row justify-start mt-8 '>
        {/* <Tabbutton selectTab={( => handleTabChange("skills")} active={tab === "skills"}>Skills</Tabbutton> */} 
         <Tabbutton
          selectTab={() => handleTabChange("skills")} 
          active={tab === "skills"}>
          {" "}
            Skills{" "}
         </Tabbutton>
         <Tabbutton
          selectTab={() => handleTabChange("education")} 
          active={tab === "education"}>
          {" "}
            Education{" "}
         </Tabbutton>
         <Tabbutton
          selectTab={() => handleTabChange("certifications")} 
          active={tab === "certifications"}>
          {" "}
          Certifications{" "}
         </Tabbutton>
      </div>
      <div className='mt-8'>
      {TAB_DATA.find((t) => t.id === tab).content}
      </div>
     </div>
    </div>
   </section>
  )
}

export default Aboutsection