import React from 'react'
import { StickyScrollRevealDemo } from './StickyFile'
import MobileProject from './MobileProject'


const Project = () => {
  return (
    <div className='py-16 z-40 space-y-8 px-3 drop:shadow-md flex flex-col justify-center items-center lg:pr-20'>
      <h1 className='text-center dark:text-white text-black text-3xl font-semibold'>My Project</h1>
      <MobileProject />
      <StickyScrollRevealDemo />
    </div>
  )
}

export default Project
