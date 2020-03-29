const { GoogleSpreadsheet } = require('google-spreadsheet')

const creds = require('../plant-ma-google-service-creds.json');

const SHEET_ID = '1ZU7TK1ZWOyXaA_R3_aFLBGwRG6Hpahqm6E97S8IVoPQ';

const doc = new GoogleSpreadsheet(SHEET_ID);


const expandRow = (rowData) => {
  const starSigns = rowData.pop().split(',');
  return starSigns.map(sign => [...rowData, sign]);
};

module.exports = async function loadData() {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows(); 
  await sheet.loadHeaderRow();
  
  return rows.reduce((acc, row) => {
    const expandedRow = expandRow(row._rawData);
    acc.push(...expandedRow);
    return acc;
  }, [sheet.headerValues]);
};