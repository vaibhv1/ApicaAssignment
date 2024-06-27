import React from "react";
import Sidebar from "./SideBar";
import TopBar from "./TopBar";
import { useState } from "react";
import { SideBarData } from "./SideBarData";
export const Body = () => {
  const [selectedTitle, setSelectedTitle] = useState(SideBarData[0].title);

  const handleSidebarItemClick = (title) => {
    setSelectedTitle(title);
  };
  return (
    <div className="new">
      <TopBar selectedTitle={selectedTitle} />
      <Sidebar onItemClick={handleSidebarItemClick} />
    </div>
  );
};
