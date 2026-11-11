const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// Middleware
app.use(cors());
// Increase the JSON payload limit to handle the Base64 image string[cite: 1]
app.use(express.json({ limit: '10mb' })); 

// Database Connection
const pool = new Pool({
  user: 'postgres', // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'price_tracker', // Replace with your database name
  password: 'Realmadrid4life100%', // Replace with your PostgreSQL password
  port: 5432,
});

// API Route to save a new entry
app.post('/api/entries', async (req, res) => {
  const { supermarketName, imageBase64, products } = req.body;

  try {
    // Start a database transaction
    await pool.query('BEGIN');

    // 1. Insert the visit and Base64 image[cite: 1]
    const visitResult = await pool.query(
      'INSERT INTO visits (supermarket_name, image_base64) VALUES ($1, $2) RETURNING id',
      [supermarketName, imageBase64]
    );
    const visitId = visitResult.rows[0].id;

    // 2. Insert each product linked to the visit_id
    for (const product of products) {
      await pool.query(
        'INSERT INTO products (visit_id, product_name, price) VALUES ($1, $2, $3)',
        [visitId, product.name, product.price]
      );
    }

    // Commit the transaction
    await pool.query('COMMIT');
    res.status(201).json({ message: 'Entry saved successfully' });

  } catch (error) {
    // Rollback if there is an error
    await pool.query('ROLLBACK');
    console.error('Error saving entry:', error);
    res.status(500).json({ error: 'Failed to save entry to database' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});