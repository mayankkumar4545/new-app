// src/components/dashboard/StudentDashboard.js
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Your Dashboard</h1>
      <p>
        Hello, <strong>{currentUser?.email}</strong>!
      </p>
      <p>Your enrolled courses will appear here.</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default StudentDashboard;
