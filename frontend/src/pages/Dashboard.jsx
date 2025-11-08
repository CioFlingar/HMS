import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-6">
          <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
          <p>Welcome to the Hospital Management System!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
