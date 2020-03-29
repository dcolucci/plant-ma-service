const getRecommendations = require('../src/getRecommendations.js');

describe('getRecommendations', () => {
  test('it always returns the header row', () => {
    const matrix = [
      ['header1', 'header2']
    ];
    const result = getRecommendations({}, matrix);
    expect(result).toEqual([['header1', 'header2']]);
  });
});
