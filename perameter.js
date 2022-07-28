function bringBarger(taka){
    // console.log('tk diche ammu');
    console.log('aj mon vore barger khabo');
    var bargerPrice = 200;
    var totalQuantity = taka / bargerPrice;
    return totalQuantity;
}

var amount = 1000;
var totalAmount=bringBarger(amount);
console.log('totalBarger =',totalAmount);
