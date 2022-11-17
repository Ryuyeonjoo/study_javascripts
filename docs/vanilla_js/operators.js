// 백준 사칙연산 문제

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
// let readFileSync = fs.readdirSync(filepath);
// let toStrings = readFileSync.toString();
// let trims = toString.trim();
// let splits = trim.split(" ");

let plus = inputs[0] + inputs[1];
let minus = inputs[0] - inputs[1];
let multiply = inputs[0] * inputs[1];
let divide = inputs[0] / inputs[1];
let any = inputs[0] % inputs[1];

console.log(plus);
console.log(minus);
console.log(multiply);
console.log(parseInt(divide));
console.log(any);
