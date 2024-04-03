const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001; // You can change the port if needed

app.use(cors());

app.get('/api/games', async (req, res) => {
  try {
    const response = await axios.get('/https://www.freetogame.com/api/games');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching game list:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
