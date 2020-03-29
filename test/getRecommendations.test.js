const getRecommendations = require('../src/getRecommendations.js');

describe('getRecommendations', () => {
  let matrix;

  beforeEach(() => {
    matrix = [
      ['header1', 'header2'],
      ['foo', 'bar'],
      ['foo', 'baz'],
      ['quux', 'dix'],
      ['trieste', 'dease']
    ];
  });

  test('it returns the header row in a matrix containing only header row', () => {
    matrix = [
      ['header1', 'header2']
    ];
    const result = getRecommendations({}, matrix);
    expect(result).toEqual([['header1', 'header2']]);
  });

  test('it returns the matrix if the query is empty', () => {
    const result = getRecommendations({}, matrix);
    expect(result).toEqual([
      ['header1', 'header2'],
      ['foo', 'bar'],
      ['foo', 'baz'],
      ['quux', 'dix'],
      ['trieste', 'dease']
    ]);
  });

  test('it returns all rows matching a query with 1 parameter', () => {
    const query = { header1: 'foo' };
    const result = getRecommendations(query, matrix);
    expect(result).toEqual([
      ['header1', 'header2'],
      ['foo', 'bar'],
      ['foo', 'baz']
    ]);
  });

  test('it returns all rows matching intersection of 2 parameters', () => {
    const query = { header1: 'foo', header2: 'bar' };
    const result = getRecommendations(query, matrix);
    expect(result).toEqual([
      ['header1', 'header2'],
      ['foo', 'bar']
    ]);
  });
});
