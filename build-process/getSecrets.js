const fs = require('fs');

const useProcessEnv = process.env.USE_PROCESS_ENV === 'true';

const readFromFile = () => {
  const secrets = fs.readFileSync('.env', { encoding: 'utf-8' });
  const lines = secrets.split('\n');

  return lines.reduce((acc, line) => {
    const lineItems = line.split('=');
    acc[lineItems[0]] = lineItems[1];
    return acc;
  }, {});
};

const readFromProcess = () => process.env;

module.exports = useProcessEnv ? readFromProcess : readFromFile;