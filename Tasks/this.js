//1
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b
    }

console.log(sum());

}
showThis(4, 5);
.//2
const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();
//3
function user(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hello ${this.name}`);
    };
}

let ivan = new user('Ivan', 23);

//4
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = { 
    name:"john"
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count (num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(12));

//5

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();


//
const double = a => a * 2;
console.log(double(4));
//1) обычная ф-яя: this = window, но если use strict = undefined
//2) контекст у методов обьект - сам обььект
//3) this в конструкторе и классах - это новый экземпляр обьекта
//4) ручная привязка this: call, apply, bind