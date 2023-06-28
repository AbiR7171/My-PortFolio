import React from 'react';
import Home from '../Components/Home';
import Partcles from '../Components/Partcles';
import RightSideNav from '../Components/RightSideNav';
import LeftSideNav from '../Components/LeftSideNav';
import BottomNav from '../Components/BottomNav';

const MainLayout = () => {
    return (
        <div className='w-full relative'>
            <Partcles/>
            <RightSideNav/>
            <LeftSideNav/>
            <BottomNav/>
            <Home/>
        </div>
    );
};

export default MainLayout;