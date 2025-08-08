import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-400 shadow sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold">SS</div>
          <div>
            <div className="font-bold text-lg">Shiv School</div>
            <div className="text-xs text-gray-500">Learning. Growing. Leading.</div>
          </div>
        </Link>

        {/* Middle - Empty space */}
        <div className="flex-1"></div>

        {/* Right - Menu + Auth */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-700"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-700"}>About</NavLink>
          <NavLink to="/admissions" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-700"}>Admissions</NavLink>
          <NavLink to="/noticeboard" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-700"}>Notices</NavLink>
          <NavLink to="/gallery" className={({isActive}) => isActive ? "text-blue-600 font-medium" : "text-gray-700"}>Gallery</NavLink>

          {user ? (
            <>
              <Link 
                to={
                  user.role === "admin" 
                    ? "/dashboard/admin" 
                    : user.role === "teacher" 
                    ? "/dashboard/teacher" 
                    : "/dashboard/student"
                } 
                className="px-3 py-1 rounded border"
              >
                {user.name}
              </Link>
              <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
            </>
          ) : (
            <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
          )}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 ml-4" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <FaTimes/> : <FaBars/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-3">
            <NavLink to="/" onClick={()=>setOpen(false)} className="text-gray-700">Home</NavLink>
            <NavLink to="/about" onClick={()=>setOpen(false)} className="text-gray-700">About</NavLink>
            <NavLink to="/admissions" onClick={()=>setOpen(false)} className="text-gray-700">Admissions</NavLink>
            <NavLink to="/noticeboard" onClick={()=>setOpen(false)} className="text-gray-700">Notices</NavLink>
            <NavLink to="/gallery" onClick={()=>setOpen(false)} className="text-gray-700">Gallery</NavLink>
            <div className="pt-2 border-t">
              {user ? (
                <>
                  <Link to="/" onClick={()=>setOpen(false)} className="block py-2">Dashboard</Link>
                  <button onClick={()=>{ logout(); setOpen(false); }} className="w-full text-left py-2 text-red-600">Logout</button>
                </>
              ) : (
                <Link to="/login" onClick={()=>setOpen(false)} className="block py-2">Login</Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
