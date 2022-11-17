let num = 5;
if (20 > num || 20 < num) {
  console.log("print!");
}

// 20 > num || 20 < num
// true
// print!

if (20 < num) {
  console.log(`20 > ${num}`);
} else if (20 > num) {
  //true인 부분을 else if에 붙여줌
  console.log(`20 > ${num}`);
} else {
  console.log(`done`);
}

// Ternay operator 삼항연산자
// 20 < num ? `20 < ${num}`' : `done`;
// 20 < num 결과가 참이면 `20 < ${num}`' / 거짓이면 `done`;
let condition = 20 < num ? `20 < ${num}` : `done`;

// 20 < num
// false
// 20 > num ? `20 < ${num}` : `done`
// '20 < 5'

console.log();
