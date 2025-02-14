// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import MetricCard from '../components/MetricCard';
import SalesTable from '../components/SalesTable';
import ChartCard from '../components/ChartCard';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';

const Dashboard: React.FC = () => {



  const [cards, setCards] = useState([
  { id: 1, title: 'Sales Q1', value: 500 },
  { id: 2, title: 'Inventory', value: 120 },
  { id: 3, title: 'Low Stock', value: 8 },
  ]);
  
  // Sample Data for Charts
  const salesData = [
    { name: 'Jan', Sales: 400 },
    { name: 'Feb', Sales: 430 },
    { name: 'Mar', Sales: 500 },
    { name: 'Apr', Sales: 520 },
  ];

  const inventoryData = [
    { name: 'Shop1', Inventory: 80 },
    { name: 'shop4', Inventory: 120 },
    { name: 'shop3', Inventory: 150 },
    { name: 'Shop2', Inventory: 100 },
  ];
  
  return (
    <div className="w-full mx-auto p-4 bg-gradient-to-r from-zinc-900 to-slate-800">
      <h2 className="font-playfair text-2xl font-semibold mb-4 text-orange-500">🙏Vanakkam Da Mapillai🙏</h2>
      <p className="text-white">
        This is your dashboard. Here you'll eventually see key metrics, inventory stats, and sales data.
      </p>
      <div className='my-5'></div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {cards.map((card) => (
        <MetricCard key={card.title} title={card.title} value={card.value} />
      ))}
      </div>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 ">
        <ChartCard
          title="Q1 Sales Trend"
          chart={<LineChart data={salesData}
          />}
        />
        <ChartCard
          title="Inventory Levels"
          chart={<BarChart data={inventoryData} />}
        />
      </div>

      <SalesTable/>

    </div>
  );
};

export default Dashboard;
