const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Path to your "database"
const DB_PATH = path.join(__dirname, "data", "messages.json");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Helper functions
function readMessages() {
  if (!fs.existsSync(DB_PATH)) {
    return [];
  }
  const data = fs.readFileSync(DB_PATH, "utf8");
  return data ? JSON.parse(data) : [];
}

function writeMessages(messages) {
  fs.writeFileSync(DB_PATH, JSON.stringify(messages, null, 2));
}

// ======================
// CREATE (POST)
// ======================
app.post("/api/messages", (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const messages = readMessages();

  const newMessage = {
    id: Date.now(),
    name,
    email,
    message,
    status: "new"
  };

  messages.push(newMessage);
  writeMessages(messages);

  res.status(201).json(newMessage);
});

// ======================
// READ ALL (GET)
// ======================
app.get("/api/messages", (req, res) => {
  const messages = readMessages();
  res.json(messages);
});

// ======================
// READ ONE (GET by ID)
// ======================
app.get("/api/messages/:id", (req, res) => {
  const messages = readMessages();
  const message = messages.find(m => m.id === Number(req.params.id));

  if (!message) {
    return res.status(404).json({ error: "Message not found" });
  }

  res.json(message);
});

// ======================
// UPDATE (PUT)
// ======================
app.put("/api/messages/:id", (req, res) => {
  const messages = readMessages();
  const index = messages.findIndex(m => m.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Message not found" });
  }

  messages[index] = {
    ...messages[index],
    ...req.body
  };

  writeMessages(messages);
  res.json(messages[index]);
});

// ======================
// DELETE
// ======================
app.delete("/api/messages/:id", (req, res) => {
  const messages = readMessages();
  const filtered = messages.filter(m => m.id !== Number(req.params.id));

  if (filtered.length === messages.length) {
    return res.status(404).json({ error: "Message not found" });
  }

  writeMessages(filtered);

  res.json({ message: "Deleted successfully" });
});

// Start server ONLY if not in test
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

// Export for testing
module.exports = app;
