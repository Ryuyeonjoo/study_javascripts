// operate number type and string
let number_first = 3; //숫자
let string_second = "5"; // String

console.log(number_first + string_second);

// recommanded this way
let concate_string = `${number_first}${string_second}`;

string_second = "A";
console.log(number_first + string_second);

// Strings
let animal = "tiger";
console.log(`${animal}`);

// typeof number_first
// 'number'

// typeof string_second
// 'string'

// typeof animal
// 'string'

// animal.substring(0, 3)
// 'tig'

// animal.replace('ti', 'TI')
// 'TIger'

// animal.toLocaleUpperCase()
// 'TIGER'

// animal.charAt(0)
// 't'

// animal.split('g')
// (2) ['ti', 'er']

let sentance = "  5 2 6  ";
let trims = sentance.trim(); // 공백 제거
let splits = trims.split(" "); // 공백으로 배열 만듬
let maps = splits.map(Number); // 각 배열을 String -> To Number로 바꿔줌
console.log(maps[0] + maps[1] + maps[2]); // 합산함.

// 위와같이 하면 너무 복잡하고 길다. 그래서 체인펑션 사용.

let inputs = sentance.trim().split(" ").map(Number); // 체인 펑션
console.log(inputs[0] + inputs[1] + inputs[2]);

//maps[0]
// 5

// typeof maps[0]
// 'number'

// typeof maps[1]
// 'number'

// typeof maps[2]
// 'number'
