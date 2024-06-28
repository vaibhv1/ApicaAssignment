import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './styles/SalesBarChart.css'
const data = [
  { name: 'Sept 10', Sales: 80 },
  { name: 'Sept 11', Sales: 60 },
  { name: 'Sept 12', Sales: 70 },
  { name: 'Sept 13', Sales: 50 },
  { name: 'Sept 14', Sales: 90 },
  { name: 'Sept 15', Sales: 65 },
  { name: 'Sept 16', Sales: 85 },
];

const SalesBarChart = () => {
  return (
    <ResponsiveContainer className="chart" width="75%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sales" fill="#8884d8" barSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesBarChart;