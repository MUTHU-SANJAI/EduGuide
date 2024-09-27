// src/components/QuizBox.js
import React from 'react';
import './QuizBox.css';

function QuizBox({ title, subtitle, link }) {
  return (
    <div className="quiz-box" onClick={() => window.open(link, '_blank')}>
      <h3 className="quiz-title">{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default QuizBox;
