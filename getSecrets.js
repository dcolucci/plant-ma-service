const fs = require('fs');

module.exports = () => {
  const secrets = fs.readFileSync('.env', { encoding: 'utf-8' });
  const lines = secrets.split('\n');

  return lines.reduce((acc, line) => {
    const lineItems = line.split('=');
    acc[lineItems[0]] = lineItems[1];
    return acc;
  }, {});
};
