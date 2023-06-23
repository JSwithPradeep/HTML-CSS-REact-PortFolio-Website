import React from 'react';
import './style.scss';
import logo from "../../../images/codelogo.png"
import CallToAction from '../../../shared/CallToAction';
import { scrollToSection  } from '../../utils/helper';
function Nav() {
  return (
    <div className="top-navigation-bar">
        <div className="app-logo">
            <img src={logo} alt='logo'/>
        </div>
        <div className='navigation'>
        <div className='navigation-item'  onClick={() => scrollToSection("skill")}>Skills</div>
        <div className='navigation-item'  onClick={() => scrollToSection("portfolio")}>Portfolio</div>
        
        <CallToAction text="Contact" action={()=>{scrollToSection("contact") }}/></div>
        
    </div>
    )
}

export default Nav;