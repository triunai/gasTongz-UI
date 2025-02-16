import API from '../api'; // Import your Axios instance
import { TransactionResponse, TransactionSummaryResponse } from './apiResponses';
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


export const fetchRecentTransactions = async (): Promise<TransactionSummaryResponse[]> => {
  try {
    const response = await API.get('/transactions/recent');
    console.log('API Response:', response); // Log the full API response
    console.log('API Data:', response.data.data); // Log the `data` field
    return response.data.data || []; // Explicitly access the nested 'data' field
  } catch (error) {
    console.error('Error fetching recent transactions:', error);
    return []; // Return an empty array on failure
  }
};