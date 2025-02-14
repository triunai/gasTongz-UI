// components/BarChart.tsx
import React from 'react';
import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: Array<{ name: string; Inventory: number }>;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={200} className="bg-transparent">
    <RechartsBar
      data={data}
      margin={{ top: 10, right: 30, left: -5, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#fff' }} />
      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#fff' }} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a' }}
                cursor={{fill: '#211c1a'} }      />
      <Legend iconSize={10} wrapperStyle={{ left: '2px' }} />
      <Bar
        dataKey="Inventory"
        fill="#ff6b00" // Orange bars
        barSize={20}
        background={{ fill: '#333' }}
        activeBar={{ fill: '#ff4500' }} // Darker orange on hover
      />
    </RechartsBar>
  </ResponsiveContainer>
);

export default BarChart;