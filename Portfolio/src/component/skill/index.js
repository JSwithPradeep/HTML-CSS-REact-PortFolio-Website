import React from 'react';
import './style.scss';
import Section from '../../shared/section';
import TechIcon from "../../images/1_FVtCyRdJ6KOr4YswTtwMeA.jpg"
import CallToAction from '../../shared/CallToAction';
import {BsDownload} from 'react-icons/bs'

const Skills = () => {
  return (
    <Section background="dark" id="skill">
        <div className='skill-content-wrapper'>
            <div className='left-col'>
                <img src={TechIcon} alt='' />
            </div>
            <div className='right-col'>
                <h2>Skill</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco
          </p>
          <CallToAction text="Pradeep- resume_24.pdf" download icon={<BsDownload/>}/>
            </div>
        </div>

    </Section>
  )
}

export default Skills