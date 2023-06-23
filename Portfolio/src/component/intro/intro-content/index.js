import React from 'react';
import './style.scss';
import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
import CallToAction from '../../../shared/CallToAction';

import { scrollToSection  } from '../../utils/helper';
//import { BsAwardFill } from 'react-icons/bs';
//import {FaUserAlt} from 'react-icons/fa';

const IntroContent = () => {
  return (
    <div className='intro-content'>
        <div className='layout'>
            <div className='left-col'>
            <h1 className='title'>
                    <span className='small-text'>
                        <span className='text'>Hello</span>
                        <span className='icon'>
                            <img src={hand} alt=''/>
                        </span>
                        <span className='text'>, I'm</span>
                    </span>
                    <span className='big-text'> Pradeep Singh</span>
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
                <CallToAction text="Contact" action={()=>{scrollToSection("contact") }} />
            </div>
            <div className='right-col'>
                <img src={girl} alt=''/>
                                        <div className='text'>
                            <span>4K+</span>
                            Happy Customers
                        </div>
                    
                </div>
            </div>
        </div>
    
  )
}

export default IntroContent;