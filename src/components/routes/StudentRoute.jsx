// src/components/routes/StudentRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjust path if needed

const StudentRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // If the user is logged in, show the page. Otherwise, redirect to login.
  return currentUser ? children : <Navigate to="/login" />;
};

export default StudentRoute;
