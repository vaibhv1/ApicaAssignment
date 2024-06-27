import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './styles/MarketingChart.css'
const MarketingChart = () => {
  const data = {
    labels: ['Acquisition', 'Purchase', 'Retention'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#A5B4FC', '#6366F1', '#FCD34D'],
        hoverBackgroundColor: ['#A5B4FC', '#6366F1', '#FCD34D'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '80%',
    maintainAspectRatio: false,
  };
  return (
    <div className="marketing-chart" style={{ backgroundColor: '#fff', padding: '20px' }}>
      <div className="header">
        <div className="title">Marketing</div>
        <div className="timeframe">This Week <span className="arrow">▼</span></div>
      </div>
      <div className="legend">
        <div><span className="dot acquisition"></span> Acquisition</div>
        <div><span className="dot purchase"></span> Purchase</div>
        <div><span className="dot retention"></span> Retention</div>
      </div>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default MarketingChart;