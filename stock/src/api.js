const BASE_URL = '/evaluation-service'; 

const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2Nzk5NTQ4LCJpYXQiOjE3NDY3OTkyNDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJiNWU5OTEwLTRiNjUtNGRjNy05ZTNmLTE0MWM0OWJiNmQ1ZiIsInN1YiI6ImFtYW4uMjIyNml0MTE4NUBraWV0LmVkdSJ9LCJlbWFpbCI6ImFtYW4uMjIyNml0MTE4NUBraWV0LmVkdSIsIm5hbWUiOiJhbWFuIG5pZ2FtIiwicm9sbE5vIjoiMjIwMDI5MDEzMDAzMCIsImFjY2Vzc0NvZGUiOiJTeFZlamEiLCJjbGllbnRJRCI6IjJiNWU5OTEwLTRiNjUtNGRjNy05ZTNmLTE0MWM0OWJiNmQ1ZiIsImNsaWVudFNlY3JldCI6IkRxaHZRYVd2UUJ6anN4TW4ifQ.oeFaTRPPWgrrk8rvb6htHXg0aT1wYkOPBxW8SzTupbM'; 

export const fetchStockPrices = async (stockSymbol, minutes = 30) => {
  try {

    const response = await fetch(`${BASE_URL}/stocks/${stockSymbol}?minutes=${minutes}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,  
        'Content-Type': 'application/json'
      }
    });

   
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      throw new Error(`Fetch failed: ${response.status} - ${errorText}`);
    }

   
    const json = await response.json();

   
    console.log('Fetched data:', json);

   
    return json;
  } catch (err) {
    
    console.error('Network/API error:', err);
    throw err; 
  }
};
