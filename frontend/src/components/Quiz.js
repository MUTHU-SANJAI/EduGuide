// src/components/Quiz.js
import React from 'react';
import QuizBox from './QuizBox';
import './Quiz.css';

function Quiz() {
  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Explore Your Career Options</h2>
      <div className="quiz-boxes">
        <QuizBox
          title="Discover Your Skills in"
          subtitle="Computer Science"
          link="https://quizizz.com/embed/quiz/66da8488c9b92674233299a3"
        />
        <QuizBox
          title="Discover Your Skills in"
          subtitle="Biology"
          link="https://quizizz.com/embed/quiz/66da87a4edd23158b954a4a5"
        />
        <QuizBox
          title="Discover Your Skills in"
          subtitle="Commerce"
          link="https://quizizz.com/embed/quiz/66da896ed81c0b44eff1bc91"
        />
      </div>
    </div>
  );
}

export default Quiz;
