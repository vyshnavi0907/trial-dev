import React, { useState } from "react";
import MainPage from "./components/MainPage";
import Profile from "./components/Profile";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {showProfile ? (
        <Profile onBack={() => setShowProfile(false)} />
      ) : (
        <MainPage onProfileClick={() => setShowProfile(true)} />
      )}
    </>
  );
}

export default App;
