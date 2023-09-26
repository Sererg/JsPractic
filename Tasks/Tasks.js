// // let login = prompt("Какой логин?",'');
// // let password;
// // if(login == "Админ")
// // {
// //     password = prompt("Какой пароль?",'');
// // }
// // if(password == "Я главный")
// // {
// //     alert("Здравствуйте");
// // }
// // else
// // {
// //     alert("Неверный пароль");
// // }  
// // *
// // **
// // ***
// // ****
// // *****
// // ******
// const length = 100;
// let result = '';

// for(let i = 1; i < length; i++) {

//     for (let j = 0 ;j < i; j++){
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);

// for(let i = 1;i < 10; i ++){
//     if(i==5){
//         continue;
//     }
//     console.log(i)
// }
// "*"

// for(let i = 5; i <= 10; i++){
//     console.log(i)
// }
// function secondTask() {
//     // Пишем решение вот тут
//     for (let i = 20; i >=10; i--) {
//         console.log(i);
//         if (i == 13)   {
//             return;
//         }
        
//     }
// }
// console.log(secondTask());
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
//  }
// let i = 2;
// while( i <=16){
//     i++
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
    
// }

// let arr = [];
//     for(let i = 0; i <=5; i++){
//     arr[i] = i+5;

// }
// console.log(arr) 






// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
   
//     // Пишем решение вот тут
//     for(let i = data.length-1; i >= 0; i--){
//         result.push(data[i]);
//     }
//     // Не трогаем
//     return result;
// }
// console.log(thirdTask());


// secondTask();

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// thirdTask();

// const length = 100;
// let result = '';

// for(let i = 1; i < length; i++) {

//     for (let j = 0 ;j < i; j++){
//         result += "*";
//     }
//     result += '\n';
// // }
// // console.log(result);
// //      *
// //     ***
// //    *****
// //   *******
// //  *********
// // ***********

// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for( let i = 0; i<= lines; i++){
//     for( let j = 0;j < lines - i; j++ ){
//         result +- ' ';
//     }
//     for(let j = 0; j < i * 2 + 1; j++){
//         result +-'*';
//     }
//     result += '\n';
// }
// console.log(result);




// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < i * 2 + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);


// // Место для первой задачи
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// // Место для второй задачи
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// Место для третьей задачи
// function getMathResult(n0, q ) {
//     let result = n0;
    
//     if (!q || q <= 0) return n0;
    
//     for (let i = 2; i <= q; i++) {
//         result += `---${n0 * i}`;
//     }
//     console.log(result);
//     return result;
// }
// getMathResult(5,0);


// const sayHello = function(){
//     return(sayHello);
// }
// sayHello('Anton')
function calculateVolumeAndArea(lenCube) {
    if (typeof lenCube !== 'number' || lenCube < 0 || lenCube !== Math.round(lenCube)) {
        return 'При вычислении произошла ошибка';
    } else {
        return `Объем куба: ${ Math.pow(lenCube, 3) }, площадь всей поверхности: ${ Math.pow(lenCube, 2) * 6 }`;
    }
}

// Место для второй задачи
function getCoupeNumber(ticket) {
    if (typeof ticket !== 'number' || ticket < 0 || ticket !== Math.round(ticket)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (ticket > 36 || ticket == 0) {
        return 'Таких мест в вагоне не существует';
    } else {
        return ticket % 4 ? Math.round(ticket / 4) + 1 : Math.round(ticket / 4);
    }
}
