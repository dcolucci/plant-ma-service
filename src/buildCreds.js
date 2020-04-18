const fs = require('fs');

module.exports = (secrets) => {
  // this script must be in same file as creds template!
  const template = fs.readFileSync(`${__dirname}/google-service-creds-template.json`, { encoding: 'utf-8' });
  const credsString = Object.keys(secrets).reduce((acc, key) => acc.replace(`{${key}}`, secrets[key]), template);
  return JSON.parse(credsString);
};