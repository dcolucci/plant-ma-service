const getRecommendations = (query, matrix) => {
  const keys = Object.keys(query);
  if (keys.length === 0) {
    return matrix;
  }

  const key = keys[0];
  const value = query[key];
  const [columnHeaders, ...data] = matrix;
  const index = columnHeaders.indexOf(key);
  const matches = data.reduce((acc, row) => {
    if (row[index] === value) {
      acc.push(row);
    } 
    return acc;
  }, [columnHeaders]);
  const nextQuery = {...query};
  delete nextQuery[key];
  return getRecommendations(nextQuery, matches);
};

module.exports = getRecommendations;