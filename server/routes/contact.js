const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    res.status(200).json({ success: true, id: result.insertId });
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
