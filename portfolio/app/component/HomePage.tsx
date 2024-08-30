'use client'

import React, { useRef, useState } from 'react'
import { GrInstagram } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from 'react-scroll'
import Links from 'next/link'
import Button from './Button';
import Project from './Project'
import Contact from './Contact'

interface iappPop {
    popup: any,
    setPopup: any
}


const HomePage = ({ popup, setPopup }: iappPop) => {

    const [scroll, setScroll] = useState(false)
    const projectRef = useRef<HTMLDivElement>(null)

    const clickPop = () => {
        setPopup(!popup)
        document.body.style.overflow = 'unset'
    }

    const scrollToProjects = () => {
        setScroll(true)
        projectRef.current?.scrollIntoView({ behavior: 'smooth' })
    };
    return (
        <div className={`flex flex-col h-[89vh] z-40 scroll-y-auto scrollbar-hide ${scroll ? 'overflow-y-scroll' : 'overflow-hidden '}`}>
            <div className="z-10 w-full flex flex-col lg:pl-44 md:pl28 pr-10 md:pr-0 items-center justify-center">
                <div className="z-10 w-full flex items-center justify-between font-mono">
                    <div className=' items-center pl-7 md:pl-0 mt-16 px-auto justify-center'>
                        <div className='flex flex-col-reverse md:flex-row mx-auto z-10 md:pt-20 lg:pt-0 w-full items-center justify-center'>
                            <div className='flex flex-col space-y-7 md:space-y-0 w-full'>
                                <div className='flex flex-col space-y-3 text-black dark:text-white'>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl">Hello,</h1>
                                    <h1 className="text-2xl md:text-3xl flex flex-wrap lg:text-5xl">I'm Anoj Budathoki</h1>
                                    <h1 className="text-2xl md:text-3xl lg:text-5xl">Frontend Developer</h1>
                                </div>
                                <div className="flex jsutify-center items-center space-x-14 md:space-x-0">
                                    <div className="flex jsutify-center w-[140px] md:mt-10 md:w-auto items-center">
                                        <Button item='About me' className='hover:ml-1 transition-all ease-in-out' clickPopup={clickPop} />
                                        <FaArrowRightLong size={20} className='text-black dark:text-gray-300 -ml-1' />
                                    </div>
                                    <div className="flex jsutify-center md:hidden items-center">
                                            <button className={`hover:ml-1 duration-300 transition-all ease-in-ou px-3 rounded-xl text-white text-[1rem] bg-black md:text-xl py-2 dark:bg-blue-600`}
                                            onClick={scrollToProjects}
                                            >
                                                my Project
                                            </button>                                     
                                        <FaArrowRightLong size={20} className='text-black dark:text-gray-300 -ml-1' />
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-left items-left'>
                                <svg className="h-auto w-[300px] lg:h-[500px] md:w-[350px] lg:w-[650px]" viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="#3675eb" strokeOpacity="1" strokeWidth="16" />
                                    <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="url(#paint0_linear)" strokeWidth="16" />
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="205.549" y1="20.0169" x2="204.338" y2="342.461" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#1595B6" />
                                            <stop offset="1" stopColor="#1595B6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex space-y-7 md:pt-10 flex-col md:mt-28 mt-10'>
                        <Links href={'https://www.instagram.com/anojbudathoki_02/'} target='_blank'>
                            <GrInstagram size={40} className="cursor-pointer text-gray-500 hover:text-blue-700"/>
                        </Links>
                        <Links href={'https://www.facebook.com/anoj.anoj.73997'} target='_blank'>
                            <FaFacebookF size={40} className="cursor-pointer text-gray-500 hover:text-blue-700"/>
                        </Links>
                        <Links href={'https://mail.google.com/mail/u/0/#inbox'} target='_blank'>
                            <IoIosMail size={40} className="cursor-pointer text-gray-500 hover:text-blue-700" />
                        </Links>
                        <Links href={'https://github.com/anoj17'} target='_blank'>
                            <IoLogoGithub size={40} className="cursor-pointer text-gray-500 hover:text-blue-700" />
                        </Links>
                    </div>
                </div>
                <div className='md:flex flex-col justify-center items-center hidden mt-6'>
                    {/* <Link
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={100}
                        duration={500}
                        onClick={scrollToProjects}
                    > */}
                        <button className={`hover:mt-1 duration-300 transition-all ease-in-ou px-3 rounded-xl text-white text-[1rem] bg-black md:text-xl py-2 dark:bg-blue-600`}
                        onClick={scrollToProjects}
                        >
                            my Project
                        </button>
                    {/* </Link> */}
                    <FaArrowDown size={20} className='text-black dark:text-gray-300' />
                </div>
            </div>
            <div className='flex flex-col text-white py-20' ref={projectRef}>
                <Project />
            </div>
            <div className='flex flex-col py-10 space-y-5'>
                <h1 className='text-center text-black dark:text-white uppercase font-semibold text-3xl'>Get In Touch</h1>
                <Contact />
            </div>

        </div>
    )
}

export default HomePage