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