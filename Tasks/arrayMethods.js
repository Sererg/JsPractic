//        filter

// const names= ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });
// console.log(shortNames);

//          map

// const answers = ['IvAn', 'AnNa', 'Hello'];

// const result = answers.map((item) => {
//     return item.toLowerCase()
// })
// console.log(result);

// every/some

// const some = [4 , 'dfs' , 'fdewr'];
// console.log(some.some(item => typeof(item) === 'number')); // хотябы 1 

// console.log(some.every(item => typeof(item) === 'number')); // все элементы

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const result = arr.reduce((summ, current) => {
//     return summ + current
// });

// console.log(result);

// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((summ, current) => {
//     return `${summ}, ${current}`
// });

// console.log(result);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === "persone")
.map(item => item[0]);
console.log(newArr);