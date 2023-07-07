import React from 'react';
import Home from '../Components/Home';
import Partcles from '../Components/Partcles';
import RightSideNav from '../Components/RightSideNav';
import LeftSideNav from '../Components/LeftSideNav';
import BottomNav from '../Components/BottomNav';
import Project from '../Components/Projects/Project';
import MySkills from '../Components/MySkills';
import { ContactUs } from '../Components/ContactUs';
import AboutMe from '../Components/AboutMe';

const MainLayout = () => {
    return (
        <div>
            <Partcles />
           <div className='mockup-window'>
           <RightSideNav/>
            <LeftSideNav/>
            <BottomNav/>
            <Home/>
            <AboutMe/>
            <MySkills/>
           <Project/>
           <ContactUs/>
           </div>
        </div>
    );
};

export default MainLayout;