const express = require('express');
const userRoutes = require('./routes/userRoutes');
const marketRoutes = require('./routes/marketRoutes');
const requestRoutes = require('./routes/requestRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

app.get('/', (req, res) => {
  res.send('Hello from Render!');
});
app.use(bodyParser.json()); // For parsing application/json
app.use('/api', userRoutes); // Use user routes
app.use('/api', marketRoutes);
app.use('/api', requestRoutes); // Use request routes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
