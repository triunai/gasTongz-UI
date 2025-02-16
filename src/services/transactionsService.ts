import API from '../api'; // Import your Axios instance
import { MonthlySalesResponse, SalesSummaryResponse, TransactionSummaryResponse } from './apiResponses';



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
    const response = await API.get('/transactions/monthly');
    const rawData = response.data.data; // Array of { monthName, salesAmount, ... }
    
    return rawData.map((item: { monthName: string; salesAmount: number }) => ({
      name: item.monthName,       // e.g., "February 2025"
      Sales: item.salesAmount      // e.g., 79
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