// src/components/SummaryCards.js
import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RestoreIcon from '@mui/icons-material/Restore';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import './styles/SummaryCards.css';
import SummaryCard from './SummaryCard';
const SummaryCards = () => {
    const summaryData = [
        { title: 'All Orders', value: '450', icon: <ShoppingBagIcon /> },
        { title: 'Pending', value: '5', icon: <PendingActionsIcon /> },
        { title: 'Completed', value: '320', icon: <CheckCircleIcon /> },
        { title: 'Canceled', value: '30', icon: <CancelIcon />, change: '-20%' },
        { title: 'Returned', value: '20', icon: <RestoreIcon /> },
        { title: 'Damaged', value: '5', icon: <ReportProblemIcon /> },
        { title: 'Abandoned Cart', value: '20%', icon: <ShoppingCartIcon />, change: '+0.00%' },
        { title: 'Customers', value: '30', icon: <PeopleIcon /> },
    ];

    return (
        <div className="summary-cards">
            <SummaryCard/>
        </div>
    );
};

export default SummaryCards;