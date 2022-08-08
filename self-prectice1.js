/* let specialName = 'taSMI';
console.log(typeof specialName);


let specialNumber = 431;
console.log(typeof specialNumber);


const theNumber = true;
console.log(typeof theNumber);
 */



const first = 10;
const second = 5;
const totalsum = first + second;
const totalMinus = first - second;
const totalMultiply = first * second;
const totaldevide = first % second;
const totalquotient = first / second;
/* console.log(totalsum);
console.log(totalMinus);
console.log(totalMinus);
console.log(totaldevide);
console.log(totalquotient); */


const phnPrice = 22000;
const laptopPrice = 50000;
const buttonPhnPrice = 100;

const myBudget = 22000;

if(myBudget>=phnPrice && myBudget>=laptopPrice){
    console.log("U take both of these...");
}
else if(myBudget>=laptopPrice || myBudget>=phnPrice){
    console.log('u can take only one');
}
else{
    console.log('buy only buttonphone');
}