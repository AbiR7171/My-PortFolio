import React from 'react';
import facebook from "../assets/facebook.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"

const BottomNav = () => {
    const theme = localStorage.getItem("theme")
    
    return (
        <div className='fixed z-20 bottom-7  right-1/2'>
           <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6 ">
  <li>
    <a href='https://www.facebook.com/emtiag.abir/' target='_blank' className="tooltip" data-tip="Home">
     <img src={facebook} className='w-5 h-5' alt="" />
    </a>
  </li>
  <li>
    <a href='https://www.linkedin.com/in/emtiaz-abir-8b500a232/' target='_blank' className="tooltip" data-tip="Details">
    <img src={github} className='w-5 h-5' alt="" />
    </a>
  </li>
  <li>
    <a href='https://github.com/AbiR7171' target='_blank'  className="tooltip" data-tip="Stats">
    <img src={linkedin} className='w-5 h-5' alt="" />
    </a>
  </li>
</ul> 
        </div>
    );
};

export default BottomNav;