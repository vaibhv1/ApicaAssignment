import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './ShoppingCart.css';

const ShoppingCart = () => {
  return (
    <Box className="shopping-cart">
      <Card className="card products">
        <CardContent className="card-content">
          <Box className="card-icon">
            <FolderIcon />
          </Box>
          <Box className="card-details">
            <Typography variant="subtitle2" color="textSecondary">All Products</Typography>
            <Typography variant="h5">45</Typography>
          </Box>
          <Box className="card-details active-products">
            <Typography variant="subtitle2" color="textSecondary">Active</Typography>
            <Typography variant="h5">
              32 <span className="percentage">+24%</span>
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card className="card stats">
        <CardContent className="card-content">
          <Box className="card-icon">
            <ShoppingCartIcon />
          </Box>
          <Box className="card-details">
            <Typography variant="subtitle2" color="textSecondary">Abandoned Cart</Typography>
            <Typography variant="h5">
              20% <span className="percentage">+0.00%</span>
            </Typography>
          </Box>
          <Box className="card-details customers">
            <Typography variant="subtitle2" color="textSecondary">Customers</Typography>
            <Typography variant="h5">30</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ShoppingCart;
