function seertoMon(seer){
    let mon = seer / 40;

    return mon;
}

let seerIs = seertoMon(80);
console.log(seerIs);


// 2nd problem

function totalSales(shirtsQuntity,pantsQuantity,shoesQuantity){
    const shirts = 100;
    const pants = 200;
    const shoes = 500;

    totalProducts = shirts * shirtsQuntity + pants * pantsQuantity + shoes * shoesQuantity;
    return totalProducts;
}
// console.log(totalSales(3,2,1));


// 3rd problems

function deliveryCost(cost){
    const firstShirtCost = 100;
    const secondShirtCost = 80;
    const thirdShirtCost = 50;

    if(cost <= 100){
        firstShirtQuantity = cost * firstShirtCost;
        return firstShirtQuantity;
    }
    else if(cost <= 200){
        firstShirtQuantity = 100 * firstShirtCost;
        quantitys = cost - 100;
        secondShirtQunatity = quantitys * secondShirtCost;
        totalSecondShirtQuantitys = firstShirtQuantity + secondShirtQunatity;
        return totalSecondShirtQuantitys;
    }
    else{
        firstShirtQuantity = 100 * firstShirtCost;
        secondShirtQunatity = 100 * secondShirtCost;
        totalQuantitys = cost - 200;
        thirdShirtQunatity = totalQuantitys * thirdShirtCost;
        totalThirdShirtQuantitys = firstShirtQuantity + secondShirtQunatity + thirdShirtQunatity;
        return totalThirdShirtQuantitys;
    }
}

const shirtCost = deliveryCost(201);
// console.log(shirtCost);


// 4th no

function perfectFriend(friend){
    
    for(let names of friend){
        // console.log(names);
        if(names.length == 5){
            return names;
        }
    }
    
}

let frdName = perfectFriend(['khurgus','laltush','kuttush','piku','Nimki','piyo']);
console.log(frdName);