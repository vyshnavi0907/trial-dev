import React from "react";
import "./MainPage.css";

const MainPage = ({ onProfileClick }) => {
  return (
    <div className="main-page">
      {/* Top Navigation */}
      {/* <div className="navbar">
        <div className="profile-icon" onClick={onProfileClick}>
          <img src="https://i.pravatar.cc/40" alt="user" />
        </div>
      </div> */}

      {/* Main Content */}
      <div className="content-boxes">
        <div className="box dark-box-left">
          <h3>Attendance</h3>
          <p>Content for Attendance</p>
        </div>

        <div className="box dark-box-right">
          <h3>Notes</h3>
          <p>Content for Notes</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
