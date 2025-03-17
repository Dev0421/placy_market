const Market = require('../models/marketModel');

// Create a new market
exports.createMarket = async (req, res) => {
  const { owner, renter, location, price, size, type, content, highlights, status, rating, featured, images } = req.body;
  
  try {
    const newMarket = await Market.create({
      owner, renter, location, price, size, type, content, highlights, status, rating, featured, images
    });
    res.status(201).json({ message: 'Market created successfully', market: newMarket });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating market' });
  }
};

// Get market by ID
exports.getMarketById = async (req, res) => {
  const marketId = req.params.id;

  try {
    const market = await Market.findById(marketId);
    if (!market) {
      return res.status(404).json({ message: 'Market not found' });
    }
    res.json(market);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching market' });
  }
};

// Get all markets
exports.getAllMarkets = async (req, res) => {
  try {
    const markets = await Market.findAll();
    res.json(markets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching markets' });
  }
};

// Update a market
exports.updateMarket = async (req, res) => {
  const marketId = req.params.id;
  const { location, price, size, type, content, highlights, status, rating, featured, images } = req.body;

  try {
    const updatedMarket = await Market.update(marketId, {
      location, price, size, type, content, highlights, status, rating, featured, images
    });
    res.json({ message: 'Market updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating market' });
  }
};

// Delete a market
exports.deleteMarket = async (req, res) => {
  const marketId = req.params.id;

  try {
    await Market.delete(marketId);
    res.json({ message: 'Market deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting market' });
  }
};
