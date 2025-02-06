import mainPageEye2 from "../assets/mainPageEye2.png";
import "../styles/mainPage.css";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="main-page-intro">
      <img src={mainPageEye2} alt="eye" />
      <p className="main-page-title">
        Retin<text className="navbar-title-alt">AI</text>
      </p>
    </div>
  );
}

export default Landing;
