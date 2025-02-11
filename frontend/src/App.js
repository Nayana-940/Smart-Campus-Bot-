import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import AdminLogin from "./AdminLogin";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // Predefined questions
  const questions = [
    "What programs does MITS offer?",
    "Where is MITS located?",
    "How can I contact MITS?",
    "What is the vision of MITS?",
    "What facilities are available at MITS?",
    "How can I reach the admission office?",
  ];

  const handleQuestionClick = (question) => {
    sendMessage(question);
  };

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
    <Router>
      <div className="chat-container">
        <h2>Campus Assistant</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/admin">Admin Login</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Predefined Question Buttons */}
                <div className="question-buttons">
                  {questions.map((question, index) => (
                    <button key={index} onClick={() => handleQuestionClick(question)}>
                      {question}
                    </button>
                  ))}
                </div>

                {/* Chat Box */}
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
              </>
            }
          />
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
