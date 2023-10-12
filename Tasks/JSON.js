'use strict'

const persone = {
    name: 'Alex',
    tel: '7435555555',
    parents: {
        mom: 'Olga',
        dad: 'Igor'
    }
};

console.log(JSON.stringify(persone));
console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Anna'

console.log(persone);
console.log(clone);