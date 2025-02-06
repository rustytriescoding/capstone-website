import React from "react";
import LogBook from "../components/logBook";
import Navigation from "../components/nav";
import "../styles/logBook.css";

function LogBookPage() {
  return (
    <div className="App">
      <Navigation />
      <div className="Log-Bounds">
        <LogBook title={"Log Book"} />
      </div>
    </div>
  );
}

export default LogBookPage;
