const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(object) {
    let squaer = 0;
     for (let i = 0; i < object.shops.length; i++) {
       squaer += (object.shops[i].length * object.shops[i].width);
     }

     console.log(`площадь равна=${squaer}`);
     let volumeObj = squaer * object.height;
     let costObj = volumeObj * object.moneyPer1m3;
     console.log(`Стоимость отопления=${costObj}`)

     if (costObj < object.budget) {
        console.log("Бюджета достаточно")
     } else {
        console.log("Бюджета недостаточно")
     }
}
isBudgetEnough(shoppingMallData);
    