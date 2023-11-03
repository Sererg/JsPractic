const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const discount = compose(normalizePrice, divide100, multiply20);
discount(200.0);

const compose = (...functions) => x => functions.reduceRight((acc, func) => func(acc), x);

const composeWithArgs = function(...fns) {
    return fns.reduceRight(function(f, g) {
        return function(...args) {
            return g(f(...args));
        }
    });
};