import React, { useState, useEffect } from "react";
import "./SideNav.css";

const semesterDocs = {
  "Semester 1": [
    { url: "https://picsum.photos/seed/sem1doc1/100/120", label: "Sem1 - Doc1" },
    { url: "https://picsum.photos/seed/sem1doc2/100/120", label: "Sem1 - Doc2" },
    { url: "https://picsum.photos/seed/sem1doc3/100/120", label: "Sem1 - Doc3" },
    { url: "https://picsum.photos/seed/sem1doc4/100/120", label: "Sem1 - Doc4" },
  ],
  "Semester 2": [
    { url: "https://picsum.photos/seed/sem2doc1/100/120", label: "Sem2 - Doc1" },
    { url: "https://picsum.photos/seed/sem2doc2/100/120", label: "Sem2 - Doc2" },
    { url: "https://picsum.photos/seed/sem2doc3/100/120", label: "Sem2 - Doc3" },
    { url: "https://picsum.photos/seed/sem2doc4/100/120", label: "Sem2 - Doc4" },
  ],
  "Semester 3": [
    { url: "https://picsum.photos/seed/sem3doc1/100/120", label: "Sem3 - Doc1" },
    { url: "https://picsum.photos/seed/sem3doc2/100/120", label: "Sem3 - Doc2" },
    { url: "https://picsum.photos/seed/sem3doc3/100/120", label: "Sem3 - Doc3" },
    { url: "https://picsum.photos/seed/sem3doc4/100/120", label: "Sem3 - Doc4" },
  ],
  "Semester 4": [
    { url: "https://picsum.photos/seed/sem4doc1/100/120", label: "Sem4 - Doc1" },
    { url: "https://picsum.photos/seed/sem4doc2/100/120", label: "Sem4 - Doc2" },
    { url: "https://picsum.photos/seed/sem4doc3/100/120", label: "Sem4 - Doc3" },
    { url: "https://picsum.photos/seed/sem4doc4/100/120", label: "Sem4 - Doc4" },
  ],
};

const SideNav = () => {
  const [hoveredSemester, setHoveredSemester] = useState(null);
  const [fullscreenSem, setFullscreenSem] = useState(null);

  useEffect(() => {
    document.querySelector(".top-nav")?.classList.add("slide-down");
  }, []);

  return (
    <>
      <nav className="top-nav">
        <div className="nav-logo">MyApp</div>
        <ul className="nav-links">
          <li><a href="/profile">Profile</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
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
          <li><a href="/attendance">Attendance</a></li>
        </ul>
      </nav>

      {/* Preview on hover */}
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

      {/* Fullscreen on click */}
      {fullscreenSem && (
        <div className="material-fullscreen" onClick={() => setFullscreenSem(null)}>
          <h3>{fullscreenSem}</h3>
          <div className="thumb-grid">
            {semesterDocs[fullscreenSem].map((doc, i) => (
              <div key={i} className="thumb-item">
                <img src={doc.url.replace("/100/120", "/300/400")} alt={doc.label} />
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
