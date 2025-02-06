import React from "react";
import "../styles/footer.css";
import linkedin from "../assets/linkedin.png";

function Footer() {
  return (
    <div className="Footer">
      <div>
        <div style={{ fontWeight: "bold" }}>Connect With Us</div>
        <a href="mailto:contact@retinai.com" style={{ color: "white" }}>
          contact@retinai.com
        </a>
        <a href="https://www.linkedin.com">
          <img src={linkedin} alt="Linkedin Logo" />
          <p>in</p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
