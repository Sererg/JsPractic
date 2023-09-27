let str = 'some';
let strObj = '';



const solder = {
    health : 400,
    armor : 100
};

const jonh1 = Object.create(solder)

const jonh = {
    health:100
};

jonh.__proto__ = solder;

Object.setPrototypeOf(jonh,solder)

console.log(jonh.armor)