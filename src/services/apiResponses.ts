// src/types/apiResponses.ts
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
  date: string; // From TransactionDate
  shopId: number;
  total: number; // From TotalAmount
  paymentMethod: number; // From PaymentMethod
  paymentStatus: number; // From PaymentStatus
  receiptImagePath: string | null; // From ReceiptImagePath
  createdAt: string; // From CreatedAt
  createdBy: number | null; // From CreatedBy
  updatedAt: string; // From UpdatedAt
  updatedBy: number | null; // From UpdatedBy
}

export interface LowStockInventoryResponse {
  productId: number;
  productName: string;
  quantity: number;
}