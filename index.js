const { GoogleSpreadsheet } = require('google-spreadsheet')

const creds = require('./plant-ma-google-service-creds.json');

const SHEET_ID = '1ZU7TK1ZWOyXaA_R3_aFLBGwRG6Hpahqm6E97S8IVoPQ';

const doc = new GoogleSpreadsheet(SHEET_ID);

async function doWork() {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
}

doWork();