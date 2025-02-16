// components/LineChart.tsx
import React from 'react';
import { LineChart as RechartsLine, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: Array<{ name: string; Sales: number }>;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  console.log('LineChart data:', data);
  if (data.length === 0) {
    return <div>No sales data available, check Api</div>;
  }
  return (
  
  <ResponsiveContainer width="100%" height={200} className="bg-transparent">
    <RechartsLine
      data={data}
      margin={{ top: 10, right: 30, left: -5, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#444" /> {/* Gray grid */}
      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#fff' }} />
      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#fff' }} />
      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a' }} />
      <Legend iconSize={10} wrapperStyle={{ left: '2px' }} />
      <Line
        type="monotone"
        dataKey="Sales"
        stroke="#ff6b00" // Orange line
        strokeWidth={3}
        dot={{ stroke: '#ff6b00', fill: '#ff6b00' }}
      />
    </RechartsLine>
  </ResponsiveContainer>
);
}; 

export default LineChart;