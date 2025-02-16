// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {

  const navItems = [
    { id: 1, label: 'Home', url: '/' },
    { id: 2, label: 'Inventory', url: '/inventory' },
    { id: 3, label: 'Shops', url: '/shops' },
  ];


  return (
    <header className="bg-orange-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">GasTongz Admin Dashboard</h1>
        <nav>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
