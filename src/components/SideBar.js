// src/Sidebar.js
import React, { useState } from 'react';
import './styles/sidebar.css';
import { SideBarData } from './SideBarData';
import PieChartIcon from '@mui/icons-material/PieChart';

const Sidebar = ({ onItemClick }) => {
  const [showTitles, setShowTitles] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = () => {
    setShowTitles(prevState => !prevState);
  };

  const handleItemClick = (key) => {
    setSelectedItem(prevSelectedItem => (prevSelectedItem === key ? null : key));
    onItemClick(SideBarData[key].title);
  };

  // Separate the main items from the bottom items
  const mainItems = SideBarData.filter(item => item.title !== 'Gift Card' && item.title !== 'Log Out');
  const bottomItems = SideBarData.filter(item => item.title === 'Gift Card' || item.title === 'Log Out');

  return (
    <div className='SideBar'>
      <div className="randomIcon" onClick={handleClick}>
        <PieChartIcon />
      </div>
      <ul className='SideBarList'>
        {mainItems.map((val, key) => (
          <li
            className={`SideBarRow ${selectedItem === key ? 'selected' : ''}`}
            key={key}
            onClick={() => handleItemClick(key)}
          >
            <div className={`iconTitleContainer ${showTitles ? 'show' : 'hide'}`}>
              <div
                id="icon"
                className={`icon ${selectedItem === key ? 'selectedIcon' : ''}`}
              >
                {val.icon}
              </div>
              {showTitles && (
                <div id="title" className={`title ${selectedItem === key ? 'selectedTitle' : ''}`}>
                  {val.title}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <ul className='SideBarList bottom'>
        {bottomItems.map((val, key) => (
          <li
            className={`SideBarRow ${selectedItem === key + mainItems.length ? 'selected' : ''}`}
            key={key + mainItems.length}
            onClick={(e) => { 
              e.preventDefault();
              handleItemClick(key + mainItems.length);
            }}
          >
            <div className={`iconTitleContainer ${showTitles ? 'show' : 'hide'}`}>
              <div
                id="icon"
                className={`icon ${selectedItem === key + mainItems.length ? 'selectedIcon' : ''}`}
              >
                {val.icon}
              </div>
              {showTitles && (
                <div id="title" className={`title ${selectedItem === key + mainItems.length ? 'selectedTitle' : ''}`}>
                  {val.title === 'Gift Card' ? (
                    <span className="giftCardMessage">
                      Free Gift Awaits you!<br />
                      Upgrade your account &gt;
                    </span>
                  ) : (
                    val.title
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;