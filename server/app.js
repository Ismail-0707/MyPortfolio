// Import necessary modules
const express = require('express'); // Express framework for building server
const cors = require('cors'); // Middleware to handle Cross-Origin Resource Sharing
const dotenv = require('dotenv'); // Loads environment variables from .env file
const contactRoutes = require('./routes/contact'); // Import custom route handler for contact form

// Load environment variables from .env file
dotenv.config();

// Create an instance of an Express application
const app = express();

// Enable CORS for both localhost and 127.0.0.1 on port 5500 (to support frontend access)
app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
}));

// Middleware to parse JSON data in incoming requests
app.use(express.json());

// Register the contact routes under the /api path
app.use('/api', contactRoutes);

// Optional: A simple test route to check if the server is working
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
