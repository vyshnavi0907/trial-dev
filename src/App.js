import React, { useState } from "react";
import MainPage from "./components/MainPage";
import Profile from "./components/Profile";
import SideNav from "./components/SideNav";
import ChatBotButton from "./components/ChatBotButton"; // ✅ Import Chatbot

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false); // controls sidebar

  const toggleSideNav = () => {
    setSideNavOpen(prev => !prev);
  };

  return (
    <>
      {showProfile ? (
        <Profile onBack={() => setShowProfile(false)} />
      ) : (
        <div style={{ display: "flex" }}>
          <SideNav isOpen={sideNavOpen} toggleSidebar={toggleSideNav} />
          <div
            style={{
              marginLeft: sideNavOpen ? "220px" : "0",
              padding: "1rem",
              flex: 1,
              position: "relative"
            }}
          >
            <MainPage
              onProfileClick={() => setShowProfile(true)}
              toggleSideNav={toggleSideNav}
            />
            <ChatBotButton /> {/* ✅ AI Chatbot component */}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
