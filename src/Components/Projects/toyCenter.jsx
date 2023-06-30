import React from 'react';
import toy1 from "../../assets/SS/toyCenter1.png"
import toy2 from "../../assets/SS/toy2.png"
import toy3 from "../../assets/SS/toy3.png"
import toy4 from "../../assets/SS/toy4.png"
import toy6 from "../../assets/SS/toy6.png"
import toy7 from "../../assets/SS/toy7.png"
import { Icon } from '@iconify/react';

const ToyCenter = () => {
  const color = localStorage.getItem("color")
    return (
       <div>
        <p className="text-2xl uppercase text font-serif font-bold text-center mb-2">Toy Center</p>
        <p style={{backgroundColor:`${color ? color : "#FF3CAC"}`}}  className='divider w-1/5 mx-auto  h-1 rounded mb-10'/>
         <div className='container mx-auto lg:flex gap-5 font-serif p-2'>
            <div data-aos="fade-right" data-aos-duration="2000" style={{boxShadow:`1px 1px 1px 2px  ${color ? color : "#FF3CAC"}`}} className="mockup-code bg-black   lg:w-2/3">
            <p style={{color:`${color ? color : "#FF3CAC"}`}} className='ms-10  text-2xl'>Toy MarketPlace</p>
            <p className='ms-10 underline mt-2 text-orange-500'>Key Feature</p>
            <p className='ms-10'><p> 1.You can add, delete and update toys from here.</p></p> 
             <p className='ms-10'><p>2. You can found toys by category and view details.</p></p> 
             <p className='ms-10'><p>3. You can see your toys and all toys and also  search toys</p></p>
             <p   className='ms-10 text-orange-500 underline mt-2'>Technology</p>
              <p className='ms-10 '>
                <div className='flex mt-1 gap-4 items-center'>
                <Icon className='text-5xl' icon="logos:react" />
                <Icon className='text-5xl' icon="devicon:tailwindcss" />
                <Icon  className='text-5xl' icon="vscode-icons:file-type-node" />
                <Icon className='text-5xl bg-white' icon="devicon:express-wordmark" />
                <Icon className='text-5xl' icon="skill-icons:mongodb" />
                <Icon className='text-5xl text-yellow-400' icon="devicon-plain:firebase-wordmark" />
                <Icon className='text-2xl' icon="logos:daisyui" />
                </div>
                </p>
                <p   className='text-orange-500 ms-10 mt-3 underline'>Links</p>
                <div className='flex gap-2 ms-10 mt-2'>
                  <a className='flex items-center btn btn-sm bg-black text-white border-0 ' target='_blank' href="https://github.com/AbiR7171/Toy-center-client.git">Client<Icon className='text-white bg-white' icon="icon-park:github" /></a>
                  <a className='flex items-center btn btn-sm bg-black text-white border-0' target='_blank'  href="https://github.com/AbiR7171/Toy-center-server.git">server<Icon className='text-white bg-white' icon="icon-park:github" /></a>
                  <a className='flex items-center btn btn-sm bg-red-700 text-white border-0'target='_blank'  href="https://github.com/AbiR7171/Toy-center-server.git">Live Site <Icon icon="iconoir:arrow-tr" /> </a>
                </div>
          </div>
           <a data-aos="fade-left" data-aos-duration="2000" href="https://tay-center-auth.web.app/" target='_blank'>
           <div style={{boxShadow:`1px 1px 1px 3px  ${color ? color : "#FF3CAC"}`}}  className="mockup-window border bg-red-300  w-4/4 h-96">
            <div  className="flex justify-center  bg-red-200 flex-col "> 
               <div className='w-full h-44  hover:-translate-y-[1200px] duration-1000'>
               <img src={toy1} className='w-full' alt="" />
                <img src={toy2}  alt="" />
                <img src={toy3}  alt="" />
                <img src={toy4}  alt="" />
                <img src={toy6}  alt="" />
                <img src={toy7}  alt="" />
               </div>
             
            </div>
        </div>
           </a>
        </div>
       </div>
    );
};

export default ToyCenter;