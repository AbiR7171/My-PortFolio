import React, { useContext } from 'react';
import Lottie from "lottie-react";
import { FaDownload } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import animation2 from "../assets/LottieAnimation/130620-coding.json"
import animation3 from "../assets/LottieAnimation/animation3 (1).json"
import animation4 from "../assets/LottieAnimation/animation3 (2).json"
import { ColourContext } from './LeftSideNav';

const Home = () => {
    const {colour}= useContext(ColourContext)
    console.log(colour);

   
    return (
        <div id='Home' className='font-serif lg:flex items-center justify-center lg:p-12 p-2 z-20'>
            <div  className='lg:w-1/2'>
                <h2 style={{color:`${colour}`}} className="text-3xl">Hi <span className='text-black'>I'M</span> </h2> 
                <h3  className={`text-5xl uppercase`}>Yeasin Emtiag</h3>
                 <p style={{color:`${colour}`}}> <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I AM A MERN STACK DEVELOPER',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I AM A REACT DEVELOPER ',
        1000,
        'I AM A NODE DEVELOPER',
        1000,
        'I AM A EXPRESS DEVELOPER',
        1000
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></p>
    <p>
    I Am professional react developer and comportable to work with server
    side and database. I am stable to work with team and make unique
     webpage template. I want to be a super performing MERN Stack
     Developer. 
    </p>
    <a className='font-col p-4 rounded-md mt-2 flex  items-center gap-1 lg:w-1/3 z-50'  href="/public/Resume/Yeasn emtiag abir Resuem3.pdf" download > <FaDownload/> Download Resume</a>
            </div>
            <div data-aos="fade-left"   className='lg:w-1/2'>
            <Lottie animationData={animation4} loop={true} />
            </div>
        </div>
    );
};

export default Home;