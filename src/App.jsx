import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Noticeboard from "./pages/Noticeboard";
import Gallery from "./pages/Gallery";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/admissions" element={<Admissions/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/noticeboard" element={<Noticeboard/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/dashboard/admin" element={<PrivateRoute role="admin"><AdminDashboard/></PrivateRoute>} />
          <Route path="/dashboard/teacher" element={<PrivateRoute role="teacher"><TeacherDashboard/></PrivateRoute>} />
          <Route path="/dashboard/student" element={<PrivateRoute role="student"><StudentDashboard/></PrivateRoute>} />

          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
// bg-[#0b1a1e]
export default App;
