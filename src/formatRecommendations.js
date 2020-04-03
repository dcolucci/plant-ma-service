module.exports = (data, query) => {
  const [keys, ...hits] = data;
  const formatted = hits.map(hit => {
    return keys.reduce((acc, key, index) => {
      acc[key] = hit[index];
      return acc;
    }, {});
  });
  return {
    query,
    data: formatted
  };
}