import React from "react";
import Navigation from "../components/nav";

import "../styles/App.css";
import "../styles/mainPage.css";
import Landing from "../components/landing";

function MainPage() {
  return (
    <div className="App">
      <Navigation />
      <div className="main-page">
        <Landing />
      </div>
    </div>
  );
}

export default MainPage;
