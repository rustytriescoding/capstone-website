import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          Retin<text className="navbar-title-alt">AI</text>
        </div>
        <div className="navbar-links">
          <Link to="/capstone-website">Main Page</Link>
          <Link to="/log-book">log-book</Link>
          <Link to="/build-log">build-log</Link>
          <Link to="/team-page">team-page</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
