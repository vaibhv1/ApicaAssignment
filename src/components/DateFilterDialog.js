import React, { useState } from 'react';
import {
  Dialog, DialogActions, DialogContent, DialogTitle,
  Button, FormControl, FormControlLabel, Checkbox,
  TextField, Box
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const DateFilterDialog = ({ open, onClose, onApply }) => {
  const [selectedRange, setSelectedRange] = useState([null, null]);
  const [selectedPreset, setSelectedPreset] = useState('');

  const handlePresetChange = (event) => {
    setSelectedPreset(event.target.value);
    // You can set date ranges based on the selected preset
  };

  const handleApply = () => {
    onApply({ dateRange: selectedRange, preset: selectedPreset });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Filter by Date</DialogTitle>
      <DialogContent>
        <FormControl component="fieldset">
          <FormControlLabel
            control={<Checkbox checked={selectedPreset === 'This Week'} onChange={handlePresetChange} value="This Week" />}
            label="This Week"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedPreset === 'Last Week'} onChange={handlePresetChange} value="Last Week" />}
            label="Last Week"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedPreset === 'This Month'} onChange={handlePresetChange} value="This Month" />}
            label="This Month"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedPreset === 'Last Month'} onChange={handlePresetChange} value="Last Month" />}
            label="Last Month"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedPreset === 'This Year'} onChange={handlePresetChange} value="This Year" />}
            label="This Year"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedPreset === 'Last Year'} onChange={handlePresetChange} value="Last Year" />}
            label="Last Year"
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox />}
          label="Date Range"
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <DatePicker
              label="From"
              value={selectedRange[0]}
              onChange={(date) => setSelectedRange([date, selectedRange[1]])}
              renderInput={(params) => <TextField {...params} margin="dense" />}
            />
            <DatePicker
              label="To"
              value={selectedRange[1]}
              onChange={(date) => setSelectedRange([selectedRange[0], date])}
              renderInput={(params) => <TextField {...params} margin="dense" />}
            />
          </Box>
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Cancel</Button>
        <Button onClick={handleApply} color="primary">Filter</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DateFilterDialog;