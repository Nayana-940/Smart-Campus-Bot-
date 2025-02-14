import React, { useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = (inputMessage) => {
    const userMessage = inputMessage || message;
    if (userMessage.trim()) {
      setChat((prevChat) => [...prevChat, { sender: "user", text: userMessage }]);

      fetch("http://localhost:5000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })
        .then((response) => response.json())
        .then((data) => {
          setChat((prevChat) => [...prevChat, { sender: "bot", text: data.response }]);
        })
        .catch((error) => console.error("Error:", error));

      setMessage("");
    }
  };

  return (
   
      <div className="chat-container">
        <h2>Campus Assistant</h2>
        <div className="chat-box">
          {chat.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === "user" ? "user" : "bot"}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Typing Input Section */}
        <div className="input-area">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button className="send-button" onClick={() => sendMessage()}>
            <span>&#10148;</span>
          </button>
        </div>
      </div>
   
  );
}

export default App;
