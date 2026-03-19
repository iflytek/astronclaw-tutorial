const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Allow all origins for now to avoid CORS issues
app.use(cors());
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
      body: JSON.stringify(req.body)
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
