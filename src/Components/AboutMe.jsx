import React from 'react';
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import moduleName from '../assets/image/WhatsApp Image 2023-06-28 at 02.43.44.jpg';

const AboutMe = () => {
    const color = localStorage.getItem("color")
    

    return (
        <div id="AboutMe" className=''>
            <h4 className="text-6xl text-center mb-10 mt-10 text font-serif font-bold">About Me</h4>
            <div className='lg:flex gap-4 container mx-auto'>  
            <div  className='rounded-md  '>
              <img  className=' w-full h-80' src={moduleName} alt="" />
            </div>
            <div   className='lg:flex items-center gap-7 p-3 font-serif '>
                <div className='space-y-3'>
                <div  className='flex items-center gap-2'> <p style={{boxShadow:`1px 1px 1px 2px  ${color ? color : "#FF3CAC"}`, color: `${color ? color : "#FF3CAC"}`}}  className='rounded-full text-2xl  bg-black w-12  h-12  flex items-center justify-center'><GiRotaryPhone /></p> <span className='text-gray-500 text-[20px]'>+8801839891065</span> </div>

                <div className='flex items-center gap-2'> <p style={{boxShadow:`1px 1px 1px 2px  ${color ? color : "#FF3CAC"}`, color: `${color ? color : "#FF3CAC"}`}}    className='rounded-full text-2xl  bg-black w-12 h-12  flex items-center justify-center'><MdEmail/></p> <a className='text-gray-500 text-[20px]'>abiremtiag.gmail.com</a> </div>

                <div className='flex items-center gap-2'> <p style={{boxShadow:`1px 1px 1px 2px  ${color ? color : "#FF3CAC"}`, color: `${color ? color : "#FF3CAC"}`}}   className='rounded-full text-2xl  bg-black w-12  h-12  flex items-center justify-center'><FaAddressBook/></p> <span className='text-gray-500 text-[20px]'>Feni, Bangladesh</span> </div>
                    
                </div>
                <div className='font-serif space-y-3'>
                    <div className='flex gap-10 text-[20px]'>
                    <p className=' text-gray-500'>First Name: <span className='text-green-600'>Yeasin</span></p> <p className='text-[20px]text-gray-500'> Last Name: <span className='text-green-600'>Emtiag</span></p>
                    </div>

                    <div className='flex gap-10 text-[20px]'>
                    <p className='text-[20px] text-gray-500'>Age: <span className='text-green-600'>20</span></p> <p className='text-gray-500'>Nationality: <span className='text-green-600'>Bangladeshi</span></p>
                    </div>
                    
                    <div className='lg:flex gap-10 text-[20px]'>
                    <p className=' text-gray-500'>Language: <span className='text-green-600'>Bangla, English, Hindi</span></p> <p className=' text-gray-500'>Status: <span className='text-green-600'>Student</span></p>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default AboutMe;