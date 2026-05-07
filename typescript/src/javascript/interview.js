// const users = [
//   { id: 1, name: "Jason", role: "user" },
//   { id: 2, name: "John", role: "admin" },
//   { id: 3, name: "Jane", role: "admin" },
// ];

// const result = users.find((user) => user.role === "admin");
// const answer = users.filter((user) => user.role === "user");

// const orders = [
//   { category: "clothes", price: 50, qty: 2, item: "shirt" },
//   { category: "shoes", price: 150, qty: 1, item: "nike" },
//   { category: "shoes", price: 20, qty: 3, item: "slipper" },
// ];

// const result = orders.map((order) => console.log(order.category));
// const answer = orders.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

// const array = [10, 8, "c", 11, "q", 5];

// let num = [];
// let char = [];

// for (let i = 0; i < array.length; i++) {
//   if (typeof array[i] === "number") {
//     num.push(array[i]);
//   } else {
//     char.push(array[i]);
//   }
// }

// const result = array.filter((arr) => typeof arr === "number");
// const string = array.filter((arr) => typeof arr === "string");

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [...b, 5, 6, 7];

// // const result = [...a, ...b, ...c];

// const user = { name: "MgMg", status: "single", age: 25 };
// const result = { ...user, age: 26 };

// function sum(...params) {
//   const result = params.reduce((acc, curr) => acc + curr, 0);
//   console.log(result);
// }

// sum(1, 2, 3, 4);
// console.log(char);

// const { name, ...other } = { name: "mgmg", status: "single", age: 25 };

// console.log(name, other);

// const result = Number.isNaN(NaN);

// console.log(result);
// console.log(typeof NaN);

// console.log({ name: "agag" } + ["mgmg", "susu"]);

// const test = () => {
//   return { a: 1 };
// };

// console.log(test());

// let arr = [10, 15, 30];
// arr[5] = 100;

// const result = arr.map((item, index) => console.log(item, index));

// console.log(arr.length);
// console.log(0 in arr);
// console.log(3 in arr);

const array = [10, 15, 20, 10, 30, 30, 100];

array.map((arr) => arr * 2);
array.filter((arr) => arr > 20);
array.reduce((acc, curr) => acc + curr, 0);

const operation = (arr, fn) => arr.map(fn);

// const result = operation([1, 2, 3], (n) => n + 3);
const result = operation([2, 3, 4], (num) => num * 2);
console.log(result);

// const findDuplicate = (arr) => {
//   const dup = arr.filter((item, index) => arr.indexOf(item) !== index);

//   return dup;
// };

// console.log(findDuplicate(array));

// const max = (arr) => {
//   return arr.reduce((acc, curr) => (acc > curr ? acc : curr));
// };

// console.log(max(array));
