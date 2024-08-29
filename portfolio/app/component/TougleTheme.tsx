import React, { useEffect, useState } from 'react'
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";

interface iappDark {
  dark: any,
  setDark: any
}

const TougleTheme = ({dark, setDark}: iappDark) => {

    const changeTougle = () => {
        console.log("Hellooooooo")
        setDark(!dark)
    }


    useEffect(()=>{
        const theme = localStorage.getItem("theme")
        if(theme == 'dark') setDark(true)
    },[])

    useEffect(()=>{
        if(dark){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
    },[dark])

  return (
    <div className="" onClick={changeTougle}> 
      {
        !dark ? <IoMoon size={30} className='text-blue-600 cursor-pointer'/> : <MdSunny size={40} className='text-blue-600 cursor-pointer'/>
      }
    </div>
  )
}

export default TougleTheme
