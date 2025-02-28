import React from "react";
import "../styles/Home.css";
import illustration from "../assets/reads.jpg"; 

const Home = () => {
  return (
    <div className="home-container">
      <img src={illustration} alt="E-Learning Illustration" className="illustration" />
      <h1>Your own personal e-learning app</h1>
      <p>Learn new skills as you see yourself grow.</p>
      <a href="/login" className="get-started-btn">Getting Started →</a>
    </div>
  );
};

export default Home;
