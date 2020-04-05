const getRecommendations = require('../src/getRecommendations.js');

describe('getRecommendations', () => {
  let data;

  beforeEach(() => {
    data = [
      {
        key1: 'foo',
        key2: 'bar'
      },
      {
        key1: 'foo',
        key2: 'baz'
      },
      {
        key1: 'quux',
        key2: 'dix'
      },
      {
        key1: 'trieste',
        key2: 'dease'
      }
    ];
  });

  test('it returns the data if the query is empty', () => {
    const result = getRecommendations({}, data);
    expect(result).toEqual({
      data: [
        {
          key1: 'foo',
          key2: 'bar'
        },
        {
          key1: 'foo',
          key2: 'baz'
        },
        {
          key1: 'quux',
          key2: 'dix'
        },
        {
          key1: 'trieste',
          key2: 'dease'
        }
      ],
      query: {}
    });
  });

  test('it returns all entries matching a query with 1 parameter', () => {
    const query = { key1: 'foo' };
    const result = getRecommendations(query, data);
    expect(result).toEqual({
      data: [
        {
          key1: 'foo',
          key2: 'bar'
        },
        {
          key1: 'foo',
          key2: 'baz'
        }
      ],
      query: { key1: 'foo' }
    });
  });

  test('it returns all entriesr matching intersection of 2 parameters', () => {
    const query = { key1: 'foo', key2: 'bar' };
    const result = getRecommendations(query, data);
    expect(result).toEqual({
      data: [
        {
          key1: 'foo',
          key2: 'bar'
        }
      ],
      query: { key1: 'foo', key2: 'bar' }
    });
  });
});
