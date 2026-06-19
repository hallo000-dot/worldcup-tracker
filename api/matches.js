export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Auth-Token, Content-Type');

  try {
    const targetUrl = 'https://api.football-data.org/v4/competitions/WC/matches';
    
    const response = await fetch(targetUrl, {
      headers: { 'X-Auth-Token': '82e229ce677b4eed85f13e901243c232' } // Ensure your real key is here
    });

    // NEW DEBUGGING CODE: If it fails, read the exact message sent by the football server
    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ 
        error: 'Failed to fetch from football API', 
        statusCode: response.status,
        serverMessage: errorText 
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
