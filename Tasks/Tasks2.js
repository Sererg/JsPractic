// const usdCurr = 28;
// const eurCurr = 32;
// const disconunt = 0.9;
// function convert(amount , curr){
//  return curr * amount;
    
// }

// function promotion( result){
//     console.log ( result * disconunt);
// }


// convert(500, usdCurr);
// convert(500, eurCurr);

// let arr = prompt('Ваше имя?', '');
// function sayHello (arr){
//     return ' Привет, $ {arr}';
// }
// alert = ' Ты пидор' + sayHello();
// let a = 10;
// function numbers (a){
   
//     return  [ a - 1, a , a + 1 ]; 
// }
// console.log(numbers(a));

// function getMathResult(a,b){
//     let result = a;
//     if( isNaN(b) || b <= 0 ){
//         console.log(result);
//         return result;
//     }else{
//     for(let i = 2; i <= b; i++){
//         result = result +  `---${a * i}`;
        
//     }
    
// }console.log(result);
// }
// getMathResult(3,0);

// function calculateVolumeAndArea (a){
//  if(isNaN(a) || a <= 0){
//     console.log('При вычисление произошла ошибка!')
//  } else {
//     console.log(`Объем куба:${Math.pow(a, 3)}, площадь всей поверхности:${Math.pow(a, 2)*6}` )
//  }
// }
// calculateVolumeAndArea(5)






// function getCoupeNumber(place){
//  if(isNaN(place) || place<= 0 || place >=36){
//     console.log('Таких мест в вагоне не существует');
//  } else{ let numberCompartments = Math.ceil(place/4);
//      console.log(`Ваше купе под номером ${numberCompartments}`)
//  }
// }
// getCoupeNumber(10);







// function getCoupeNumber(place){
//     if (place == 0 || place >= 36){
//        console.log('Таких мест в вагоне не существует');
//     } else if( place % 1 != 0 || isNaN(place) || place < 0) {
   
//        console.log('Проверьте правильность введенного номера места');
   
//     } else { 
//         let numberCompartments = Math.ceil(place/4);
//         console.log(`Ваше купе под номером ${numberCompartments}`);
//     }
//    }
//    getCoupeNumber(25);




// const str = 'test';
// console.log(str.length);


// function getTimeFromMinutes(Time){
//     let minutes;
//     let hour;
//     if(isNaN(Time) || Time < 0 || Time > 600 ||  Time % 1 != 0  ){
//         console.log("Ошибка, проверьте данные")
//     }else{
//         hour = Math.floor(Time/60);
//         minutes = Time % 60;
        
//     }
//     let endHours = '', endMin = '';
//     switch (hour % 10) {
//         case 2:
//         case 3, 4:
//             endHours = 'а';
//             break;
//         case 0:    
//         case 5, 6, 7, 8, 9:
//             endHours = 'ов';
//             break;
//     }
    
//     switch (minutes % 10) {
//         case 1:
//             endMin = 'a';
//             break;
//         case 2, 3, 4:
//             endMin = 'ы';
//             break;
//     }
//     console.log(`Это ${hour} час${endHours} и ${minutes} минут${endMin}`)
// }
// getTimeFromMinutes(120)



// function findMaxNumber(a, b, c, d) {
//     for(let i = 0; i < arguments.length; i++) {
//         console.log(typeof arguments[i]);
//         if(typeof arguments[i] !== 'number'){
//             console.log("0");
//             return;
//         }
//     }
//     console.log(Math.max(a, b, c, d));
// }
    
// findMaxNumber( 0, 1, 2, 4.5)

function fib (a){
    if (isNaN(a) || a < 0 || a % 1 != 0){
        console.log("");

    } else{
        let b = [a];
        b[0] = 0;
        b[1] = 1;

        for (let i = 2;i <= a; i++){
            b[i] = b[i - 1] + b[i - 2];
        }
    }
}
fib(100);