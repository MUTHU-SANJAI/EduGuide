// src/components/Chatbot.js
import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Here, you can add logic for the bot's response
      setMessages((prevMessages) => [...prevMessages, { text: "I'm here to help you!", sender: 'bot' }]);
    }
  };

  return (
    <div className="chatbot-container">
      <button className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        <FiMessageSquare size={24} />
      </button>
      {isOpen && (
        <div className="chatbot">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
