/*const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Predefined responses for inbuilt questions
const predefinedResponses = {
  "What programs does MG MITS offer?": "MG MITS offers B.Tech, M.Tech, and other professional courses.",
  "Where is MG MITS located?": "MG MITS is located in Kerala, India.",
  "How can I contact MG MITS?": "You can contact MG MITS via their official website or call the provided contact number.",
  "What is the vision of MG MITS?": "The vision of MG MITS is to create a center of excellence in education and research.",
  "What facilities are available at MG MITS?": "MG MITS provides excellent infrastructure, a well-equipped library, hostels, and modern labs.",
  "How can I reach the admission office?": "You can visit the campus or contact the admission office through the official contact details on their website."
};

// Handle POST requests at the root route
app.post("/", (req, res) => {
  const { message } = req.body;

  // Respond with predefined answers if the question matches
  const responseMessage = predefinedResponses[message] || `You said: ${message}`;
  
  // Log the user input and server response
  console.log(`User: ${message} | Bot: ${responseMessage}`);

  res.json({ response: responseMessage });
});

// Handle all other routes with a 404 error
app.all('*', (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); */



const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Predefined responses for inbuilt questions
const predefinedResponses = {
  "What programs does MITS offer?": "MITS offers B.Tech, M.Tech, and other professional courses.",
  "Where is MITS located?": "MITS is located in Kerala, India.",
  "How can I contact MITS?": "You can contact MITS via their official website or call the provided contact number.",
  "What is the vision of MITS?": "The vision of MITS is to create a center of excellence in education and research.",
  "What facilities are available at MITS?": "MITS provides excellent infrastructure, a well-equipped library, hostels, and modern labs.",
  "How can I reach the admission office?": "You can visit the campus or contact the admission office through the official contact details on their website."
};


// Handle POST requests at the root route
app.post("/", (req, res) => {
  const { message } = req.body;

  // Respond with predefined answers if the question matches
  const responseMessage = predefinedResponses[message] || `You said: ${message}`;
  
  // Log the user input and server response
  console.log(`User: ${message} | Bot: ${responseMessage}`);

  res.json({ response: responseMessage });
});

// Handle all other routes with a 404 error
app.all('*', (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
