// src/components/InfoCard.js
import React from 'react';
import './styles/InfoCard.css';

const InfoCard = ({ icon, title, value, subtitle, change }) => {
  return (
    <div className="info-card">
      <div className="icon">
        {icon}
      </div>
      <div className="content">
        <div className="header">
          <div className="title">{title}</div>
          <div className="timeframe">This Week <span style={{marginLeft:10+'px'}}>▼</span></div>
        </div>
        <div className="body">
          <div className="value">{value}</div>
          <div className="change" style={{ color: change >= 0 ? 'green' : 'red' }}>{change}</div>
        </div>
        <div className="footer">
          <div className="subtitle">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;