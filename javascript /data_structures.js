// objects, arrays, maps, sets
// objects: data stored in key-value pairs
// arrays: ordered, iterable collection of values with an automatic index
// maps: iterable collection of key-value pairs, keys can only be strings or symbols
// sets: collection of unique items (no duplicates)

// additional array methods
const fruits = ["kiwi", "mango", "apple", "pear"];
fruits.forEach((fruit,idx) => { console.log(`${idx}. ${fruit}`); });

const nums = [0, 10, 20, 30, 40, 50];
const numsOver20 = nums.filter((num) => { return num > 20 });
console.log(numsOver20);

const reduced = nums.map((num) => { return num / 10 });
console.log(reduced);

// object example
// const result = [];
const drone = {
  speed: 100,
  color: 'yellow',
}
// const droneKeys = Object.keys(drone);
// droneKeys.forEach((key) => { result.push([key, drone[key]])});

const result = Object.entries(drone);
console.log(result);

// maps
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-Up");
bestBoxers.set(3, "The Second Runner-Up");

console.log(bestBoxers);
console.log(bestBoxers.get(2));

// sets
const repetitiveFruits = ["apple", "pear", "apple", "pear", "plum", "apple"];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);