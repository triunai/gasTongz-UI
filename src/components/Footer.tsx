// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white text-center py-4">
      {/* fix the min-h-33 later, temp solution */}
      <div className="sticky w-full min-h-33">
        <p>&copy; {new Date().getFullYear()} GasTongz. All rights reserved.</p>
        <p className="mt-2">
          Built with ❤️ using React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;