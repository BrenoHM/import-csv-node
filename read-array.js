import fs from "fs";
// (B) READ CSV INTO STRING
var data = fs.readFileSync("./csv/Research-and-development-survey-2021-CSV-notes.csv", "utf8");

// (C) STRING TO ARRAY
data = data.split("\r\n"); // SPLIT ROWS
for (let i in data) { // SPLIT COLUMNS
  data[i] = data[i].split(",");
}
console.log(data);