const { GoogleSpreadsheet } = require('google-spreadsheet')

// const creds = require('../plant-ma-google-service-creds-auto.json');

const SHEET_ID = '1ZU7TK1ZWOyXaA_R3_aFLBGwRG6Hpahqm6E97S8IVoPQ';

const doc = new GoogleSpreadsheet(SHEET_ID);


const expandRow = (rowData) => {
  const starSigns = rowData.pop().split(',');
  return starSigns.map(sign => [...rowData, sign.trim()]);
};

module.exports = async function loadData(creds) {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows(); 
  await sheet.loadHeaderRow();
  const headerValues = sheet.headerValues;

  return rows
    .reduce((expandedResults, row) => {
      const expandedRow = expandRow(row._rawData);
      expandedResults.push(...expandedRow);
      return expandedResults;
    }, [])
    .map(row => {
      return headerValues.reduce((hit, key, index) => {
        hit[key] = row[index];
        return hit;
      }, {});
    });
};