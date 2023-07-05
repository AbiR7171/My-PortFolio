import React from 'react';
import Marquee from "react-fast-marquee";
import { Icon } from '@iconify/react';

const MySkills = () => {
    return (
        <div id='MySkill'>
            <div>
                <h4 className="text-6xl text-center mb-10 mt-10 text font-serif font-bold">My Skills</h4>
            </div>
            <Marquee>
                <div className='flex items-center gap-10 mb-20 mt-10'>
                <div className='glassCss rounded-lg ms-10'><Icon className='text-9xl w-32' icon="logos:html-5" /></div>
                <div className='rounded-lg glassCss'><Icon className='text-9xl w-32 rounded-lg' icon="logos:css-3" /></div>
                <div className='glassCss rounded-lg'><Icon className='text-9xl w-32 rounded-lg' icon="devicon:bootstrap-wordmark" /></div>
               <div className='glassCss rounded-lg'> <Icon className='text-9xl w-32 rounded-lg' icon="skill-icons:tailwindcss-dark" /></div>
               <div className='glassCss rounded-lg'> <Icon className='text-9xl w-32 rounded-lg text-yellow-500' icon="raphael:js" /></div>
               <div className='glassCss rounded-lg'>
               <Icon className='text-9xl w-32 rounded-lg' icon="skill-icons:react-dark" />
               </div>
               <div className='glassCss rounded-lg'>
               <Icon className='text-9xl w-32 rounded-lg' icon="vscode-icons:file-type-node" />
               </div>
               <div className='glassCss rounded-lg'>
               <Icon className='text-9xl w-32 rounded-lg' icon="devicon:express" />
               </div>
               <div className='glassCss rounded-lg'>
               <Icon className='text-9xl w-32 rounded-lg' icon="logos:mongodb" />
               </div>
              <div className='glassCss rounded-lg'>
              <Icon className='text-9xl w-32 rounded-lg' icon="icon-park:github" />
              </div>
                <div className='glassCss rounded-lg'>
                <Icon className='text-9xl w-32 rounded-lg' icon="logos:axios" />
                </div>
               <div className='glassCss rounded-lg'>
               <Icon className='text-9xl w-32 rounded-lg' icon="skill-icons:vscode-dark" />
               </div>
                <div className='glassCss rounded-lg'>
                <Icon className='text-9xl w-32 rounded-lg' icon="logos:jwt" />
                </div>
               <div className='glassCss rounded-lg'>
               <Icon className='text-9xl w-32 rounded-lg me-4' icon="logos:npm" />
               </div>
               <div className='glassCss rounded-lg'>
               <Icon  className='text-9xl w-32 text-green-500 rounded-lg me-4' icon="uil:lottiefiles-alt" />
               </div>
                </div>
            </Marquee>
        </div>
    );
};

export default MySkills;