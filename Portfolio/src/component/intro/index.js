import React from 'react'
import "./style.scss";
//import cloud from "../../images/cloud.png";
//import cloudSoft from "../../images/cloud-soft.png"
import Nav from './Navigation';
import IntroContent from './intro-content';
const Intro = () => {
  return (
    <div className='Intro-section'>
      <div className='section-bg' id='parallax'>

      </div>
     
      <div className='content'>
        <Nav/>
       <br/>
       <br/>
        <IntroContent/>
      </div>
    </div>
  )
}

export default Intro;