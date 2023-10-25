// const ans = prompt('Введите ваше имя');

const reg = /n/ig;

//i ignor register
//g global
//m многострчный режим

//  \d  цифры
// \w  слова, буквы
// \s  пробелы
// \D не цифры
// \W не слова, буквы


// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('password');

// console.log(pass.replace(/./g,'*'));

// console.log('12-34-56'.replace(/-/g,':'));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

