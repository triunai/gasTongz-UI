import API from '../api'; // Import your Axios instance
import { TransactionResponse } from './apiResponses';
export interface SalesSummaryResponse {
  totalSales: number;
  averageTransaction: number;
}

export interface MonthlySalesResponse {
  month: string;
  salesAmount: number;
}


export const fetchSalesSummary = async (): Promise<SalesSummaryResponse> => {
  try {
    const { data } = await API.get('/transactions/summary');
    return data.Data; // Extract data from ApiResponse
  } catch (error) {
    throw new Error('Failed to fetch sales summary');
  }
};

// src/services/transactionsService.ts
export const fetchMonthlySales = async (): Promise<MonthlySalesResponse[]> => {
  try {
    const { data } = await API.get('/transactions/monthly');
    return data.Data.map((item: { monthName: string; salesAmount: any; }) => ({
      name: item.monthName, // Maps to "monthName" from API
      Sales: item.salesAmount // Maps to "salesAmount" from API
    }));
  } catch (error) {
    throw new Error('Failed to fetch monthly sales');
  }
};

export const fetchRecentTransactions = async (): Promise<TransactionResponse[]> => {
  try {
    const { data } = await API.get('/transactions');
    return data.Data; // Ensure this matches the TransactionResponse interface
  } catch (error) {
    throw new Error('Failed to fetch recent transactions');
  }
};