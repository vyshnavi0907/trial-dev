import React, { useState } from "react";
import MainPage from "./components/MainPage";
import Profile from "./components/Profile";
import SideNav from "./components/SideNav";
import ChatBotButton from "./components/ChatBotButton";
// import Login from "./components/Login"; // ✅ New login component

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ Controls login
  const [showProfile, setShowProfile] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prev) => !prev);
  };

  // // ✅ Show login screen first
  // if (!isLoggedIn) {
  //   return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  // }

  return (
    <>
      {showProfile ? (
        <Profile onBack={() => setShowProfile(false)} />
      ) : (
        <div style={{ display: "flex" }}>
          {/* 🔥 Passing onProfileClick to SideNav */}
          <SideNav
            isOpen={sideNavOpen}
            toggleSidebar={toggleSideNav}
            onProfileClick={() => setShowProfile(true)}
          />
          <div
            style={{
              marginLeft: sideNavOpen ? "220px" : "0",
              padding: "1rem",
              flex: 1,
              position: "relative",
            }}
          >
            <MainPage
              onProfileClick={() => setShowProfile(true)}
              toggleSideNav={toggleSideNav}
            />
            <ChatBotButton />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
