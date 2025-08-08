import React from "react";

const AdminDashboard = () => {
  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard - Shiv School</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Manage Teachers</div>
          <div className="bg-white p-4 rounded shadow">Manage Students</div>
          <div className="bg-white p-4 rounded shadow">Notices & Events</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
