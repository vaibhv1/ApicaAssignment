import React, { useState } from 'react';
import './sidebar.css';
import { SideBarData } from './SideBarData';
import PieChartIcon from '@mui/icons-material/PieChart';

export const Sidebar = () => {
  const [showTitles, setShowTitles] = useState(false);

  const handleClick = () => {
    setShowTitles(prevState => !prevState);
  };

  return (
    <div className='SideBar'>
      <div className="randomIcon" onClick={handleClick}>
        <PieChartIcon />
      </div>
      <ul className='SideBarList'>
        {
          SideBarData.map((val, key) => {
            return (
              <li className='SideBarRow' key={key} onClick={(e) => { e.preventDefault(); }}>
                <div className={`iconTitleContainer ${showTitles ? 'show' : 'hide'}`}>
                  <div id="icon">{val.icon}</div>
                  <div id="title">
                    {val.title === 'Gift Card' ? (
                      <span className="giftCardMessage">
                        Free Gift Awaits you!<br />
                        Upgrade your account &gt;
                      </span>
                    ) : (
                      val.title
                    )}
                  </div>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Sidebar;