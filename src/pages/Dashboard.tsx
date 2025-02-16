import React, { useState, useEffect } from 'react';
import { SalesSummaryResponse, MonthlySalesResponse, TransactionResponse, LowStockInventoryResponse, TransactionSummaryResponse } from '../services/apiResponses';
import MetricCard from '../components/MetricCard';
import SalesTable from '../components/SalesTable';
import ChartCard from '../components/ChartCard';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import { fetchSalesSummary, fetchMonthlySales, fetchRecentTransactions } from '../services/transactionsService';
import { fetchLowStockInventory } from '../services/inventoryService';

const Dashboard: React.FC = () => {
  const [salesSummary, setSalesSummary] = useState<SalesSummaryResponse | null>(null);
  const [monthlySales, setMonthlySales] = useState<MonthlySalesResponse[]>([]);
  const [recentTransactions, setRecentTransactions] = useState<TransactionSummaryResponse[]>([]);
  const [lowStockInventory, setLowStockInventory] = useState<{ name: string; Inventory: number }[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          summary,
          monthlySalesData,
          transactions
          // lowStockInventoryData
        ] = await Promise.all([
          fetchSalesSummary(),
          fetchMonthlySales(),
          fetchRecentTransactions(),
          // fetchLowStockInventory(),
        ]);
        setSalesSummary(summary);
        setMonthlySales(monthlySalesData);
        // setLowStockInventory(lowStockInventory);
        setRecentTransactions(transactions);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
  console.log('Now recentTransactions has updated:', recentTransactions);
}, [recentTransactions]);

  const cards = [
    { 
      id: 1, 
      title: 'Sales Q1', 
      value: salesSummary?.totalSales || 0 
    },
    { 
      id: 2, 
      title: 'Inventory', 
      value: 120 // Update with backend data later
    },
    { 
      id: 3, 
      title: 'Low Stock', 
      value: lowStockInventory?.length || 0 
    },
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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
        <ChartCard
          title="Q1 Sales Trend"
          chart={<LineChart data={monthlySales} />}
        />
        <ChartCard
          title="Inventory Levels"
          chart={<BarChart data={lowStockInventory} />}
        />
      </div>

      <SalesTable data={recentTransactions} />
    </div>
  );
};

export default Dashboard;