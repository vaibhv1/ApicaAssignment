// src/Body.js
import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { SideBarData } from "./SideBarData";
import Dashboard from "./DashBoard";
import OrdersDetails from "./OrdersDetails";
import './styles/Body.css';  // Add this import to include CSS for layout

export const Body = () => {
  const [selectedTitle, setSelectedTitle] = useState(SideBarData[0].title);

  const handleSidebarItemClick = (title) => {
    setSelectedTitle(title);
  };

  const renderContent = () => {
    switch (selectedTitle) {
      case "Dashboard":
        return <Dashboard />;
      case "Orders":
        return <OrdersDetails />;
      default:
        return < Dashboard/>;
    }
  };

  return (
    <div className="body-container">
      <SideBar onItemClick={handleSidebarItemClick} />
      <div className="main-content">
        <TopBar selectedTitle={selectedTitle} />
        {renderContent()}
      </div>
    </div>
  );
};

export default Body;