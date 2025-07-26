// src/pages/Admin/ManageStudents.jsx

import React, { useState } from "react";

const ManageStudents = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Aryan Sharma",
      grade: "10",
      section: "A",
      email: "aryan.sharma@example.com",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Pooja Verma",
      grade: "9",
      section: "B",
      email: "pooja.verma@example.com",
      phone: "9876501234",
    },
  ]);

  const handleDelete = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Students</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Grade</th>
              <th className="p-3">Section</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.grade}</td>
                <td className="p-3">{student.section}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">{student.phone}</td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline mr-3">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="6" className="p-3 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;
