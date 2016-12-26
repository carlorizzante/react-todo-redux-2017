const add = (a, b) => a + b;

console.log(add(1, 2)); // 3

const toAdd = [3, 4];
console.log(add(...toAdd)); // 7

const names1 = ["Jon", "Erika"];
const names2 = ["Drake", "Jane"];

const final = [...names1, ...names2];
console.log(final);

const final2 = [...names2, ...names1];
console.log(final2);

const greet = (name, age) => `Hi ${name}, you are ${age}.`;

const jon = ["Jon", 17];
const jane = ["Jane", 16];

console.log(greet(...jon)); // "Hi Jon, you are 17."
console.log(greet(...jane)); // "Hi Jane, you are 16."

const greetAll = names => names.forEach(name => console.log(`Hi ${name}!`));

const names = ["Jon", "Jane"];
const me = "Carlo";

greetAll([me, ...names]);
