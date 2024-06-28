// src/components/CustomerOrders.js
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
    { id: 1, name: 'Janet Adebayo', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fjr73', total: '₦25,000.00', action: 'Completed', status: 'Completed' },
    { id: 2, name: 'Samuel Johnson', date: '12 Aug 2022 - 12:25 am', type: 'Home Delivery', trackingId: '9348fjr73', total: '₦25,000.00', action: 'In-Progress', status: 'In-Progress' },
    // add more sample data as needed
  ]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ name: '', status: '' });
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
      // Add date filtering logic here
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
      <Pagination 
        count={Math.ceil(orders.length / itemsPerPage)} 
        page={page} 
        onChange={handleChangePage} 
      />
      <FilterDialog
        open={isFilterDialogOpen}
        onClose={() => setIsFilterDialogOpen(false)}
        onApply={handleFilterApply}
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