// src/components/login/ForgotPassword.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { FaEnvelope, FaHome } from "react-icons/fa";
import "./Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox.");
    } catch (err) {
      setError(
        "Failed to send reset email. Please check if the email is correct."
      );
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="login-page-background d-flex justify-content-center align-items-center min-vh-100 p-3">
      <div className="wrapper bg-transparent border border-2 border-white border-opacity-25 shadow-lg text-white rounded-4 p-4 p-md-5 position-relative">
        <Link
          to="/"
          className="btn btn-link text-white position-absolute top-0 end-0 mt-3 me-3 d-flex align-items-center"
          style={{ zIndex: 10 }}
        >
          <FaHome className="me-1" /> Home
        </Link>
        <h1 className="text-center mb-4">Reset Password</h1>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3 position-relative input-with-icon">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="input-icon text-white-50" />
          </div>

          <button
            type="submit"
            className="btn btn-light w-100 py-2 fw-bold"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="text-center mt-3">
            {/* --- FIXED LINK --- */}
            <Link
              to="/student-login"
              className="btn btn-link text-white text-decoration-underline p-0 border-0 bg-transparent"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
