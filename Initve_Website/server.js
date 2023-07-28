// Import required modules
const express = require('express');
const path = require('path');
// Create an Express application
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
// Define a port to listen on
const PORT = 3000;




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
