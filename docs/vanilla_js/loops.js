const animals = ["dog", "cat", "bird", "fish", "lizard"]; // date type = array

// for문을 돌린다는 것은 for문의 data type은 array type이어야 함.
// while문도 마찬가지

// Normal 방식
for (i = 2; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for iterable
for (let animal of animals) {
  console.log(`${animal}`);
}

// typeof animal
// 'string'
// animal.split('o')
// (2) ['d', 'g']

//object를 list에 넣는 방법
const animals_obj = [
  // animal,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}

// for (variable of iterable) {
//        // code block to be executed
// }
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
}
