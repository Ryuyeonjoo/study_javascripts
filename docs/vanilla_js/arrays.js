// Array == ArrayList
let fruits = ["apple", "banana", "orange", "mellon"];
let fruits_second = ["berry", "strawberry"];
let numbers = [1, 2, 3, 4, 5];

// 둘 다 변수의 초기화 방법 두가지
let fruits_init = new Array();
fruits_int = [];

//object == HashMap
let objects = { name: "Tom", age: 4 };

let mixins_first = [1, 2, 3, "apple", 4, "mellon"];
let mixins_second = [1, 2, 3, "apple", { name: "Tom", age: 4 }];
let mixinx_third = [1, 2, 3, "banana", objects];

let mixins_fourth = [fruits, numbers];

const mixins_array = [
  ["apple", "banana"],
  ["orange", "mellon"],
  ["berry", "strawberry"],
];

// mixins_array 풀어헤치기
let first = ["apple", "banana"];
let second = ["orange", "mellon"];
let third = ["berry", "strawberry"];

// mixins_array 합치기
let mixins_list = [first, second, third];

// 위치 알아내기
// mixins_list[1][1]
// 'mellon'
// mixins_list[1].indexOf('mellon')
// 1

console.log();

// fruits의 0번째 3번째 값 꺼내기
// fruits[0]
// 'apple'
// fruits[3]
// 'mellon'

// 없애기
// fruits.pop()     //뒤에서 없애기
// 'mellon'
// fruits
// (3) ['apple', 'banana', 'orange']

// 넣기
// fruits.push("grape")
// 4
// fruits
// (4) ['apple', 'banana', 'orange', 'grape']

// 특정한 위치에서 특정한 값 없애기
// fruits.slice(1,2)
// (1) ['banana']

// list 합치기
// fruits_concat = fruits.concat(fruits_second)
// (6) ['apple', 'banana', 'orange', 'mellon', 'berry', 'strawberry']

// indexOf (내용만 알고 index의 위치를 모를 때)
// fruits_concat.indexOf("mellon")
// 3
// fruits_concat.indexOf("berry")
// 4

// array 전체를 화면에 display하는, array 전체를 string처럼 만들어내는
// fruits_concat
// (6) ['apple', 'banana', 'orange', 'mellon', 'berry', 'strawberry']
// fruits_concat.join()
// 'apple,banana,orange,mellon,berry,strawberry'             // 작은 따옴표가 양 끝에 있고, 대괄호가 없이 출력 => String이 되었음.
// fruits_concat.join(' and ')
// 'apple and banana and orange and mellon and berry and strawberry'

//string을 array로 만들어내는
// fruits_string = fruits_concat.join()
// 'apple,banana,orange,mellon,berry,strawberry'
// fruits_arrays = fruits_string.split(",")
// (6) ['apple', 'banana', 'orange', 'mellon', 'berry', 'strawberry']
// fruits_arrays.reverse()   // 거꾸로 배열
// (6) ['strawberry', 'berry', 'mellon', 'orange', 'banana', 'apple']
