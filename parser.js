// (A) CSV PARSER MODULE
// npm install csv-parser
// https://www.npmjs.com/package/csv-parser
import connection from './connection.js';
import fs from "fs";
import csv from "csv-parser";

// caso erro de memoria execute isso no banco
// show variables like 'max_allowed_packet';
// set global max_allowed_packet=33554432;
 
// (B) READ CSV FILE
var results = [];
fs.createReadStream("./csv/annual-enterprise-survey-2021-financial-year-provisional-csv.csv")
.pipe(csv())
.on("data", (data) => results.push(data))
.on("end", () => {

    let sql = `INSERT INTO anual_enterprise(
      Year,
      Industry_aggregation_NZSIOC,
      Industry_code_NZSIOC,
      Industry_name_NZSIOC,
      Units,
      Variable_code,
      Variable_name,
      Variable_category,
      Value,
      Industry_code_ANZSIC06) 
    VALUES ?;`;

    console.log('Processando carregamento...');
  
    connection.query(sql, [results.map(row => [
      Number(row.Year),
      row.Industry_aggregation_NZSIOC,
      row.Industry_code_NZSIOC, 
      row.Industry_name_NZSIOC,
      row.Units,
      row.Variable_code,
      row.Variable_name,
      row.Variable_category,
      row.Value,
      row.Industry_code_ANZSIC06
    ])],
    function(err) {
      if (err) throw err;
      console.log("Fim...");
      connection.end();
    });

});