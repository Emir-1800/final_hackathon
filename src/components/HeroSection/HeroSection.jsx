import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";
import { Button } from "../../components/Button/Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>SO MUCH TO DISCOVER</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link to="/products">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Find your tour today
          </Button>
        </Link>
        <Link to="/https://www.youtube.com/watch?v=OiVVKITz7oA">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
