const express = require('express');
const userRoutes = require('./routes/userRoutes');
const marketRoutes = require('./routes/marketRoutes');
const requestRoutes = require('./routes/requestRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(bodyParser.json()); // For parsing application/json
app.use('/api', userRoutes); // Use user routes
app.use('/api', marketRoutes);
app.use('/api', requestRoutes); // Use request routes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
