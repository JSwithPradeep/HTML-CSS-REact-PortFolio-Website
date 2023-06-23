
import React, { useState } from 'react'
import './style.scss';

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Products",
        id: "product",
    },
    {
        name: "Web Pages",
        id: "web-page",
    },
    {
        name: "Web Apps",
        id: "web-app",
    },
    {
        name: "Mobile Apps",
        id: "mobile-app",
    },
];

const Filters = ({filterProject}) => {
 const [active, setActive] = useState("");
 
 const clicHandler = (id) =>{
    setActive(id);
    filterProject(id) ;
 }
return (
    <ul className='filter-menu-items'>
        {filtersData .map((item)=>{
            return (
                <li key ={item.id} 
                 className={`filter-menu-item ${active === item.id ? "actiive" : ""}`}
                 
                 onClick={()=> clicHandler(item.id)}
                 >
                    {item.name}</li>
            
        )
            
        })}
        
    </ul>
  )
}

export default Filters;
