// Import the mysql2 library with Promise support
const mysql = require('mysql2/promise');

// Load environment variables from .env file
require('dotenv').config();

// Create a connection pool using environment variables for credentials and settings
const pool = mysql.createPool({
  host: process.env.DB_HOST,         // Database host (e.g., localhost)
  user: process.env.DB_USER,         // Database username
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME,     // Name of the database to connect to
  waitForConnections: true,          // Wait if no connections are available
  connectionLimit: 10,               // Maximum number of connections in the pool
  queueLimit: 0                      // No limit on queued connection requests
});

// Export the pool to be used in other parts of the application
module.exports = pool;
