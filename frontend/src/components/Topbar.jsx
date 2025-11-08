import React from "react";

const Topbar = () => (
  <div className="bg-white shadow p-4 flex justify-between items-center">
    <h2 className="text-xl font-semibold">Hospital Dashboard</h2>
    <button
      onClick={() => {
        localStorage.removeItem("loggedIn");
        window.location.href = "/";
      }}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Logout
    </button>
  </div>
);

export default Topbar;
