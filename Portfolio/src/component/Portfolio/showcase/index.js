import React from 'react'


import './style.scss'
import Arrow from '../../../shared/arrow'
const Showcase = ({data, transation}) => {
  return (
    <div className='project-shortcuts'>
        {data.map((project)=>{
            
            return(
                <div className={`showcase-item ${transation === "zoomout" ? "zoomout": transation === "zoomin" ? "zoomin" : "" }`}>
                    <div className='meta-content'>
                        <h3>{project.name}</h3>
                        <div className='go-to-cta'>
                            <span className='text'>Project Details</span>
                            <Arrow className="arrow.icon"/>
                            </div>
                    </div>
                    <img src={project.media.thumbnail}/>
                    </div>
            )
        })}
    </div>
  )
}

export default Showcase