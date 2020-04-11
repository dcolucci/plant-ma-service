const fs = require('fs');
const getSecrets = require('./getSecrets');

// this script must be in same file as creds template!
const template = fs.readFileSync(`${__dirname}/google-service-creds-template.json`, { encoding: 'utf-8' });

const secrets = getSecrets();

const credsString = Object.keys(secrets).reduce((acc, key) => acc.replace(`{${key}}`, secrets[key]), template);

// we always write to the root dir of where the process is running
fs.writeFileSync('./plant-ma-google-service-creds-auto.json', credsString, { encoding: 'utf-8' });
