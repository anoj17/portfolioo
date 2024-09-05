"use client";
import React from "react";
import Image from "next/image";
import StickyScroll from "./ui/ScrollAnimation";
import PinContainer from "./ui/3d-pin";
import foodStore from '../assets/foodStore.png'
import weather from '../assets/weather.png'
import defi from '../assets/defi.png'
import todo from '../assets/todo.png'

const content = [

  {
    title: "Weather App",
    description:
      "The Weather App is a website that provides weather conditions for any location. It is built using React.js and Tailwind CSS, and it includes a weather API to fetch the data. The website also features a search functionality to look up weather information by place. ",
    content: (
      <div className='h-full w-full'>
        <PinContainer
          title='Weather App'
          href='https://weather-app-4a7q.vercel.app/'
          className='w-[350px] h-[280px] flex justify-center items-center flex-col'
          containerClassName=''
        >
          <div className='px-5 space-y-3'>
            <p className='font-semibold uppercase font-mono text-xl'>Weather App</p>
            <Image src={weather} alt="Project Image" className='h-[200px] w-[300px] rounded-xl' />
          </div>
        </PinContainer>
      </div>
    ),
  },
  {
    title: "Food Store",
    description:
      "Food store is an e-commerce website built using Next.js and Tailwind CSS for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. The platform allows users to add products and purchase multiple items.",
    content: (
      <div className='h-full w-full'>
        <PinContainer
          title='Food Store'
          href='https://food-delivery-frontend-alpha.vercel.app/'
          className='w-[350px] h-[280px] flex justify-center items-center flex-col'
          containerClassName=''
        >
          <div className='px-5 space-y-3'>
            <p className='font-semibold uppercase font-mono text-xl'>Food Store</p>
            <Image src={foodStore} alt="Project Image" className='h-[200px] w-[300px] rounded-xl' />
          </div>
        </PinContainer>
      </div>
    ),
  },
  {
    title: "Dummy Website",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className='h-full w-full'>
        <PinContainer
          title='Weather App'
          href='https://defi-web-app.vercel.app/'
          className='w-[350px] h-[280px] flex justify-center items-center flex-col'
          containerClassName=''
        >
          <div className='px-5 space-y-3'>
            <p className='font-semibold uppercase font-mono text-xl'>Dummy Website</p>
            <Image src={defi} alt="Project Image" className='h-[200px] w-[300px] rounded-xl' />
          </div>
        </PinContainer>
      </div>
    ),
  },
  {
    title: "Todo List",
    description:
      "It is a to-do list where you can add, delete, and update tasks. The application is made using pure HTML, CSS, and JavaScript, ensuring a lightweight and fast experience. The interface is user-friendly, allowing for easy task management. Whether you're organizing daily chores or long-term projects, this to-do list helps you stay on track.",
    content: (
      <div className='h-full w-full'>
        <PinContainer
          title='Todo List'
          href='https://to-do-list-gules-pi.vercel.app/'
          className='w-[350px] h-[280px] flex justify-center items-center flex-col'
          containerClassName=''
        >
          <div className='px-5 space-y-3'>
            <p className='font-semibold uppercase font-mono text-xl'>Todo list</p>
            <Image src={todo} alt="Project Image" className='h-[200px] w-[300px] rounded-xl' />
          </div>
        </PinContainer>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className=" md:w-[70rem] font-mono hidden md:flex mr-20 flex-col">
      <StickyScroll content={content} />
    </div>
  );
}
