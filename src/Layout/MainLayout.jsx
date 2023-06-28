import React from 'react';
import Home from '../Components/Home';
import Partcles from '../Components/Partcles';
import RightSideNav from '../Components/RightSideNav';
import LeftSideNav from '../Components/LeftSideNav';
import BottomNav from '../Components/BottomNav';
import ToyCenter from '../Components/Projects/toyCenter';

const MainLayout = () => {
    return (
        <div>
            <Partcles/>
            <RightSideNav/>
            <LeftSideNav/>
            <BottomNav/>
            <Home/>
            <ToyCenter/>
        </div>
    );
};

export default MainLayout;