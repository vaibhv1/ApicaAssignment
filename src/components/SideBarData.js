import React from 'react'


import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import SmsIcon from '@mui/icons-material/Sms';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';//customer support
import LogoutIcon from '@mui/icons-material/Logout'; //Logout
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';//gift
export const SideBarData = [
  {
    title:"Home",
    icon:<DashboardIcon/>,
    Link:"/home",
  },
  {
    title:"Orders",
    icon:<ShoppingBagIcon/>,
    Link:"/Orders",
  },
  {
    title:"Customer",
    icon:<PeopleIcon/>,
    Link:"/customers",
  },
  {
    title:"Inventory",
    icon:<InventoryIcon/>,
    Link:"/inventory",
  },
  {
    title:"Conversations",
    icon:<SmsIcon/>,
    Link:"/conversations",
  },
  {
    title:"Settings",
    icon:<SettingsIcon/>,
    Link:"/settings",
  },
  {
    title:"Support",
    icon:<SupportAgentIcon/>,
    Link:"/support",
  },
  {
    title:"Gift Card",
    icon:<CardGiftcardIcon/>,
    Link:"/gift",
  },
  {
    title:"Log Out",
    icon:<LogoutIcon/>,
    Link:"/logout",
  },
]
/*
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
    npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
import InventoryIcon from '@mui/icons-material/Inventory';
import SmsIcon from '@mui/icons-material/Sms';
import SettingsIcon from '@mui/icons-material/Settings';
*/