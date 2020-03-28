const { GoogleSpreadsheet } = require('google-spreadsheet')

const creds = require('../plant-ma-google-service-creds.json');

const SHEET_ID = '1ZU7TK1ZWOyXaA_R3_aFLBGwRG6Hpahqm6E97S8IVoPQ';

const doc = new GoogleSpreadsheet(SHEET_ID);


const expandRow = (rowData) => {
  // split last row on comma
  // map over that and add a new array that includes the length - 2 items of rowData
  // return array of arrays
};

module.exports = async function loadData() {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows(); 
  
  return rows.reduce((acc, row) => {
    const expandedRow = expandRow(row._rawData);
    acc.push(...expandedRow);
  }, []);
  // console.log(rows[0]._rawData);
};