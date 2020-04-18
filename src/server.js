const express = require('express');

const getRecommendations = require('./getRecommendations.js');
const authenticateGoogle = require('./authenticateGoogle.js');

const PORT = process.env.PORT || 8000;
const app = express();
let _data;

app.get('/recommendations', (req, res) => {
  console.log('*request received:', req.path);
  const recommendations = getRecommendations(req.query, _data);
  res.json(recommendations);
});

app.get('/ping', (req, res) => {
  console.log('*request received:', req.path);
  res.json({ ok: true });
})

module.exports = async (loadData) => {
  const creds = authenticateGoogle();
  _data = await loadData(creds);
  console.log(`loaded ${_data.length} entries, yo!`);
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}!`);
  });
};