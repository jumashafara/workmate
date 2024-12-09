import React from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-8">{children}</div>
    </div>
  );
};

export default Layout;
