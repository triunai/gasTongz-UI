// components/LineChart.tsx
import React from 'react';
import { LineChart as RechartsLine, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: Array<{ name: string; sales: number }>;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <RechartsLine data={data} margin={{ top: 10, right: 30, left: -5, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#5C6BC0" activeDot={{ r: 8 }} />
    </RechartsLine>
  </ResponsiveContainer>
);

export default LineChart;