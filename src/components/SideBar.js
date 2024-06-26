// src/Sidebar.js
import React from 'react';
import './sidebar.css'
import  {SideBarData} from './SideBarData';
export const Sidebar = () => {
  return (
    <div className='SideBar'>
            <ul className='SideBarList'>
                {
                    SideBarData.map((val,key) =>{
                                return <li className='SideBarRow' key={key} onClick={(e)=>{e.preventDefault()}}>  
                                {" "}
                                <div id="icon">{val.icon}</div>{" "}{" "}
                                <div id="title">{val.title}</div>
                             </li>;
                    })
                }
            </ul>
    </div>
  );
};

