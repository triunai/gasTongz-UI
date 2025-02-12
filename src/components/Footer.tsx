// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-4">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} GasTongz. All rights reserved.</p>
        <p className="mt-2">
          Built with ❤️ using React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;