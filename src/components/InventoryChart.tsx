import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { BarChartData } from '../types/chartData';

const InventoryChart = () => {
    const [inventoryData, setInventoryData] = useState<BarChartData>({
     labels: [],
    datasets: [{
      label: 'Stock Levels',
      data: [],
      backgroundColor: '#28a745',
    }] 
  });

  useEffect(() => {
    axios.get('/api/inventory')
      .then(response => {
        const { shops, quantities } = response.data;
        setInventoryData({
          labels: shops,
          datasets: [{
            label: 'Stock Levels',
            data: quantities,
            backgroundColor: '#28a745',
          }]
        });
      });
  }, []);

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Inventory Levels</h3>
      <Bar data={inventoryData} options={{ responsive: true }} />
    </div>
  );
};

export default InventoryChart;