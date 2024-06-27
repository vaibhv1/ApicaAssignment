// src/components/OrderCard.js
import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import './OrderCard.css';

const OrderCard = ({ image, name, price, date, status }) => {
    return (
        <Card className="order-card">
            <CardContent className="order-card-content">
                <Avatar src={image} className="order-card-avatar" />
                <div className="order-card-details">
                    <Typography variant="body1">{name}</Typography>
                    <Typography variant="body2" color="textSecondary">{price}</Typography>
                </div>
                <div className="order-card-info">
                    <Typography variant="body2" color="textSecondary">{date}</Typography>
                    <span className={`order-card-status ${status.toLowerCase()}`}>{status}</span>
                </div>
            </CardContent>
        </Card>
    );
}

export default OrderCard;