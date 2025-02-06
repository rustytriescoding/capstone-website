import React from "react";
import Navigation from "../components/nav";
import TeamInfo from "../components/teamInfo";

import groupPhoto from "../assets/groupPhoto.jpg";

import "../styles/teamPage.css";

function TeamPage() {
  return (
    <div className="App">
      <Navigation />
      <div className="Team-Page">
        <div className="Team-title">
          Meet Team <text className="navbar-title-alt">38</text>
        </div>
        <img className="Team-Photo" src={groupPhoto} alt={`team`} />
        {/*
        <div className="Team-Discription">Team discription</div>
        */}
        <div>
          <TeamInfo />
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
