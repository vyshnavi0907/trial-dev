import React from "react";
import "./MainPage.css";

const MainPage = ({ onProfileClick }) => {
  return (
    <div className="main-page">
      {/* Top Navigation */}
      <div className="navbar">
        <div className="left-sidebar">
          <div className="hamburger">☰</div>
          <div className="sidebar-icons">
            <div className="circle-icon"></div>
            <div className="circle-icon"></div>
            <div className="circle-icon"></div>
          </div>
        </div>

        <div className="profile-icon" onClick={onProfileClick}>
          <img src="https://i.pravatar.cc/40" alt="user" />
        </div>
      </div>

      {/* Main Content */}
      <div className="content-boxes">
        <div className="box dark-box-left">
          <h3>Attendence</h3>
          <p>Content for Attendence</p>
        </div>

        <div className="box dark-box-right">
          <h3>Notes</h3>
          <p>Content for Attendence</p>
        </div>
      </div>

      {/* Chat Input Area */}
      <div className="chat-input-area">
        <input
          className="chat-input"
          type="text"
          placeholder="How can I help you?"
        />
        <button className="send-button">➤</button>
      </div>
    </div>
  );
};

export default MainPage;
