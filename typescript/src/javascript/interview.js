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

const { name, ...other } = { name: "mgmg", status: "single", age: 25 };

console.log(name, other);
