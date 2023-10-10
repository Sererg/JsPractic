'use strict';

const now = new Date();

console.log(now.setHours(3, 40));
console.log(now);

// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getTime());
// console.log(now.getTimezoneOffset());

let start = new Date();

for( let i = 0; i < 10000;i++) {
    let some = i** 3;
};
let end = new Date();
console.log(`цикл отработал за ${end - start}`);