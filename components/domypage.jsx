// import React from 'react';
// import Image from 'next/image';
// import project1img from "../public/projects/1.png";
// const projectsData = [
//     {
//         id: 1,
//         title: "React Portfolio Website",
//         description: "project 1 description",
//         tag: ["All", "Web"],
//     },
// ];

// const Projectsection = () => {
//     return (
//         <>
//             <h2 className='text-white'>My Projects</h2>
//             <div className="grid grid-cols-2 gap-4">
//                 {projectsData.map((project) => (
//                     <div key={project.id} className="bg-gray-200 p-4 rounded-md">
//                         <h3 className="text-xl font-semibold">{project.title}</h3>
//                         <p>{project.description}</p>
//                         <Image src={project1img} alt={project.title} className="mt-2 w-full" />
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Projectsection;

// ================================================================= achivement section

// "use client";
// import React from 'react'
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(
//   () => {
//     return import ("react-animated-numbers")
//   }, 
//   {ssr: false}
//   );

// const achievementsList = [
//     {
//         metric: "Projects",
//         value: "100",
//         postfix: "+",
//     },
//     {
//         prefix:"~",
//         metric: "Projects",
//         value: "100,000",
//     },
//     {
//         metric: "Projects",
//         value: "7",
//     },
//     {
//         metric: "Projects",
//         value: "5",
//     },
// ]

// const Achievements = () => {
//   return (
//     <div className='py-8 px-4 xl-gap-16 sm:py-16 xl:px-16'>
//         <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
//          {
//             achievementsList.map((achievement, index) => {
//             return (
//               <div key={index} className='flex flex-col justify-center mx-4'>
//                <h2 className='text-white text-4xl font-bold'>
//                 {achievement.prefix}
//                 <AnimatedNumbers 
//                  includeComma
//                  animateToNumber={parseInt(achievement.value)}
//                  locale='en-US'
//                  className='text-white text-4xl font-bold'
//                  configs={((_, index) =>{
//                   return{
//                     mass: 1,
//                     friction: 100,
//                     tensions: 140 * (index + 1),
//                   }
//                  })}
//                 />
//                 {achievement.prefix}
//                </h2>
//                <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
//               </div>
//             );
//             })}
//          </div>
//     </div>
//   );
// };

// export default Achievements