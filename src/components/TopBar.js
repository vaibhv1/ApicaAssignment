import React from 'react';
import './styles/topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const Topbar = ({ selectedTitle }) => {
  const dropdownOptions = ["Nanny's shop", "Other Option 1", "Other Option 2"]; // Dropdown options

  return (
    <div className="Topbar">
      <div className="left">
        <span className="title">{selectedTitle}</span>
      </div>
      <div className="right">
        <div className="dropdown">
          <select defaultValue={dropdownOptions[0]}>
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="notificationIcon">
          <NotificationsIcon />
        </div>
        <div className="profile">
          <Avatar alt="Profile Picture" src="/random-profile-picture.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;