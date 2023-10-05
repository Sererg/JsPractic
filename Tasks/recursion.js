// function pow(x, n) {
//     let result = 1;

//     for(let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }
//воздеведение в степень


// function low(x, n) {
//    if(n === 1){
//     return x;
//    } else {
//     return x * low(x, n - 1);
//    }
// }
// console.log(low(2, 3));

//воздеведение в степень через рекурсию 



function factorial (n){
  if(n == 1 || n <= 0 ){
    return n = 1;
  } else if ( isNaN(n) == true || n % 1 != 0){
    console.log('Введите натуральное число или 0 ')
  }
  else {
    n *= factorial(n - 1);
    return n;
  }

}

console.log(factorial(3));

// нахождение факториала через рекурсию и проверка