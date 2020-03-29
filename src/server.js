const express = require('express');

const getRecommendations = require('./getRecommendations.js');

const app = express();
let _data;

app.get('/recommendations', (req, res) => {
  const recommendations = getRecommendations(req.query, _data);
  res.json(recommendations);
});

module.exports = async (dataFetcher) => {
  _data = await dataFetcher();
  app.listen(8000, () => {
    console.log('server started on port 8000!');
  });
};