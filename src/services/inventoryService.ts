import API from '../api';

export interface LowStockInventoryResponse {
  productId: number;
  productName: string;
  quantity: number;
}

export const fetchLowStockInventory = async (): Promise<LowStockInventoryResponse[]> => {
  try {
    const { data } = await API.get('/inventory/low-stock');
    return data.Data; // Extract data from ApiResponse
  } catch (error) {
    throw new Error('Failed to fetch low stock inventory');
  }
};