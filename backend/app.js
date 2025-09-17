const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 5000;

const dbClient = new Client({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'testdb',
  port: process.env.DB_PORT || 5432,
});

function connectWithRetry() {
  return dbClient.connect()
    .then(() => console.log('Connected to Postgres'))
    .catch((err) => {
      console.error('Failed to connect to Postgres, retrying in 5 seconds...', err);
      return new Promise((resolve) => {
        setTimeout(() => resolve(connectWithRetry()), 5000);
      });
    });
}

// Start connection attempts
connectWithRetry();

app.get('/api', async (req, res) => {
  try {
    const result = await dbClient.query('SELECT NOW() AT TIME ZONE \'Asia/Kolkata\' AS local_time');
    res.send(`Hello from Express + Postgres! Server time: ${result.rows[0].local_time}`);
  } catch (err) {
    console.error('DB query error:', err);
    res.status(500).send('Database error');
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
