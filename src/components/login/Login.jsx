import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaHome,
} from "react-icons/fa";
import "./Login.css";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Login = ({ role }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const pageTitle = role === "admin" ? "Admin Login" : "Student Login";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      // --- Registration Logic ---
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        const allowedEmailRef = doc(db, "allowedEmails", formData.email);
        const allowedEmailDoc = await getDoc(allowedEmailRef);

        if (!allowedEmailDoc.exists()) {
          alert(
            "This email is not authorized to register. Please contact an administrator."
          );
          return;
        }

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          fullName: formData.fullName,
          email: formData.email,
          role: "student",
        });

        alert("Account created successfully! You can now log in.");
        setIsRegistering(false);
      } catch (error) {
        console.error("Error creating account:", error);
        alert(`Error: ${error.message}`);
      }
    } else {
      // --- Login Logic ---
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (role === "admin" && userData.role !== "admin") {
            alert("Access denied. This is not an admin account.");
            auth.signOut();
            return;
          }
          if (role === "student" && userData.role === "admin") {
            alert("Admin accounts must log in through the Admin Login page.");
            auth.signOut();
            return;
          }

          if (userData.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/dashboard");
          }
          alert("Login successful!");
        } else {
          alert("User data not found. Please contact support.");
          auth.signOut();
        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert(`Error: ${error.message}`);
      }
    }
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
        <h1 className="text-center mb-4">
          {isRegistering ? "Create Account" : pageTitle}
        </h1>

        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <div className="mb-3 position-relative input-with-icon">
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <FaUser className="input-icon text-white-50" />
              </div>
              <div className="mb-3 position-relative input-with-icon">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FaEnvelope className="input-icon text-white-50" />
              </div>
              <div className="mb-3 position-relative input-with-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="input-icon cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-white-50" />
                  ) : (
                    <FaEye className="text-white-50" />
                  )}
                </span>
              </div>
              <div className="mb-4 position-relative input-with-icon">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span
                  className="input-icon cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-white-50" />
                  ) : (
                    <FaEye className="text-white-50" />
                  )}
                </span>
              </div>
            </>
          )}

          {!isRegistering && (
            <>
              <div className="mb-3 position-relative input-with-icon">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FaEnvelope className="input-icon text-white-50" />
              </div>
              <div className="mb-3 position-relative input-with-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className="input-icon cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-white-50" />
                  ) : (
                    <FaEye className="text-white-50" />
                  )}
                </span>
              </div>
            </>
          )}

          {/* This link will now show on BOTH student and admin login forms */}
          {!isRegistering && (
            <div className="d-flex justify-content-end mb-3">
              <Link
                to="/forgot-password"
                className="btn btn-link text-white text-decoration-none p-0"
              >
                Forgot password?
              </Link>
            </div>
          )}

          <button type="submit" className="btn btn-light w-100 py-2 fw-bold">
            {isRegistering ? "Register" : "Login"}
          </button>

          {/* This toggle will now ONLY show for students */}
          {role === "student" && (
            <div className="text-center mt-3">
              <p className="mb-0">
                {isRegistering
                  ? "Already have an account?"
                  : "Don't have an account?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="btn btn-link text-white text-decoration-underline p-0 border-0 bg-transparent"
                >
                  {isRegistering ? "Login" : "Register"}
                </button>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
