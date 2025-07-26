// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import ManageStudents from './pages/admin/ManageStudents';
const App = () => {
  return (
    <Routes>
      {/* ADMIN ROUTES */}
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/admin/students" element={<ManageStudents />} />


      {/* STUDENT ROUTES */}
      <Route path="/student/*" element={<StudentDashboard />} />

      {/* TEACHER ROUTES */}
      <Route path="/teacher/*" element={<TeacherDashboard />} />
    </Routes>
  );
};

export default App;
