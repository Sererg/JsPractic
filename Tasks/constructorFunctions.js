
function user(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hello ${this.name}`);
    };
}

user.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
}

const ivan = new user('Ivan', 28);
const alex = new user ('Alwx', 30);

ivan.hello();
ivan.exit();

console.log(ivan);
console.log(alex);