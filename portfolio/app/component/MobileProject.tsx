import React from 'react'
import Image from "next/image";
import PinContainer from "./ui/3d-pin";
import foodStore from '../assets/foodStore.png'
import weather from '../assets/weather.png'
import defi from '../assets/defi.png'
import todo from '../assets/todo.png'

const MobileProject = () => {
    return (
        <div className='w-full px-5 z-10 py-10 flex  dark:text-white text-black flex-col md:hidden'>
            <div className='w-full px-5 py-10 flex flex-col space-y-10'>
                <PinContainer
                    title='Food Store'
                    href='https://food-delivery-frontend-alpha.vercel.app/'
                    className='w-[330px] h-[270px] text-[.9rem] flex justify-center items-center flex-col'
                    containerClassName=''
                >
                    <div className='px-5 space-y-3'>
                        <p className='font-semibold font-mono text-[.9rem]'>Food Store</p>
                        <Image src={foodStore} alt="Project Image" className='h-[200px] w-[300px] rounded-xl' />
                    </div>
                </PinContainer>
                <div className='flex items-center text-white'>
                <p className= 'text-[1rem] text-center text-black dark:text-white font-mono flex flex-wrap'>Food store is an e-commerce website built using Next.js and Tailwind CSS for the frontend, Node.js and Express.js for the backend, and MongoDB for the database. The platform allows users to add products and purchase multiple items.</p>
                </div>
            </div>

            <div className='w-full px-5 py-10 flex flex-col  space-y-10'>
                <PinContainer
                    title='Weather App'
                    href='https://weather-app-4a7q.vercel.app/'
                    className='w-[330px] h-[270px] flex justify-center items-center flex-col'
                    containerClassName=''
                >
                    <div className='px-5 space-y-3'>
                        <p className='font-semibold font-mono text-[.9rem]'>Weather App</p>
                        <Image src={weather} alt="Project Image" className='h-[200px] w-[300px] rounded-xl' />
                    </div>
                </PinContainer>
                <p className='text-black dark:text-white text-[1rem] text-center font-mono'>The Weather App is a website that provides weather conditions for any location. It is built using React.js and Tailwind CSS, and it includes a weather API to fetch the data. The website also features a search functionality to look up weather information by place.</p>
            </div>

            <div className='w-full px-5 py-10 flex flex-col  space-y-10'>
                <PinContainer
                    title='Dummy Website'
                    href='https://defi-web-app.vercel.app/'
                    className='w-[330px] h-[270px] flex justify-center items-center flex-col'
                    containerClassName=''
                >
                    <div className='px-5 space-y-3'>
                        <p className='font-semibold font-mono text-[.9rem]'>Dummy Website</p>
                        <Image src={defi} alt="Project Image" className='h-[200px] w-[300px] rounded-xl' />
                    </div>
                </PinContainer>
                <p className='text-black dark:text-white text-[1rem] text-center font-mono'>Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.</p>
            </div>

            <div className='w-full px-5 py-10 flex flex-col space-y-10'>
                <PinContainer
                    title='Todo List'
                    href='https://to-do-list-gules-pi.vercel.app/'
                    className='w-[330px] h-[270px] flex justify-center items-center flex-col'
                    containerClassName=''
                >
                    <div className='px-5 space-y-3'>
                        <p className='font-semibold font-mono text-[.9rem]'>Todo List</p>
                        <Image src={todo} alt="Project Image" className='h-[200px] w-[300px] rounded-xl' />
                    </div>
                </PinContainer>
                <p className='dark:text-white text-black text-[1rem] text-center font-mono'>It is a to-do list where you can add, delete, and update tasks. The application is made using pure HTML, CSS, and JavaScript, ensuring a lightweight and fast experience. The interface is user-friendly, allowing for easy task management. Whether you're organizing daily chores or long-term projects, this to-do list helps you stay on track.</p>
            </div>
        </div>
    )
}

export default MobileProject
