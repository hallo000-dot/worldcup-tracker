export default async function handler(req, res) {
  // Always allow your domain to read the server response
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Auth-Token, Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const targetUrl = 'https://api.football-data.org/v4/competitions/WC/matches';
    
    const response = await fetch(targetUrl, {
      headers: { 'X-Auth-Token': '82e229ce677b4eed85f13e901243c232' } // Ensure your real key is here exactly
    });

    // We return a status 200 so the browser NEVER triggers a CORS block on error
    if (!response.ok) {
      const errorText = await response.text();
      return res.status(200).json({ 
        isError: true,
        statusCode: response.status,
        serverMessage: errorText 
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
    
  } catch (error) {
    return res.status(200).json({ isError: true, error: error.message });
  }
}