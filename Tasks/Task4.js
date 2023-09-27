const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr){
    if(arr.length == 0){
        console.log("Семья пуста");
        }else{
            console.log(`Семья состоит из:${arr.join(" ")}`)
        }
}
showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr){
   for(let i = 0; i < arr.length; i++){
    console.log(arr[i].toLowerCase())
   } 
   arr.forEach((value) =>{
    console.log(value.toLowerCase())
   })
}
standardizeStrings(favoriteCities);







const someString = 'This is some strange string';

function strReverse(str){
    if(typeof str !== "string"){
        console.log('Error');
    }else{
        str.split("").reverse().join("");
        console.log(str)
    }
}
strReverse(someString);







const baseCurrencies = ['USD', 'EUR',];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr){
    if (arr.length == 0){
       console.log( 'Нет доступных валют');
    }else{
        let res = 'Доступные валюты:\n';
        arr.filter(item => item !== missingCurr).forEach((curr) => res += `${curr}\n`);        
        console.log(res)
    }
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')
