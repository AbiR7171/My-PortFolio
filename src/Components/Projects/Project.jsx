import React from 'react';
import ToyCenter from './toyCenter';
import MusicCamp from './MusicCamp';
import ChefMaster from './ChefMaster';

const Project = () => {
    return (
        <div id='MyProject'>
             <h4 className="text-6xl text-center mb-10 mt-10 text font-serif font-bold">My Projects</h4>
            <ToyCenter/>
            <MusicCamp/>
            <ChefMaster/>
        </div>
    );
};

export default Project;