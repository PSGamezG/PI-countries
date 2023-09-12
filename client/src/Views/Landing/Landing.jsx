import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to your personal Compass!</h1>
      <Link to="/home" className="button">Bon Voyage</Link>
    </div>
  );
};

export default Landing;
