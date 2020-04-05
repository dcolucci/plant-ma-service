const Benchmark = require('benchmark');

const loadData = require('./src/loadData.js');

const suite = new Benchmark.Suite;

suite.add('loadData', function() {
  // doesn't work - google API might be rate limited?
  // loadData();
})
.add('Another Test', function() {
  new Array(10000).reduce((acc, item) => {
    if (item % 2 === 0) {
      acc.push(true);
    }
    return acc;
  }, [])
})
.on('complete', function() {
  const means = this.map(bm => {
    return {
      name: bm.name,
      mean: bm.stats.mean
    };
  });
  console.log(means);
})
.run({ async: true });