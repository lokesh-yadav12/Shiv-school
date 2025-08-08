import React from "react";

const TeacherDashboard = () => (
  <div className="py-12">
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Teacher Dashboard - Shiv School</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">Take Attendance</div>
        <div className="bg-white p-4 rounded shadow">Upload Resources</div>
      </div>
    </div>
  </div>
);

export default TeacherDashboard;
