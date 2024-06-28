// src/components/CustomerOrdersHeader.js
import React from 'react';
import {
  Box, TextField, IconButton, Button, Menu, MenuItem, Toolbar, Typography, Tooltip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CustomerOrdersHeader = ({ search, onSearchChange, onFilterClick, onDateFilterClick, onShareClick, onBulkActionClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Customer Orders
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button
          variant="contained"
          size="small"
          sx={{ marginRight: '10px' }} // Adjust spacing as needed
        >
          Add Product
        </Button>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          value={search}
          onChange={onSearchChange}
          InputProps={{
            startAdornment: (
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Tooltip title="Filter">
          <IconButton size="small" onClick={onFilterClick}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Date Filter">
          <IconButton size="small" onClick={onDateFilterClick}>
            <DateRangeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Share">
          <IconButton size="small" onClick={onShareClick}>
            <ShareIcon />
          </IconButton>
        </Tooltip>
        <Button
          variant="contained"
          size="small"
          onClick={handleMenuClick}
        >
          Bulk Action
          <MoreVertIcon />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => onBulkActionClick('Action 1')}>Action 1</MenuItem>
          <MenuItem onClick={() => onBulkActionClick('Action 2')}>Action 2</MenuItem>
          <MenuItem onClick={() => onBulkActionClick('Action 3')}>Action 3</MenuItem>
        </Menu>
      </Box>
    </Toolbar>
  );
};

export default CustomerOrdersHeader;
