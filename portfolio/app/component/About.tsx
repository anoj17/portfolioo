'use client'

import React, { useState } from 'react'
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import Image from 'next/image';
import anoj from '../assets/anoj.png'
import { ImCross } from "react-icons/im";
import Tools from './Tools';
import { motion } from 'framer-motion'

interface iappProp {
  popup: any,
  setPopup: any
}

export const Title = ({ title }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: 2, x: "-50%" }}
      className="absolute bg-gray-800 text-white px-2 py-1 rounded"
      style={{ left: "50%", transform: "translateX(-50%)" }}
    >
      {title}
    </motion.div>
  )
}

const About = ({ popup, setPopup }: iappProp) => {

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <>
      {popup && (
        <div className=' w-full absolute transition-all duration-300 py-5 md:py-14 ease-in-out bg-white/80 dark:bg-black/80 flex justify-center items-center z-50 text-white'>
          <div className='bg-white shadow drop:shadow-md dark:bg-black text-black dark:text-white flex flex-col w-full h-full md:w-[95%] lg:w-[70%] px-8 lg:px-8 md:px-16 py-7'>
            <div className='flex justify-between items-center md:pr-20'>
            <h1 className='text-black dark:text-white my-3 text-2xl'>About Me</h1>
            <ImCross size={25} className='text-black dark:text-white cursor-pointer' onClick={()=>setPopup(!popup)} />
              </div>
          <div className='flex flex-col md:flex-row py-6'>
            <div className='flex flex-col w-full md:w-2/3'>
              <div className='flex flex-col space-y-5'>
                <p className='text-[1rem] font-mono'>
                  I am Anoj Budathoki, a passionate Software Engineering student at Nepal College of Information Technology.
                  I am constantly exploring new technologies and honing my skills. My journey in software development is driven by curiosity,
                  creativity, and a commitment to building innovative solutions. Technologies and tools that I used to build websites.
                </p>
                <div className='flex py-2 flex-wrap md:gap-4 gap-3'>
                  <Tools items='#html'/>
                  <Tools items='#css'/>
                  <Tools items='#javascript'/>
                  <Tools items='#tailwind'/>
                  <Tools items='#react.js'/>
                  <Tools items='#next.js'/>
                  <Tools items='#github'/>
                  <Tools items='#mongoDB'/>
                  <Tools items='#redux'/>
                  <Tools items='#mongoose'/>
                  <Tools items='#express.js'/>
                  <Tools items='#node.js'/>
                </div>
                <div className='flex flex-col space-y-4 py-7'>
                  <h1 className='text-blue-600 font-semibold text-xl'>MERN STACK</h1>
                  <div className='flex py-3 pr-10 md:pr-0 lg:space-x-14 md:space-x-10 space-x-2'>
                    <div className='relative'>
                      <DiMongodb
                        size={90}
                        className='text-green-700 -ml-8 md:ml-0'
                        onMouseEnter={() => setHoveredIcon('MongoDB')}
                        onMouseLeave={() => setHoveredIcon(null)}
                      />
                      {hoveredIcon === 'MongoDB' && <Title title='MongoDB' />}
                    </div>
                    <div className='relative'>
                      <SiExpress
                        size={90}
                        onMouseEnter={() => setHoveredIcon('Express.js')}
                        onMouseLeave={() => setHoveredIcon(null)}
                      />
                      {hoveredIcon === 'Express.js' && <Title title='Express.js' />}
                    </div>
                    <div className='relative'>
                      <FaReact
                        size={90}
                        className='text-blue-600'
                        onMouseEnter={() => setHoveredIcon('React.js')}
                        onMouseLeave={() => setHoveredIcon(null)}
                      />
                      {hoveredIcon === 'React.js' && <Title title='React.js' />}
                    </div>
                    <div className='relative'>
                      <IoLogoNodejs
                        size={90}
                        className='text-green-500'
                        onMouseEnter={() => setHoveredIcon('Node.js')}
                        onMouseLeave={() => setHoveredIcon(null)}
                      />
                      {hoveredIcon === 'Node.js' && <Title title='Node.js' />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center pr-6 md:pr-0'>
              <Image src={anoj} alt='anoj' className='lg:h-[500px] lg:w-[350px]'/>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  )
}

export default About
