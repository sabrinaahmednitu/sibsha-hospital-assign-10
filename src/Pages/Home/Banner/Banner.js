import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import './banner.css'


const Banner = () => {
    return (
        <div className="background">
            <div className="container">
            <Typewriter
    onInit={(typewriter) => {
    typewriter.typeString(' <h1>Welcome to our healthcare center<h1> ')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>  
          <h1 className="fw-bolder txt-cl fs-1 mt-5     
            "
           style={{color:"black"}}
          >Sibsha Hospital has made the first step to navigating treatment stress-free. Our caring community is with you every step of the way from your first call through treatment and ongoing survivorship.</h1>
            </div>
            <Link to="/about"><button className="p-2 mt-3 btn fw-bolder fs-5">More About Us</button></Link>
        </div>
    );
};

export default Banner;