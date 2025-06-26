import React from "react";
import "./Profile.css";

export default function Profile() {
  const user = {
    name: "K Vyshnavi",
    roll: "121423408008",
    email: "121423408008@josephscollege.ac.in",
    dept: "BBA-IT",
    semester: "5th",
    attendance: "99%",
    gpa: "9.11",
  };

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Student Profile</h1>

      <div className="profile-layout">
        <div className="profile-card">
          <div className="profile-pic-wrapper">
            <img
              src="https://via.placeholder.com/120"
              alt="Profile"
              className="profile-pic"
            />
          </div>

          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>Roll No: {user.roll}</p>
            <p>Email: {user.email}</p>
            <p>Department: {user.dept}</p>
            <p>Semester: {user.semester}</p>
          </div>
        </div>

        <div className="attendance-card stat-box">
          <h3>Attendance</h3>
          <p>{user.attendance}</p>
        </div>

        <div className="gpa-card stat-box">
          <h3>GPA</h3>
          <p>{user.gpa}</p>
        </div>
      </div>

      <div className="profile-actions">
        <button>Edit Profile</button>
      </div>
    </div>
  );
}
