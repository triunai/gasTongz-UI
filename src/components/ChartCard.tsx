// components/ChartCard.tsx
import React from 'react';

interface ChartCardProps {
  title: string;
  chart: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chart }) => (
  <div className="chart-card">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="chart-container">{chart}</div>
  </div>
);

export default ChartCard;