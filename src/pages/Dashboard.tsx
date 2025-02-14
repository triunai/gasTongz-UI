import React, { useState, useEffect } from 'react';
import { SalesSummaryResponse, MonthlySalesResponse, TransactionResponse, LowStockInventoryResponse } from '../services/apiResponses';
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
  const [recentTransactions, setRecentTransactions] = useState<TransactionResponse[]>([]);
  const [lowStockInventory, setLowStockInventory] = useState<LowStockInventoryResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          summary,
          sales,
          transactions,
          lowStock
        ] = await Promise.all([
          fetchSalesSummary(),
          fetchMonthlySales(),
          fetchRecentTransactions(),
          fetchLowStockInventory(),
        ]);

        setSalesSummary(summary);
        setMonthlySales(sales);
        setRecentTransactions(transactions);
        setLowStockInventory(lowStock);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

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
      {/* ... rest of your component */}
    </div>
  );
};

export default Dashboard;