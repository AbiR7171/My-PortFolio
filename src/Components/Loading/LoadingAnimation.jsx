import { document } from 'postcss';
import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import animation1 from "../../assets/LottieAnimation/104286-coding-screen.json"

const LoadingAnimation = ({children}) => {

    const[loading,setLoading]=useState(false);

  
   
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []); 
  
   return(
    <div>
        {loading ? <Lottie  animationData={animation1}  /> : children }
    </div>
   )
};

export default LoadingAnimation;