"use client";
import React from 'react';
import Image from 'next/image';
import heroImage from "../public/images/hero-image.png";
import { TypeAnimation } from 'react-type-animation';

// first section design hire me
const Hero = () => {
  return (
   <section>
    <div className=' grid grid-cols-1 lg:grid-cols-12'>
   <div className='col-span-7 place-self-center text-center sm:text-left'>
    <h1 className='text-white mb-4 sm:text-5xl lg:text-[53px] text-4xl font-extrabold'>
      <span className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600'>Hello, I'm {" "}</span>
      <TypeAnimation
      sequence={[
        'Priyanka',
        1000, 
        'Web Developer',
        1000,
        'FrontEnd Dev..',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
  
      repeat={Infinity}
    /></h1>
    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptas at vitae vero libero nam sit. Labore officiis qui excepturi enim, atque ad nostrum, suscipit tempore deleniti minus beatae? Dolor.
    </p>
    <div>
      <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 lg:mb-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white'>Hire Me</button>
      <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
       <span className='block
        bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span> 
        </button>
    </div>
    </div>
    <div className='col-span-5 place-self-center mt-5 lg:mt-0'>
    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] relative'>
    <Image src={heroImage}
     alt="hero image"
     width={300}
     height={300}
     className=' absolute '
    //  transform -translate-x-1/2 -translate-y-1/2 left-1/2
     />
     </div>
     
    </div>
    </div> 
   </section>
  )
}

export default Hero