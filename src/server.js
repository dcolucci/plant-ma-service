const express = require('express');

const getRecommendations = require('./getRecommendations.js');
const formatRecommendations = require('./formatRecommendations.js');

const app = express();
let _data;

app.get('/recommendations', (req, res) => {
  const recommendations = getRecommendations(req.query, _data);
  const formatted = formatRecommendations(recommendations, req.query);
  res.json(formatted);
});

module.exports = async (loadData) => {
  _data = await loadData();
  app.listen(8000, () => {
    console.log('server started on port 8000!');
  });
};