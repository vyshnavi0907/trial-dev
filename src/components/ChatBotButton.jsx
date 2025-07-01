import React, { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import "./ChatBotButton.css";

const ChatBotButton = () => {
  const [isOpen, setIsOpen] = useState(false); // for input box slide
  const [showMessage, setShowMessage] = useState(false); // "How can I help you?"
  const [showChatWindow, setShowChatWindow] = useState(false); // full screen chat

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    if (showChatWindow) setShowChatWindow(false);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Popup Message */}
      {showMessage && !isOpen && (
        <div className="chatbot-message">How can I help you?</div>
      )}

      {/* Chatbot Button */}
      <div className={`chatbot-button-container ${isOpen ? "open" : ""}`}>
        <div className="chatbot-button" onClick={handleToggle}>
          🤖
        </div>

        {/* Slide-out Input */}
        {isOpen && !showChatWindow && (
          <div className="chatbot-input-slide">
            <button className="mic-button">
              <FaMicrophone />
            </button>
            <input
              className="chatbot-text-input"
              type="text"
              placeholder="Ask me anything..."
            />
            <button
              className="send-button"
              onClick={() => setShowChatWindow(true)}
            >
              ➤
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Chat Window */}
      {isOpen && showChatWindow && (
        <div className="chat-window">
          <div className="chat-header">
            <button className="back-button" onClick={handleToggle}>
              ←
            </button>
            <span>AI Assistant</span>
          </div>
          <div className="chat-body">
            <p>Hello! How can I assist you today?</p>
            {/* You can add more logic here */}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotButton;
