// src/components/Dashboard.js
import React from 'react';
import InfoCard from './InfoCard';
import MarketingChart from './MarketingChart';
import './DashBoard.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="info-cards">
                <InfoCard 
                    icon={<AttachMoneyIcon />} 
                    title="Sales" 
                    value="₦4,000,000.00" 
                    subtitle="Volume" 
                    change="+20.00%" 
                />
                <InfoCard 
                    icon={<GroupIcon />} 
                    title="Customers" 
                    value="1,250" 
                    subtitle="Active" 
                    change="+15.80%" 
                />
                <InfoCard 
                    icon={<ShoppingCartIcon />} 
                    title="All Orders" 
                    value="450" 
                    subtitle="Pending" 
                    change="5" 
                />
            </div>
            <MarketingChart />
        </div>
    );
};

export default Dashboard;