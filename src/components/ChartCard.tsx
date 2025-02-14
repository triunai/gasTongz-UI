// components/ChartCard.tsx
import React from 'react';

interface ChartCardProps {
  title: string;
  chart: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chart }) => (
  <div className="bg-black text-white p-6 rounded-lg shadow-lg shadow-amber-500 border-amber-800">
    <h3 className="text-xl font-semibold mb-4 border-amber-800">{title}</h3>
    <div className="chart-container bg-black rounded-lg p-4">
      {chart}
    </div>
  </div>
);

export default ChartCard;