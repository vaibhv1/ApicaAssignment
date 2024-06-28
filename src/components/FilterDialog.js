// src/components/FilterDialog.js
import React from 'react';
import {
  Dialog, DialogActions, DialogContent, DialogTitle,
  Button, TextField, MenuItem
} from '@mui/material';

const FilterDialog = ({ open, onClose, onApply }) => {
  const [name, setName] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleApply = () => {
    onApply({ name, status });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Filter Orders</DialogTitle>
      <DialogContent>
        <TextField
          label="Customer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          fullWidth
          margin="dense"
        >
          <MenuItem value=""><em>All</em></MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="In-Progress">In-Progress</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleApply} color="primary">Apply</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterDialog;