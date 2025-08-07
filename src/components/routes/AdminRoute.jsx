// src/components/routes/AdminRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjust path if needed

const AdminRoute = ({ children }) => {
  const { currentUser, userRole } = useAuth();

  // If the user is logged in AND their role is 'admin', show the page.
  // Otherwise, redirect them to the homepage.
  return currentUser && userRole === "admin" ? children : <Navigate to="/" />;
};

export default AdminRoute;
