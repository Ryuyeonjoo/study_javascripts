// let animal = {key:value, key:value, key:value}
let animal = { name: "juju", species: "cat" };

console.log(animal.name);

// animal['species']
// 'cat'
// animal.species
// 'cat'

// Object.keys(animal)
// (2) ['name', 'species']
// Object.values(animal)
// (2) ['juju', 'cat']

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
  console.log(`${key} :  ${animal[key]}`); // animal['name'], animal['species']와 같다
}

console.log();

const animals_obj = [
  animal,
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

// Object.keys(animal)
// (2) ['name', 'species']
// Object.values(animal)
// (2) ['juju', 'cat']
