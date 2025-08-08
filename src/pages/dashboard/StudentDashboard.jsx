import React from "react";

const StudentDashboard = () => (
  <div className="py-12">
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Student Dashboard - Shiv School</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">View Attendance</div>
        <div className="bg-white p-4 rounded shadow">View Grades & Resources</div>
      </div>
    </div>
  </div>
);

export default StudentDashboard;
