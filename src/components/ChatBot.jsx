import React, { useState, useEffect } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1000); // after animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Chatbot Button */}
      <div className="chatbot-button" onClick={() => setShowInput(true)}>
        💬
        {showMessage && (
          <span className="chatbot-message">How can I help you?</span>
        )}
      </div>

      {/* Slide-in Input Box */}
      {showInput && (
        <div className="chatbot-input-box">
          <button className="mic-button">
            <button className="mic-button">
              <FaMicrophone />
            </button>
          </button>
          <input type="text" placeholder="Ask me anything..." />
          <button className="send-button">➤</button>
        </div>
      )}
    </>
  );
};

export default ChatBot;
