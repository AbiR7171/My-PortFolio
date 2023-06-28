import React from 'react';
import toy1 from "../../assets/SS/toyCenter1.png"
import toy2 from "../../assets/SS/toy2.png"
import toy3 from "../../assets/SS/toy3.png"
import toy4 from "../../assets/SS/toy4.png"
import toy6 from "../../assets/SS/toy6.png"
import toy7 from "../../assets/SS/toy7.png"

const ToyCenter = () => {
    return (
        <div className='container mx-auto flex gap-5'>
            <div className="mockup-code w-1/3">
            <pre>Toy MarketPlace</pre>
            <pre data-prefix="1"><code>You can add, delete and update toys <br />      from here.</code></pre> 
             <pre data-prefix="2"><code>You can found toys by category and <br />     view details.</code></pre> 
             <pre data-prefix="3"><code>You can see your toys and all toys and <br />     also search toys</code></pre>
          </div>
            <div className="mockup-window border bg-red-300  w-2/3 h-96">
            <div  className="flex justify-center  bg-red-200 flex-col "> 
               <div className='w-full h-44  hover:-translate-y-[1350px] duration-1000'>
               <img src={toy1} className='w-full' alt="" />
                <img src={toy2}  alt="" />
                <img src={toy3}  alt="" />
                <img src={toy4}  alt="" />
                <img src={toy6}  alt="" />
                <img src={toy7}  alt="" />
               </div>
             
            </div>
        </div>
        {/* <div className="mockup-phone border-primary h-96">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">
    <div className='w-full mt-28  hover:-translate-y-[300px] duration-1000'>
               <img src={toy1} className='w-full' alt="" />
                <img src={toy2}  alt="" />
                <img src={toy3}  alt="" />
                <img src={toy4}  alt="" />
                <img src={toy6}  alt="" />
                <img src={toy7}  alt="" />
               </div>
    </div>
  </div>
</div> */}
        </div>
    );
};

export default ToyCenter;