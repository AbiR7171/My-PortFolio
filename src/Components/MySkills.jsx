import React from 'react';
import Marquee from "react-fast-marquee";
import { Icon } from '@iconify/react';

const MySkills = () => {
    return (
        <div>
            <div>
                <h4 className="text-6xl text-center mb-10 mt-10 text font-serif font-bold">My Skills</h4>
            </div>
            <Marquee>
                <div className='flex items-center gap-10 mb-20 mt-10'>
                <Icon className='text-9xl w-32' icon="logos:html-5" />
                <Icon className='text-9xl w-32 rounded-lg' icon="logos:css-3" />
                <Icon className='text-9xl w-32 rounded-lg' icon="devicon:bootstrap-wordmark" />
                <Icon className='text-9xl w-32 rounded-lg' icon="skill-icons:tailwindcss-dark" />
                <Icon className='text-9xl w-32 rounded-lg text-yellow-500' icon="raphael:js" />
                <Icon className='text-9xl w-32 rounded-lg' icon="skill-icons:react-dark" />
                <Icon className='text-9xl w-32 rounded-lg' icon="vscode-icons:file-type-node" />
                <Icon className='text-9xl w-32 rounded-lg' icon="devicon:express" />
                <Icon className='text-9xl w-32 rounded-lg' icon="logos:mongodb" />
                <Icon className='text-9xl w-32 rounded-lg' icon="icon-park:github" />
                <Icon className='text-9xl w-32 rounded-lg' icon="logos:axios" />
                <Icon className='text-9xl w-32 rounded-lg' icon="skill-icons:vscode-dark" />
                <Icon className='text-9xl w-32 rounded-lg' icon="logos:jwt" />
                <Icon className='text-9xl w-32 rounded-lg me-4' icon="logos:npm" />
                <Icon  className='text-9xl w-32 text-green-500 rounded-lg me-4' icon="uil:lottiefiles-alt" />
                </div>
            </Marquee>
        </div>
    );
};

export default MySkills;