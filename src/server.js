const express = require('express');

const getRecommendations = require('./getRecommendations.js');

const app = express();
let _data;

app.get('/recommendations', (req, res) => {
  const recommendations = getRecommendations(req.query, _data);
  res.json(recommendations);
});

app.get('/ping', (req, res) => {
  res.json({ ok: true });
})

module.exports = async (loadData) => {
  _data = await loadData();
  console.log(`loaded ${_data.length} entries!`);
  app.listen(8000, () => {
    console.log('server started on port 8000!');
  });
};