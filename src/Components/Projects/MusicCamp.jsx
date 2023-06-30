import React from 'react';
import pic1 from "../../assets/SS/Music-cmap/Screenshot_1.png"
import pic2 from "../../assets/SS/Music-cmap/Screenshot_2.png"
import pic3 from "../../assets/SS/Music-cmap/Screenshot_3.png"
import pic4 from "../../assets/SS/Music-cmap/Screenshot_4.png"
import pic5 from "../../assets/SS/Music-cmap/Screenshot_5.png"
import { Icon } from '@iconify/react';


const MusicCamp = () => {
    const color = localStorage.getItem("color")
    return (
       <div className='mt-10 '>
        <p className="text-2xl uppercase text font-serif font-bold text-center mb-2">Music camp</p>
        <p style={{backgroundColor:`${color ? color : "#FF3CAC"}`}}  className='divider w-1/5 mx-auto  h-1 rounded mb-10'/>
         <div className='container mx-auto lg:flex flex-row-reverse gap-5 font-serif p-4'>
            <div data-aos="fade-left"  style={{boxShadow:`1px 1px 1px 2px  ${color ? color : "#FF3CAC"}`}} className="mockup-code bg-black    lg:w-2/5">
            <p style={{color:`${color ? color : "#FF3CAC"}`}} className='ms-10  text-2xl'>Summer camp Music school</p>
            <p className='ms-10 underline mt-2 text-orange-500'>Key Feature</p>
            <p className='ms-10'><p> 1.Role management: Admin can assign admin and instructor
             roles to users.</p></p> 
             <p className='ms-10'><p>2. Class creation: Instructors can add new classes.</p></p> 
             <p className='ms-10'><p>3.Class purchase: Students can buy their favorite classes.</p></p>
             <p   className='ms-10 text-orange-500 underline mt-2'>Technology</p>
              <p className='ms-10 '>
                <div className='grid grid-cols-5 mt-1 gap-3 '>
                <Icon className='text-3xl' icon="logos:react" />
                <Icon className='text-3xl' icon="devicon:tailwindcss" />
                <Icon  className='text-3xl' icon="vscode-icons:file-type-node" />
                <Icon className='text-3xl bg-white' icon="devicon:express-wordmark" />
                <Icon className='text-3xl' icon="skill-icons:mongodb" />
                <Icon className='text-4xl text-yellow-400' icon="devicon-plain:firebase-wordmark" />
                <Icon className='text-2xl' icon="logos:daisyui" />
                <Icon className='text-3xl' icon="logos:jwt" />
                <Icon className='text-1xl' icon="logos:axios" />
                </div>
                </p>
                <p   className='text-orange-500 ms-10 mt-3 underline'>Links</p>
                <div className='flex gap-2 ms-10 mt-2'>
                  <a className='flex items-center btn btn-sm bg-black text-white border-0' target='_blank' href="https://github.com/AbiR7171/Music-camp-client">Client<Icon className='text-white bg-white' icon="icon-park:github" /></a>
                  <a className='flex items-center btn btn-sm bg-black text-white border-0' target='_blank'  href="https://github.com/AbiR7171/Music-camp-client">server<Icon className='text-white bg-white' icon="icon-park:github" /></a>
                  <a className='flex items-center btn btn-sm bg-red-700 text-white border-0'target='_blank'  href="https://music-camp-86339.web.app/">Live Site <Icon icon="iconoir:arrow-tr" /> </a>
                </div>
          </div>
           <a data-aos="fade-right"  href="https://music-camp-86339.web.app/" target='_blank'>
           <div style={{boxShadow:`1px 1px 1px 3px  ${color ? color : "#FF3CAC"}`}}  className="mockup-window border bg-red-300  w-full  h-[420px]">
            <div  className="flex justify-center  bg-red-200 flex-col "> 
               <div className='w-full h-44  hover:-translate-y-[2500px] duration-1000'>
               <img src={pic1} className='w-full' alt="" />
                <img src={pic2} className='w-full'  alt="" />
                <img src={pic3} className='w-full'  alt="" />
                <img src={pic4} className='w-full'  alt="" />
                <img src={pic5} className='w-full'  alt="" />
               </div>
             
            </div>
        </div>
           </a>
        </div>
       </div>
    );
};

export default MusicCamp;