const { GoogleSpreadsheet } = require('google-spreadsheet')

const secrets = require('./getSecrets.js')();

const SHEET_ID = '1ZU7TK1ZWOyXaA_R3_aFLBGwRG6Hpahqm6E97S8IVoPQ';

const doc = new GoogleSpreadsheet(SHEET_ID);

async function doWork() {
  await doc.useServiceAccountAuth({
    client_email: secrets.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: secrets.GOOGLE_PRIVATE_KEY
  });

  await doc.loadInfo();
  console.log(doc.title);
}

doWork();