import API from '../api'; // Import your Axios instance

export interface SalesSummaryResponse {
  totalSales: number;
  averageTransaction: number;
}

export interface MonthlySalesResponse {
  month: string;
  salesAmount: number;
}

export interface TransactionResponse {
  id: number;
  date: string;
  shop: string;
  product: string;
  quantity: number;
  total: number;
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
    return data.Data; // Extract data from ApiResponse
  } catch (error) {
    throw new Error('Failed to fetch monthly sales');
  }
};

export const fetchRecentTransactions = async (): Promise<TransactionResponse[]> => {
  try {
    const { data } = await API.get('/transactions');
    return data.Data.slice(0, 10); // Extract and slice data
  } catch (error) {
    throw new Error('Failed to fetch recent transactions');
  }
};