// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import MetricCard from '../components/MetricCard';

const Dashboard: React.FC = () => {

  const [cards, setCards] = useState([
  { id: 1, title: 'Sales Q1', value: 500 },
  { id: 2, title: 'Inventory', value: 120 },
  { id: 3, title: 'Low Stock', value: 8 },
]);
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Welcome, Admin!</h2>
      <p className="text-gray-700">
        This is your dashboard. Here you'll eventually see key metrics, inventory stats, and sales data.
      </p>
      <div className='my-5'></div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {cards.map((card) => (
        <MetricCard key={card.title} title={card.title} value={card.value} />
      ))}
      </div>

    </div>
  );
};

export default Dashboard;
