const number = 2;

(function(){
    let number = 1;
    console.log(number);
    number += 2;
    console.log(number);
}());

console.log(number);

const user = (function(){
            const privat = function(){
                console.log( 'i am privat!');
            };

        return {
            sayHello: privat
        }
}());

user.sayHello()

