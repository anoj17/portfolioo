import IconCloudDemo from './IconCloud'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_ss5azbl', 'template_x9v8r9n', form.current, '1CMhRYlZO-l8R7sZK')
        .then(
          (result) => {
            console.log(result.text);
            console.log('Message sent!');
            toast("Message Sent successfully!", {
              style: {
                background: '#363636',
                color: '#fff',
              },
            })
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    } else {
      console.log('Form reference is not set.');
    }
  };

  return <>
    <div className='flex flex-col md:flex-row md:px-0 justify-center items-center space-y-10 md:space-y-0 space-x-0 md:space-x-5 lg:space-x-10 py-3 z-40'>
      <div className='w-full text-white'>
        <IconCloudDemo />
      </div>
      <form ref={form} className='space-y-7 px-5 w-full' onSubmit={sendEmail}>
        <input className='border dark:border-white border-black rounded-xl dark:bg-black bg-white px-5 text-black py-4 w-full dark:bg-black dark:text-white' name='to_name' type='text' placeholder='Full Name' />
        <input className='border dark:border-white border-black rounded-xl dark:bg-black bg-white px-5 text-black py-4 w-full dark:bg-black dark:text-white' name='from_name' type='email' placeholder='email' />
        <textarea placeholder='message' className='w-full border dark:border-white border-black px-5 dark:bg-black py-3 h-[200px] rounded-xl dark:bg-black bg-white' name='message' />
        <button type='submit' className='px-5 w-full md:w-[100px] py-3 transition-all duration-300 dark:text-white bg-blue-600 dark:text-white text-black border dark:border-white border-black text-[1rem] rounded-xl'>SUBMIT</button>
      </form>
    </div>
  </>
}

export default Contact