import React, { useState } from 'react';
import CustomerOrdersHeader from './CustomerOrdersHeader';
import FilterDialog from './FilterDialog';
import DateFilterDialog from './DateFilterDialog';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Pagination
} from '@mui/material';

const CustomerOrders = () => {
  const [orders, setOrders] = useState([
    { id: 11, name: 'Emily Smith', date: '13 Sep 2022 - 10:15 am', type: 'Pickup', trackingId: '93j9f8w24', total: '₦15,500.00', action: 'Completed', status: 'Completed' },
    { id: 12, name: 'John Doe', date: '14 Sep 2022 - 2:30 pm', type: 'Home Delivery', trackingId: '73n4t3k9', total: '₦18,200.00', action: 'In-Progress', status: 'In-Progress' },
    { id: 13, name: 'Alice Brown', date: '15 Sep 2022 - 4:45 pm', type: 'Store Pickup', trackingId: '23kd8fj7', total: '₦12,000.00', action: 'Completed', status: 'Completed' },
    { id: 14, name: 'Michael Johnson', date: '16 Sep 2022 - 9:00 am', type: 'Home Delivery', trackingId: '98fjsl42', total: '₦21,500.00', action: 'In-Progress', status: 'In-Progress' },
    { id: 15, name: 'Sophia Garcia', date: '17 Sep 2022 - 11:20 am', type: 'Home Delivery', trackingId: '82n3tj49', total: '₦30,000.00', action: 'In-Progress', status: 'Pending' },
    { id: 16, name: 'Oliver Taylor', date: '18 Sep 2022 - 1:55 pm', type: 'Pickup', trackingId: '49t3jfl8', total: '₦16,800.00', action: 'In-Progress', status: 'In-Progress' },
    { id: 17, name: 'Isabella Martinez', date: '19 Sep 2022 - 3:10 pm', type: 'Home Delivery', trackingId: '29fls8g4', total: '₦22,000.00', action: 'Completed', status: 'Completed' },
    { id: 18, name: 'William Robinson', date: '20 Sep 2022 - 5:30 pm', type: 'Store Pickup', trackingId: '98sjfl37', total: '₦14,500.00', action: 'Completed', status: 'Completed' },
    { id: 19, name: 'Emma Wilson', date: '21 Sep 2022 - 8:45 am', type: 'Home Delivery', trackingId: '83jf9s4l', total: '₦17,700.00', action: 'In-Progress', status: 'Pending' },
    { id: 20, name: 'James Thompson', date: '22 Sep 2022 - 10:00 am', type: 'Home Delivery', trackingId: '37g4kj9f', total: '₦25,600.00', action: 'In-Progress', status: 'In-Progress' }
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ name: '', status: '', orderType: '' }); // Added orderType
  const [dateFilter, setDateFilter] = useState({ dateRange: [null, null], preset: '' });
  const [page, setPage] = useState(1);
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const [isDateFilterDialogOpen, setIsDateFilterDialogOpen] = useState(false);
  const itemsPerPage = 10;

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterClick = () => {
    setIsFilterDialogOpen(true);
  };

  const handleFilterApply = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDateFilterClick = () => {
    setIsDateFilterDialogOpen(true);
  };

  const handleDateFilterApply = (newDateFilter) => {
    setDateFilter(newDateFilter);
  };

  const handleShareClick = () => {
    // Implement share logic
  };

  const handleBulkActionClick = (action) => {
    // Implement bulk action logic
    console.log('Bulk action:', action);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const filteredOrders = orders
    .filter(order =>
      order.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter.name ? order.name.toLowerCase().includes(filter.name.toLowerCase()) : true) &&
      (filter.status ? order.status === filter.status : true) &&
      (filter.orderType ? order.type === filter.orderType : true) && // Added orderType filter
      (!dateFilter.dateRange[0] || new Date(order.date) >= new Date(dateFilter.dateRange[0])) &&
      (!dateFilter.dateRange[1] || new Date(order.date) <= new Date(dateFilter.dateRange[1]))
    )
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <CustomerOrdersHeader
        search={search}
        onSearchChange={handleSearchChange}
        onFilterClick={handleFilterClick}
        onDateFilterClick={handleDateFilterClick}
        onShareClick={handleShareClick}
        onBulkActionClick={handleBulkActionClick}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Order Type</TableCell>
              <TableCell>Tracking ID</TableCell>
              <TableCell>Order Total</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.type}</TableCell>
                <TableCell>{order.trackingId}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.action}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FilterDialog
        open={isFilterDialogOpen}
        onClose={() => setIsFilterDialogOpen(false)}
        onApply={handleFilterApply}
        orderType={filter.orderType}
      />
      <DateFilterDialog
        open={isDateFilterDialogOpen}
        onClose={() => setIsDateFilterDialogOpen(false)}
        onApply={handleDateFilterApply}
      />
    </div>
  );
};

export default CustomerOrders;