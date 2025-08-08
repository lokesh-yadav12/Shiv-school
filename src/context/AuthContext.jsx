import React, { createContext, useContext, useEffect, useState } from "react";
import api, { setAuthToken } from "../services/api";

/**
 * Simple auth context (frontend-only starter).
 * Saves token to localStorage and provides user object.
 * When you add backend, update login/register functions to call real API.
 */

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, email, role }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userJson = localStorage.getItem("user");
    if (token) {
      setAuthToken(token);
      try {
        setUser(JSON.parse(userJson));
      } catch {
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mocked login: accepts any credentials for demo
    // Replace with: const res = await api.post('/auth/login', {email,password});
    const fakeUser = {
      name: email.split("@")[0] || "Student",
      email,
      role: email.includes("teacher") ? "teacher" : email.includes("admin") ? "admin" : "student",
    };
    const fakeToken = "demo-token-123";
    localStorage.setItem("token", fakeToken);
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setAuthToken(fakeToken);
    setUser(fakeUser);
    return fakeUser;
  };

  const register = async (payload) => {
    // Mocked register - replace with real API
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
