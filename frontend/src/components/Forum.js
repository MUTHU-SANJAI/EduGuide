// src/components/Forum.js
import React from 'react';
import Chatbot from './Chatbot.js';
import './Forum.css';

function Forum() {
  return (
    <div className="forum-container">
      <h2>Forum and Chatbot</h2>
      <div className="forum-content">
        <form className="forum-form">
          <h3>Join the Discussion</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Question" required></textarea>
          <button type="submit">Submit</button>
        </form>
        <Chatbot />
      </div>
    </div>
  );
}

export default Forum;
