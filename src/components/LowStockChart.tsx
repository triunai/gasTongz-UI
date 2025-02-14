import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

const LowStockChart = () => {
    const [lowStockData, setLowStockData] = useState({
      labels: ['Low Stock', 'In Stock'],
    datasets: [{
      label: 'Stock Status',
      data: [0, 0],
      backgroundColor: ['#dc3545', '#6c757d'],
    }]
  });
  

  useEffect(() => {
    axios.get('/api/low-stock')
      .then(response => {
        const { lowStockCount, totalItems } = response.data;
        setLowStockData({
            labels: ['Low Stock', 'In Stock'],
            datasets: [{
                label: 'Stock Status',
                data: [lowStockCount, totalItems - lowStockCount],
                backgroundColor: ['#dc3545', '#6c757d'],
            }]
            });
      });
  }, []);

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Low Stock Alert</h3>
      <Doughnut data={lowStockData} options={{ responsive: true }} />
    </div>
  );
};

export default LowStockChart;