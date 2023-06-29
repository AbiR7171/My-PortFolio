import React from 'react';
import Home from '../Components/Home';
import Partcles from '../Components/Partcles';
import RightSideNav from '../Components/RightSideNav';
import LeftSideNav from '../Components/LeftSideNav';
import BottomNav from '../Components/BottomNav';
import Project from '../Components/Projects/Project';

const MainLayout = () => {
    return (
        <div>
            <Partcles/>
            <RightSideNav/>
            <LeftSideNav/>
            <BottomNav/>
            <Home/>
           <Project/>
        </div>
    );
};

export default MainLayout;