const fs = require('fs');

const buildCreds = require('./buildCreds.js');

module.exports = () => {
  // option 1: check for process env vars
  const useProcessEnv = process.env.GOOGLE_PRIVATE_KEY_ID && process.env.GOOGLE_PRIVATE_KEY;
  if (useProcessEnv) {
    console.log('Found process environment variables for Google auth');
    const { GOOGLE_PRIVATE_KEY, GOOGLE_PRIVATE_KEY_ID } = process.env;
    return buildCreds({
      GOOGLE_PRIVATE_KEY,
      GOOGLE_PRIVATE_KEY_ID
    });
  }

  // option 2: check for existing credentials file
  try {
    const credsFile = fs.readFileSync('./google-service-creds.json', { encoding: 'utf-8' });
    console.log('Found local credentials file for Google auth');
    return JSON.parse(credsFile);
  } catch (e) {
    // proceed to option 3...
  }

  // option 3: read from .env file
  const envFileContents = fs.readFileSync('.env', { encoding: 'utf-8' });
  console.log('Found .env file with credentials for Google auth');
  const lines = envFileContents.split('\n');

  const secrets = lines.reduce((acc, line) => {
    const lineItems = line.split('=');
    acc[lineItems[0]] = lineItems[1];
    return acc;
  }, {});

  return buildCreds(secrets);
};