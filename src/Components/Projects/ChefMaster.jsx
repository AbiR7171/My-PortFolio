import React from 'react';
import pic1 from "../../assets/SS/Chef/Screenshot_10.png"
import pic2 from "../../assets/SS/Chef/Screenshot_1.png"
import pic3 from "../../assets/SS/Chef/Screenshot_2.png"
import pic4 from "../../assets/SS/Chef/Screenshot_3.png"
import pic5 from "../../assets/SS/Chef/Screenshot_4.png"
import { Icon } from '@iconify/react';


const ChefMaster = () => {
    const color = localStorage.getItem("color")
    return (
       <div className='mt-10 '>
        <p className="text-2xl uppercase text font-serif font-bold text-center mb-2">Chef Master</p>
        <p style={{backgroundColor:`${color ? color : "#FF3CAC"}`}}  className='divider w-1/5 mx-auto  h-1 rounded mb-10'/>
         <div className='container mx-auto lg:flex  gap-5 font-serif p-4'>
            <div data-aos="fade-right"  style={{boxShadow:`1px 1px 1px 2px  ${color ? color : "#FF3CAC"}`}} className="mockup-code bg-black rounded-lg  lg:w-3/5">
            <p style={{color:`${color ? color : "#FF3CAC"}`}} className='ms-10  text-2xl'>Chef Master Restaurant</p>
            <p className='ms-10 underline mt-2 text-orange-500'>Key Feature</p>
            <p className='ms-10'><p> 1.In The Home Page You Can See About Our chefs..</p></p> 
             <p className='ms-10'><p>2.You Can Also Register In This Website Using Email Address ana also with github and Google</p></p> 
             <p className='ms-10'><p>3.You Can See Chefs Recipes By Clicking View Recipes Button If You LoggedIn.</p></p>
             <p   className='ms-10 text-orange-500 underline mt-2'>Technology</p>
              <p className='ms-10 '>
                <div className='grid grid-cols-6 mt-1 gap-1 '>
                <Icon className='text-3xl' icon="logos:react" />
                <Icon className='text-3xl' icon="devicon:tailwindcss" />
                <Icon className='text-3xl bg-white' icon="devicon:express-wordmark" />
                <Icon className='text-4xl text-yellow-400' icon="devicon-plain:firebase-wordmark" />
                <Icon className='text-2xl' icon="logos:daisyui" />
                </div>
                </p>
                <p   className='text-orange-500 ms-10 mt-3 underline'>Links</p>
                <div className='flex gap-2 ms-10 mt-2 mb-3'>
                  <a className='flex items-center btn btn-sm bg-black text-white border-0' target='_blank' href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-AbiR7171">Client<Icon className='text-white bg-white' icon="icon-park:github" /></a>
                  <a className='flex items-center btn btn-sm bg-black text-white border-0' target='_blank'  href=" https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-AbiR7171">server<Icon className='text-white bg-white' icon="icon-park:github" /></a>
                  <a className='flex items-center btn btn-sm bg-red-700 text-white border-0'target='_blank'  href="https://chef-master-3fdfd.web.app/">Live Site <Icon icon="iconoir:arrow-tr" /> </a>
                </div>
          </div>
           <a data-aos="fade-left"  href="https://chef-master-3fdfd.web.app/" target='_blank'>
           <div style={{boxShadow:`1px 1px 1px 3px  ${color ? color : "#FF3CAC"}`}}  className="mockup-window border bg-red-300  w-full  h-[420px] rounded-lg">
            <div  className="flex justify-center  bg-red-200 flex-col "> 
               <div className='w-full h-44  hover:-translate-y-[900px] hover:duration-1000'>
               <img src={pic1} className='w-full ' alt="" />
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

export default ChefMaster;