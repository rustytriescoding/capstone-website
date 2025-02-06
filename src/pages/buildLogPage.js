import React from "react";
import Navigation from "../components/nav";
import LogBook from "../components/logBook";

import "../styles/logBook.css";

function BuildLogPage() {
  return (
    <div className="App">
      <Navigation />
      <div className="Log-Bounds">
        <LogBook title={"Build Log"} />
      </div>
    </div>
  );
}

export default BuildLogPage;
