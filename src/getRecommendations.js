const getHits = (query, data) => {
  const searchKeys = Object.keys(query);
  if (searchKeys.length === 0) {
    return { query, data };
  }

  const targetKey = searchKeys[0];
  const targetVal = query[targetKey];

  const hits = data.reduce((acc, entry) => {
    if (entry[targetKey] === targetVal) {
      acc.push(entry);
    }
    return acc;
  }, []);

  const newQuery = { ...query };
  delete newQuery[targetKey];
  return getHits(newQuery, hits);
}
  
module.exports = (query, data) => {
  const hits = getHits(query, data);
  return {
    query, 
    data: hits.data
  };
};