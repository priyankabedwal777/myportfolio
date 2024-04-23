"use client";
import React from 'react';
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100+",
  },
  {
    metric: "Lines of Code",
    value: "100,000",
  },
  {
    metric: "Years Experience",
    value: "7",
  },
  {
    metric: "Clients Served",
    value: "5",
  },
];

const Achievements = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {achievementsList.map((achievement, index) => (
          <div key={index} className='bg-gray-800 rounded-lg py-6 px-4 sm:p-6 flex flex-col items-center justify-center'>
            <h2 className='text-white text-4xl font-bold mb-2'>
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value.replace(",", ""))}
                locale='en-US'
                className='text-white text-4xl font-bold'
                configs={{ mass: 1, friction: 100, tension: 140 * (index + 1) }}
              />
            </h2>
            <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
