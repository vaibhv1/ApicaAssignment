// src/components/RecentOrders.js
import React from 'react';
import OrderCard from './OrderCard';
import './styles/RecentOrders.css';
import { Typography } from '@mui/material';
const orders = [
    { image: 'path_to_image1', name: 'iPhone 13', price: '₦730,000.00 × 1', date: '12 Sept 2022', status: 'Pending' },
    { image: 'path_to_image2', name: 'iPhone 13', price: '₦730,000.00 × 1', date: '12 Sept 2022', status: 'Completed' },
    { image: 'path_to_image2', name: 'iPhone 13', price: '₦730,000.00 × 1', date: '12 Sept 2022', status: 'Completed' },
    { image: 'path_to_image2', name: 'iPhone 13', price: '₦730,000.00 × 1', date: '12 Sept 2022', status: 'Completed' },
    { image: 'path_to_image2', name: 'iPhone 13', price: '₦730,000.00 × 1', date: '12 Sept 2022', status: 'Completed' },
    { image: 'path_to_image2', name: 'iPhone 13', price: '₦730,000.00 × 1', date: '12 Sept 2022', status: 'Completed' },
    { image: 'path_to_image2', name: 'iPhone 13', price: '₦730,000.00 × 1', date: '12 Sept 2022', status: 'Completed' },

    // Add more orders as needed
];

const RecentOrders = () => {
    return (
        <div className="recent-orders">
            <Typography variant="h6">Recent Orders</Typography>
            <div className="orders-list">
                {orders.map((order, index) => (
                    <OrderCard
                        key={index}
                        image={order.image}
                        name={order.name}
                        price={order.price}
                        date={order.date}
                        status={order.status}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecentOrders;