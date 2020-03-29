const loadData = require('./src/loadData.js');
const getRecommendations = require('./src/getRecommendations.js');

loadData().then(data => {
  console.log('DATA', data);
  const query = { light: 'low', 'star signs': 'pisces' };
  const recs = getRecommendations(query, data);
  console.log('RECS', recs);
});