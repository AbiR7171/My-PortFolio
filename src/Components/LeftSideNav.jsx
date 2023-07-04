
import React, { createContext, useEffect, useReducer, useState } from 'react';
import { MdOutlineSettingsSuggest } from "react-icons/md";
import blue from "../assets/Color/blue.png"
import blueviolet from "../assets/Color/blueviolet.png"
import goldenrod from "../assets/Color/goldenrod.png"
import green from "../assets/Color/green.png"
import magenta from "../assets/Color/magenta.png"
import orange from "../assets/Color/orange.png"
import purple from "../assets/Color/purple.png"
import red from "../assets/Color/red.png"
import yellow from "../assets/Color/yellow.png"
import yellowgreen from "../assets/Color/yellowgreen.png"


export const ColourContext = createContext()


const LeftSideNav = ({children}) => {

    const[theme, setTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme"): "black")

    const[colour, setColour]=useState(localStorage.getItem("color")? localStorage.getItem("color") : "#FF3CAC")
    console.log(colour);
    const[show, setShow]=useState(false)
   





 
    const handleColour = color =>{
        localStorage.setItem("color", color)
        setColour(color)
        window.location.reload()
        
    }

    const handelTheme = e =>{
      
        if(e.target.checked){
            setTheme("light")
        }
        else{
            setTheme("black")
        }
    }

    

    useEffect(()=>{

        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme");
         
        document.querySelector("html").setAttribute("data-theme", localTheme)
       
    },[theme])

    const contextInfo ={
        colour
    }
    
    return (
        <ColourContext.Provider value={contextInfo}>
        <ul data-aos="fade-down" data-aos-duration="3000" className='space-y-2 fixed -left-3 top-6 z-20'>
            
            <li title='Choose Your Favorite Colour' className='w-14 h-14 bg-black text-white text-opacity-60 rounded-md flex items-center justify-center'><MdOutlineSettingsSuggest onClick={()=> setShow(!show)} className='text-4xl '/></li>
             
        
                
            {
                <div className={`absolute -left-96 top-0 ${show && "left-16 duration-300"} `}>
                    <div className="card w-96 h-36 bg-base-100 shadow-xl">
                     <div className="card-body grid grid-cols-5">
                     <img src={blue} onClick={()=> handleColour("#4169e1")} className='w-8' alt="" />
                     <img src={blueviolet} onClick={()=>handleColour("#6856ae")} className='w-8' alt="" />
                     <img src={goldenrod} onClick={()=>handleColour("#d9a520")} className='w-8' alt="" />
                     <img src={green} onClick={()=>setColour("#72b526")} className='w-8' alt="" />
                     <img src={magenta} onClick={()=>handleColour("#FF3CAC")} className='w-8' alt="" />
                     <img src={orange} onClick={()=>handleColour("#fa5a0f")} className='w-8' alt="" />
                     <img src={purple} onClick={()=>handleColour("#6856ae")} className='w-8' alt="" />
                     <img src={red} onClick={()=>handleColour("#f72b1d")} className='w-8' alt="" />
                     <img src={yellow} onClick={()=>handleColour("#ffb300")} className='w-8' alt="" />
                     <img src={yellowgreen} onClick={()=>handleColour("#d9a520")} className='w-8' alt="" />
                    </div>
                    </div>
                    
                    
                     </div>
            }    
         

            <li title='Dark Mode Recommended' className='w-14 h-14 bg-black text-white text-opacity-60 rounded-md flex items-center justify-center'><label className="swap swap-rotate z-10">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handelTheme}/>
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
  {/* moon icon */}

  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
 

</label></li> 
        </ul>
        {children}
        </ColourContext.Provider>
    );
};

export default LeftSideNav;