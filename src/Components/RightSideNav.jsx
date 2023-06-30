import React from 'react';
import { FaHome,FaReact  } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdWork, MdMessage } from "react-icons/md";
import { Icon } from '@iconify/react';

const RightSideNav = () => {
    return (
       <div className='fixed z-50 top-1/3 lg:right-8 right-4 font-serif'>

        <ul className='space-y-2'>

           <li data-aos="fade-up" data-aos-duration="3000"   className={`flex items-center justify-center lg:w-14 lg:h-14 w-8 h-8 rounded-full bg-base-200 text-black  `}>
            <FaHome title='Home' className={`lg:text-2xl hover:text-red-700`}/>
           </li>

           <li data-aos="fade-up" data-aos-duration="3000"  className={`flex items-center justify-center lg:w-14 lg:h-14  w-8 h-8 rounded-full bg-base-200 text-black  `}>
            <CgProfile title='Profile' className={`lg:text-3xl  hover:text-red-700`}/>
           </li>
           <li data-aos="fade-right" data-aos-duration="3000"   className={`flex items-center justify-center lg:w-14 lg:h-14  w-8 h-8 rounded-full bg-base-200 text-black  `}>
           <FaReact title='Skills' className={`lg:text-3xl  hover:text-red-700`}/>
           </li>

           <li data-aos="fade-down" data-aos-duration="3000"  className={`flex items-center justify-center lg:w-14 lg:h-14  w-8 h-8 rounded-full bg-base-200 text-black  `}>
            <MdWork title='Projects' className={`lg:text-2xl  hover:text-red-700`}/>
           </li>
           
           <li data-aos="fade-down" data-aos-duration="3000"   className={`flex items-center justify-center lg:w-14 lg:h-14  w-8 h-8 rounded-full bg-base-200 text-black  `}>
            <MdMessage title='Contact' className={`lg:text-2xl  hover:text-red-700`}/>
           </li>
           
        </ul>
       </div>
    );
};

export default RightSideNav;