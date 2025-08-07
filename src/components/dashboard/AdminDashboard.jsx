// src/components/dashboard/AdminDashboard.js
import React, { useState } from "react";
import { storage, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  // --- States for file upload ---
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  // --- State for the email invite form ---
  const [studentEmail, setStudentEmail] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    setUploading(true);
    const storageRef = ref(storage, `course-materials/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => {
        console.error(error);
        alert("Upload failed!");
        setUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          alert("File uploaded successfully!");
          setUploading(false);
          setFile(null);
          setProgress(0);
        });
      }
    );
  };

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!studentEmail) {
      alert("Please enter an email address.");
      return;
    }
    setIsAdding(true);
    try {
      const allowedEmailRef = doc(db, "allowedEmails", studentEmail);
      await setDoc(allowedEmailRef, {
        email: studentEmail,
        dateAdded: new Date(),
      });
      alert(`Successfully added ${studentEmail} to the allowed list!`);
      setStudentEmail("");
    } catch (error) {
      console.error("Error adding email:", error);
      alert("Failed to add email. Please try again.");
    }
    setIsAdding(false);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h1 className="text-center">Admin Dashboard</h1>
        <p className="text-center text-muted">
          Manage materials and student access.
        </p>
        <hr />

        <div className="card bg-light p-3 mb-4">
          <h5>Invite New Student</h5>
          <p className="small text-muted">
            Add a student's email to the list of users who are allowed to
            register.
          </p>
          <form onSubmit={handleAddStudent}>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="student.email@example.com"
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                required
              />
              <button
                className="btn btn-success"
                type="submit"
                disabled={isAdding}
              >
                {isAdding ? "Adding..." : "Add Email"}
              </button>
            </div>
          </form>
        </div>

        <div className="mb-3">
          <h5>Upload Course Materials</h5>
          <input
            className="form-control"
            type="file"
            onChange={handleFileChange}
          />
        </div>
        {uploading && (
          <div className="progress mb-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progress}%
            </div>
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload File"}
        </button>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
