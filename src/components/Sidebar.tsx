import React, { useState } from "react";
import {
  FaBars,
  FaChartBar,
  FaChartLine,
  FaQuestion,
  FaCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 min-h-screen ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          className="p-4 text-xl focus:outline-none hover:bg-gray-700"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <ul className="mt-4">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <FaChartBar className="text-lg" />
              {isOpen && <span className="ml-4">Feature Importance</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/model-metrics"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <FaChartLine className="text-lg" />
              {isOpen && <span className="ml-4">Model Metrics</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/what-if"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <FaQuestion className="text-lg" />
              {isOpen && <span className="ml-4">What If ...</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <FaCog className="text-lg" />
              {isOpen && <span className="ml-4">Settings</span>}
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      {/* <div className="flex-grow bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Welcome to My App</h1>
        <p className="mt-2">Click the menu icon to toggle the sidebar!</p>
      </div> */}
    </div>
  );
};

export default Sidebar;
