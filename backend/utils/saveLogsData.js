const fs = require('fs');
const path = require('path');
const timeLog = require('./generateDate');
const logsFile = path.join(__dirname, '../logs/logs.json');

const writeToJson = (logsData, searchKeyword) => {
  logsData[timeLog.generateDate()] = searchKeyword;

  logsData = JSON.stringify(logsData, null, 2);

  fs.writeFile(logsFile, logsData, (err) => {
    if (err) throw err;
    console.log('Log saved in JSON file');
  })
}

exports.logs = ( searchKeyword ) => {
  let logsData = {};
  if (fs.existsSync(logsFile)) {
    fs.readFile(logsFile, (err, data) => {
      if (err) throw err;
      logsData = JSON.parse(data);

      writeToJson(logsData, searchKeyword)
    });
  } else {
    writeToJson(logsData, searchKeyword)
  }
}