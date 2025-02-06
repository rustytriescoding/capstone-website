import React from "react";
import Navigation from "../components/nav";

import Landing from "../components/landing";
// import Footer from "../components/footer";

import "../styles/App.css";
import "../styles/mainPage.css";

function MainPage() {
  return (
    <div className="App">
      <Navigation />
      <div className="main-page">
        <Landing />
        {/* can add when proper communication routes are created */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default MainPage;
