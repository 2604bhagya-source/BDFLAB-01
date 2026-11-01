// Import Express and create the application.
const express = require("express");
const app = express();

// Use the hosting platform's port when available; otherwise use port 3000.
const PORT = process.env.PORT || 3000;

// GET / - send a welcome message.
app.get("/", (request, response) => {
  response.status(200).send("Welcome to Node.js and Express Server!");
});

// GET /about - replace these clearly marked placeholders with your details.
app.get("/about", (request, response) => {
  response.status(200).json({
    name: "BHAGYASRI",
    section: "AI&DE",
    "REG NO": "252U1R5108", 
    
  });
});

// GET /time - return the current date and time as JSON.
app.get("/time", (request, response) => {
  const currentDateTime = new Date();
  response.status(200).json({ dateTime: currentDateTime });
});

// Handle every route that was not matched above.
app.use((request, response) => {
  response.status(404).send("404 - Page Not Found");
});

// Start the server and print its local address.
app.listen(PORT, () => {
  console.log(`Express server is running at http://localhost:${PORT}`);
});
