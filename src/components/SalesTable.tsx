// src/components/SalesTable.tsx  
import React from 'react';  
import { TransactionResponse } from '../services/apiResponses';



interface SalesTableProps {
  data: TransactionResponse[];
}

// src/components/SalesTable.tsx
const SalesTable: React.FC<SalesTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto my-8 shadow-lg rounded-lg">
      <table className="table-auto w-full bg-black text-white">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="py-4 px-6 border-r border-gray-200">ID</th>
            <th className="py-4 px-6 border-r border-gray-200">Date</th>
            <th className="py-4 px-6 border-r border-gray-200">Shop</th>
            <th className="py-4 px-6 border-r border-gray-200">Total</th>
            <th className="py-4 px-6">Payment</th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-200">
          {data.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-900 text-center">
              <td className="py-4 px-6 border-r border-orange-500">{transaction.id}</td>
              <td className="py-4 px-6 border-r border-orange-500">{new Date(transaction.date).toLocaleDateString()}</td>
              <td className="py-4 px-6 border-r border-orange-500">{transaction.shopId}</td>
              <td className="py-4 px-6 border-r border-orange-500">${transaction.total}</td>
              <td className="py-4 px-6">{transaction.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;