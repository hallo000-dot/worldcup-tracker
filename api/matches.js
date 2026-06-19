// api/matches.js
export default async function handler(req, res) {
  // 1. Allow your GitHub Pages domain to read this data safely
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const targetUrl = 'https://api.football-data.org/v4/competitions/WC/matches';
    
    // 2. Make the server-to-server call (No CORS blocking here!)
    const response = await fetch(targetUrl, {
      headers: { 'X-Auth-Token': 'YOUR_REAL_API_KEY_HERE' }
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch from football API' });
    }

    const data = await response.json();
    
    // 3. Send the clean data back to your dashboard webpage
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}