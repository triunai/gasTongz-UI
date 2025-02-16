// src/types/apiResponses.ts
export interface SalesSummaryResponse {
  totalSales: number;
  averageTransaction: number;
}

export interface MonthlySalesResponse {
  name: string;
  Sales: number;
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


export interface TransactionSummaryResponse {
  id: number;
  shopId: number;
  transactionDate: string; // ISO 8601 datetime string
  paymentMethod: string; // Serialized enum value
  paymentStatus: string; // Serialized enum value
  totalAmount: number;
  receiptImagePath: string | null;
  createdAt: string; // ISO 8601 datetime string
  createdBy: number | null;
  updatedAt: string; // ISO 8601 datetime string
  updatedBy: number | null;
  transactionDetails: Array<{
    id: number;
    productId: number;
    quantity: number;
    unitPrice: number;
    createdAt: string; // ISO 8601 datetime string
    createdBy: number | null;
    updatedAt: string; // ISO 8601 datetime string
    updatedBy: number | null;
  }>;
}


// todo: move this to its own folder
export interface LowStockInventoryResponse {
  productId: number;
  productName: string;
  quantity: number;
}


export interface SalesSummaryResponse {
  totalSales: number;
  averageTransaction: number;
}

export interface MonthlySalesResponse {
  month: string;
  salesAmount: number;
}