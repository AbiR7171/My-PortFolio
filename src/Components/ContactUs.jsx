import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';
import animation from "../assets/LottieAnimation/133747-send-email.json"
import Lottie from "lottie-react";
import Swal from 'sweetalert2';

export const ContactUs = () => {

    const color = localStorage.getItem("color")
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`service_pmiebq9`, `template_uetctge`, form.current, `XcQAUR-UvH9Y_ARcs`)
    .then((result) => {
        console.log(result.text);
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Email send',
            showConfirmButton: false,
            timer: 1500
          })
          form.current.reset()
    }, (error) => {
        console.log(error.text);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    });
};
  return (
   <div className='mt-10  font-serif lg:ms-10 '>
    
    <h4 className="text-6xl text-center  mt-20 text font-serif font-bold">Contact Me</h4>
     <div className='lg:flex   items-center'>
     <div data-aos="fade-right"  style={{boxShadow:`1px 1px 1px 2px  ${color ? color : "#FF3CAC"}`}}  className=' lg:w-1/2 border-0 p-4 rounded-lg bg-black text-white mx-auto'>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input placeholder='Your Name' className="input input-bordered input-error w-full block mt-2 mb-2"  type="text" name="user_name" />
      <label>Email</label>
      <input placeholder='Your Email' className="input input-bordered input-error w-full block mt-2 mb-2"  type="email" name="user_email" />
      <label>Message</label>
      <input placeholder='Message' className="textarea textarea-error block w-full h-32 mt-2 mb-2" name="message" />
      <input className='font-col bg-gradient-to-r from-violet-500 to-fuchsia-500 btn px-10 mt-6' type="submit" value="Send Message" /><Icon className='-mt-14 ms-44 text-6xl text-[#ff3CAC]' icon="bi:send-fill" />
    </form>
    </div>
    <div data-aos="fade-left"  className='lg:w-1/2 '>
    <Lottie animationData={animation} loop={true} />
    </div>
     </div>
    
   </div>
  );
};