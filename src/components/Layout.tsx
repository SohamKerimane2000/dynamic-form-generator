import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 h-screen">
      {children}
    </div>
  );
};

export default Layout;
