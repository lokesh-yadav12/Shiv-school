import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="py-20 text-center">
    <h2 className="text-3xl font-bold mb-2">404 - Page not found</h2>
    <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
    <Link to="/" className="text-blue-600">Go back home</Link>
  </div>
);

export default NotFound;
