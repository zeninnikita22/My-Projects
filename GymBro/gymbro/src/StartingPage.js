import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/gymbro-logo.png";
import Sportsman from "./images/sportsman.png";
import "./styles/StartingPage.css";

function StartingPage() {
  const linkStyle = {
    clipPath: "polygon(0% 0%, 100% 0, 100% 69%, 81% 100%, 0% 100%)",
    backgroundColor: "#71c70f",
    color: "#050706",
    padding: "1em 1em",
    textDecoration: "none",
    textTransform: "uppercase",
    width: "10%",
    fontFamily: "Heebo",
    fontWeight: "600",
    marginLeft: "5%",
    marginTop: "3%",
  };

  return (
    <div className="wrapper">
      <div className="left-container">
        <div className="starting-page__logo">
          <img alt="gymbro-logo" src={Logo}></img>
        </div>
        <div className="left-container__text">
          YOUR PERFECT BODY BUILDING ASSISTANT
        </div>
        <Link
          to="/login"
          className="left-container__login-link"
          style={linkStyle}
        >
          GET STARTED →
        </Link>
      </div>
      <div className="right-container"></div>
      <div className="sportsman">
        <img alt="sportsman" src={Sportsman}></img>
      </div>
    </div>
  );
}

export default StartingPage;
