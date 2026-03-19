module.exports = async function handler(req, res) {
  const ALLOWED_ORIGINS = new Set([
    'https://iflytek.github.io',
    'http://localhost:5173',
    'http://127.0.0.1:5173'
  ]);
  
  const requestOrigin = req.headers.origin;

  // Allow localhost, the main site, and any vercel preview deployments
  if (requestOrigin && (ALLOWED_ORIGINS.has(requestOrigin) || requestOrigin.endsWith('.vercel.app'))) {
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
    res.setHeader('Vary', 'Origin');
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const response = await fetch('https://maas-coding-api.cn-huabei-1.xf-yun.com/v2/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.VITE_API_KEY}`
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).send(`API Error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Proxy Error:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
