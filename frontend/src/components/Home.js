// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h2 className="home-welcome">Hi, User!</h2>
        <p className="motivational-message">
          “Your future is created by what you do today, not tomorrow.”
        </p>
      </div>
      <div className="video-section">
        <h2 className="section-title">What's Trending Today?</h2>
        <div className="video-recommendations">
          <div className="video-card">
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/xLetJpcjHS0"
              title="Counselling Video 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4 className="video-title">DSA : Why is it vital?</h4>
          </div>
          <div className="video-card">
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/MWJ-r1JNEBU"
              title="Counselling Video 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h4 className="video-title">Million Dollar Jobs from Mathematics</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
