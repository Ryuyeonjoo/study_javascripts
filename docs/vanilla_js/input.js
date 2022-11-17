const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let readFileSync = fs.readdirSync("/dev/stdin");
// let toStrings = readFileSync.toString();
// let trims = toString.trim();
// let splits = trim.split(" ");
// let inputs = splits.map(Number);

let inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(inputs[0] + inputs[1]);
