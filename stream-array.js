// (A) FILE SYSTEM + READ LINE MODULES
import fs from "fs";
import rl from "readline";

// const fs = require("fs"),
//       rl = require("readline");
 
// (B) FILE STREAM
const reader = rl.createInterface({
  input: fs.createReadStream("./csv/Research-and-development-survey-2021-CSV-notes.csv")
});

// (C) READ LINE-BY-LINE INTO ARRAY
var arr = [];
reader.on("line", (row) => {
  arr.push(row.split(","));
});

// (D) DONE - FULL ARRAY
reader.on("close", () => {
  console.log(arr);
});