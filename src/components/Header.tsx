// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {

  // add pages to the header here
  const pages = ["Home", "Inventory", "Shops", "Inventory"];


  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">GasTongz Admin Dashboard</h1>
        <nav className="space-x-4">
          {pages.map(page => (
            <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded">{page}</button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
