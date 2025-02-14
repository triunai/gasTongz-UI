import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { ChartData } from '../types/chartData';


const SalesChart = () => {
    const [salesData, setSalesData] = useState<ChartData>({
      labels: [],
    datasets: [{
      label: 'Total Sales',
      data: [],
      borderColor: '#007bff',
      fill: false,
    }]
  });

  useEffect(() => {
    axios.get('/api/sales')
      .then(response => {
        const { dates, amounts } = response.data;
        setSalesData({
          labels: dates,
          datasets: [{
            label: 'Total Sales',
            data: amounts,
            borderColor: '#007bff',
            fill: false,
          }]
        });
      });
  }, []);

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Sales Trend</h3>
      <Line data={salesData} options={{ responsive: true }} />
    </div>
  );
};

export default SalesChart;