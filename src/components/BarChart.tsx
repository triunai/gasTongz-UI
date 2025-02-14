// components/BarChart.tsx
import React from 'react';
import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: Array<{ name: string; inventory: number }>;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <RechartsBar data={data} margin={{ top: 10, right: 30, left: -5, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="inventory" fill="#4CAF50" barSize={20} />
    </RechartsBar>
  </ResponsiveContainer>
);

export default BarChart;