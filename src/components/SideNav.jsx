import React, { useState, useEffect } from "react";
import "./SideNav.css";

const semesterDocs = {
  "Semester 1": [
    {
      url: "https://picsum.photos/seed/sem1doc1/100/120",
      label: "Sem1 - Doc1",
    },
    {
      url: "https://picsum.photos/seed/sem1doc2/100/120",
      label: "Sem1 - Doc2",
    },
    {
      url: "https://picsum.photos/seed/sem1doc3/100/120",
      label: "Sem1 - Doc3",
    },
    {
      url: "https://picsum.photos/seed/sem1doc4/100/120",
      label: "Sem1 - Doc4",
    },
  ],
  "Semester 2": [
    {
      url: "https://picsum.photos/seed/sem2doc1/100/120",
      label: "Sem2 - Doc1",
    },
    {
      url: "https://picsum.photos/seed/sem2doc2/100/120",
      label: "Sem2 - Doc2",
    },
    {
      url: "https://picsum.photos/seed/sem2doc3/100/120",
      label: "Sem2 - Doc3",
    },
    {
      url: "https://picsum.photos/seed/sem2doc4/100/120",
      label: "Sem2 - Doc4",
    },
  ],
  "Semester 3": [
    {
      url: "https://picsum.photos/seed/sem3doc1/100/120",
      label: "Sem3 - Doc1",
    },
    {
      url: "https://picsum.photos/seed/sem3doc2/100/120",
      label: "Sem3 - Doc2",
    },
    {
      url: "https://picsum.photos/seed/sem3doc3/100/120",
      label: "Sem3 - Doc3",
    },
    {
      url: "https://picsum.photos/seed/sem3doc4/100/120",
      label: "Sem3 - Doc4",
    },
  ],
  "Semester 4": [
    {
      url: "https://picsum.photos/seed/sem4doc1/100/120",
      label: "Sem4 - Doc1",
    },
    {
      url: "https://picsum.photos/seed/sem4doc2/100/120",
      label: "Sem4 - Doc2",
    },
    {
      url: "https://picsum.photos/seed/sem4doc3/100/120",
      label: "Sem4 - Doc3",
    },
    {
      url: "https://picsum.photos/seed/sem4doc4/100/120",
      label: "Sem4 - Doc4",
    },
  ],
};

const SideNav = ({ onProfileClick }) => {
  const [hoveredSemester, setHoveredSemester] = useState(null);
  const [fullscreenSem, setFullscreenSem] = useState(null);

  useEffect(() => {
    document.querySelector(".top-nav")?.classList.add("slide-down");
  }, []);

  return (
    <>
      <nav className="top-nav">
        <div className="nav-logo">MyApp</div>

        <div className="nav-inner">
          <ul className="nav-links">
            <li>
              <a href="/home">Home</a>
            </li>
            <li className="material-dropdown">
              <span>Material</span>
              <ul className="dropdown">
                {Object.keys(semesterDocs).map((sem) => (
                  <li
                    key={sem}
                    onMouseEnter={() => setHoveredSemester(sem)}
                    onMouseLeave={() => setHoveredSemester(null)}
                    onClick={() => setFullscreenSem(sem)}
                  >
                    {sem}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="/attendance">Attendance</a>
            </li>
            <li>
              <a href="/chats">Live Chats</a>
            </li>
            <li>
              <a href="/chats">Chat gpt</a>
            </li>
          </ul>
          {/* 🔔 Notification icon beside profile */}
            <div className="notification-container">
              <div className="notification-icon">
                <span className="dot" />
                <img
                  src="https://img.icons8.com/ios-filled/24/ffffff/appointment-reminders.png"
                  alt="Notifications"
                />
              </div>

              {/* <ul className="notification-dropdown">
                <li onClick={() => alert("Opening message...")}>
                  📩 You have 2 new messages
                </li>
                <li onClick={() => alert("Viewing assignment...")}>
                  📚 Assignment due tomorrow
                </li>
                <li onClick={() => alert("Checking attendance...")}>
                  📈 Attendance report ready
                </li>
              </ul> */}
            </div>

          {/* ✅ Profile icon OUTSIDE the ul and pinned to far right */}
          <div className="profile-icon-nav" onClick={onProfileClick}>
            <img src="https://i.pravatar.cc/32" alt="Profile" />
          </div>
        </div>
      </nav>

      {hoveredSemester && !fullscreenSem && (
        <div className="sem-preview">
          <h4>{hoveredSemester} Materials</h4>
          <div className="thumb-grid">
            {semesterDocs[hoveredSemester].map((doc, i) => (
              <div key={i} className="thumb-item">
                <img src={doc.url} alt={doc.label} />
                <small>{doc.label}</small>
              </div>
            ))}
          </div>
        </div>
      )}

      {fullscreenSem && (
        <div
          className="material-fullscreen"
          onClick={() => setFullscreenSem(null)}
        >
          <h3>{fullscreenSem}</h3>
          <div className="thumb-grid">
            {semesterDocs[fullscreenSem].map((doc, i) => (
              <div key={i} className="thumb-item">
                <img
                  src={doc.url.replace("/100/120", "/300/400")}
                  alt={doc.label}
                />
                <small>{doc.label}</small>
              </div>
            ))}
          </div>
          <small>Click anywhere to close</small>
        </div>
      )}
    </>
  );
};

export default SideNav;
