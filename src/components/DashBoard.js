// src/components/Dashboard.js
import React from 'react';
import InfoCard from './InfoCard';
import SalesIcon from '@mui/icons-material/ShowChart';
import CustomersIcon from '@mui/icons-material/People';
import OrdersIcon from '@mui/icons-material/ShoppingCart';
import './DashBoard.css'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <InfoCard
        icon={<SalesIcon />}
        title="Sales"
        value="₦4,000,000.00"
        subtitle="Volume"
        change="+20.00"
      />
      <InfoCard
        icon={<CustomersIcon />}
        title="Customers"
        value="1,250"
        subtitle="Active"
        change="+15.80"
      />
      <InfoCard
        icon={<OrdersIcon />}
        title="All Orders"
        value="450"
        subtitle="Pending"
        change="+0.00"
      />
    </div>
  );
};

export default Dashboard;