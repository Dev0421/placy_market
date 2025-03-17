const db = require('../utils/db'); // Import db utility for MySQL connection

// Create a new market
exports.create = (marketData) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO markets (owner, renter, location, price, size, type, content, highlights, status, rating, featured, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [
      marketData.owner, marketData.renter, marketData.location, marketData.price, marketData.size, marketData.type, 
      marketData.content, marketData.highlights, marketData.status, marketData.rating, marketData.featured, JSON.stringify(marketData.images)
    ], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// Get a market by ID
exports.findById = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM markets WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result[0]);
    });
  });
};

// Get all markets
exports.findAll = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM markets';
    db.query(query, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// Update a market
exports.update = (id, marketData) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE markets SET location = ?, price = ?, size = ?, type = ?, content = ?, highlights = ?, status = ?, rating = ?, featured = ?, images = ?, updated_at = NOW() WHERE id = ?';
    db.query(query, [
      marketData.location, marketData.price, marketData.size, marketData.type, marketData.content, marketData.highlights, 
      marketData.status, marketData.rating, marketData.featured, JSON.stringify(marketData.images), id
    ], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};

// Delete a market
exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM markets WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};
