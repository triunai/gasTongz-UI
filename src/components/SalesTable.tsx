// src/components/SalesTable.tsx  
import React from 'react';  


const SalesTable = () => {  
//   const { data: transactions } = useQuery('transactions', getTransactions);

  const transactions = [
    {
      id: 1,
      date: "2024-01-01T12:00:00Z",
      shop: { name: "Downtown Gas Station" },
      total: 500,
      paymentMethod: "Cash"
    },
    {
      id: 2,
      date: "2024-01-02T15:30:00Z",
      shop: { name: "Uptown Fuel" },
      total: 300,
      paymentMethod: "QR"
    },
    {
      id: 3,
      date: "2024-01-03T09:15:00Z",
      shop: { name: "Highway Gas" },
      total: 750,
      paymentMethod: "TNG"
    }
    ];
    
return (
    <div className="overflow-x-auto my-8 shadow-lg rounded-lg">
      <table className="table-auto w-full bg-black text-white">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="py-4 px-6 border-r border-gray-200">ID</th>
            <th className="py-4 px-6 border-r border-gray-200">Date</th>
            <th className="py-4 px-6 border-r border-gray-200">Shop</th>
            <th className="py-4 px-6 border-r border-gray-200 ">Total</th>
            <th className="py-4 px-6">Payment</th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-200">
          {transactions.map((t) => (
            <tr key={t.id} className="hover:bg-gray-900 text-center">
              <td className="py-4 px-6 border-r border-orange-500">{t.id}</td>
              <td className="py-4 px-6 border-r border-orange-500">{new Date(t.date).toLocaleDateString()}</td>
              <td className="py-4 px-6 border-r border-orange-500">{t.shop.name}</td>
              <td className="py-4 px-6 border-r border-orange-500">${t.total}</td>
              <td className="py-4 px-6">{t.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 

export default SalesTable;