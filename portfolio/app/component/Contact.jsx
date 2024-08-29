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
    <div className='flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 space-x-0 md:space-x-10 py-3 z-40'>
      <div className='md:w-1/2 text-white'>
        <IconCloudDemo />
      </div>
      <form ref={form} className='space-y-7 px-5 w-full md:w-1/2' onSubmit={sendEmail}>
        <input className='border border-blue-900 rounded-xl px-5 py-4 w-full text-white' name='to_name' type='text' placeholder='Full Name' />
        <input className='border border-blue-900 rounded-xl px-5 py-4 w-full text-white' name='from_name' type='email' placeholder='email' />
        <textarea placeholder='message' className='w-full border px-5 py-3 md:h-[200px] rounded-xl' name='message' />
        <button type='submit' className='px-5 w-full md:w-[100px] py-3 transition-all duration-300 text-white dark:text-white border bg-blue-600 text-[1rem] rounded-xl'>SUBMIT</button>
      </form>
    </div>
  </>
}

export default Contact