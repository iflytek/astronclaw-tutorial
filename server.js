const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const ALLOWED_ORIGINS = new Set([
  'https://iflytek.github.io',
  'http://localhost:5173',
  'http://127.0.0.1:5173'
]);

function applyCors(req, res) {
  const requestOrigin = req.headers.origin;

  if (requestOrigin && ALLOWED_ORIGINS.has(requestOrigin)) {
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
    res.setHeader('Vary', 'Origin');
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
}

// Middleware
app.use((req, res, next) => {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
});
app.use(express.json());

// Proxy endpoint for chat completions
app.post('/api/chat', async (req, res) => {
  try {
    const response = await fetch('https://maas-coding-api.cn-huabei-1.xf-yun.com/v2/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // The API key is securely used here on the backend
        'Authorization': `Bearer ${process.env.VITE_API_KEY}`
      },
      body: JSON.stringify({ ...req.body, stream: false })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).send(`API Error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Proxy server running on port ${PORT}`);
});
