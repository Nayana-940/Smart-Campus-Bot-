const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Handle POST requests at the root route
app.post("/", (req, res) => {
  const { message } = req.body;

  let responseMessage = "";

  // Handle dynamic messages (e.g., greeting)
  if (message.toLowerCase() === "hello") {
    responseMessage = "Hello! How can I assist you today?";
  } else {
    responseMessage = `You said: ${message}`;
  }

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
