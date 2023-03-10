// CHANGES BY RACHEL
import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/Landing.css";
import Hero from "../Components/Hero.js";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Landing=()=> {
  useEffect(() => {
    AOS.init({
        duration: 400,
        easing: "ease",
        once: false
    });
  });
  return(
      <>
      <Hero/>
      <div className='container' id='landing'>
          <div className='contentBox'>
              <div className='btnBox'>
                  <div className='btn' data-aos="fade-right">
                      <NavLink to="/profile" className="policeProfile" style={{ textDecoration: 'none' }}>Register as Police Officer</NavLink>
                  </div>
                  <div className='btn' data-aos="fade-left">
                      <NavLink to="/search" className="searchProfile" style={{ textDecoration: 'none' }}>Find a Police Officer</NavLink>
                  </div>
              </div>
          </div>
      </div>
      </>
)
}
export default Landing;
