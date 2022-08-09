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

/* if(myBudget>=phnPrice && myBudget>=laptopPrice){
    console.log("U take both of these...");
}
else if(myBudget>=laptopPrice || myBudget>=phnPrice){
    console.log('u can take only one');
}
else{
    console.log('buy only buttonphone');
}
 */




// let i=7;
// while(i<=19){
//     console.log(i);
//     i++;
// }




// Array


let arr =[32,13,566,67,51,37,99,22,57,21,88,100,95];

/* let arrIs = arr.length;

console.log(arrIs);
console.log(arr.indexOf(32));

arr[3]=55;
console.log(arr);

arr.push(43);
arr.push(04);
arr.pop()
arr.shift()
arr.unshift(23)
arr.unshift(53) */

// console.log(arr);






// console.log(arr);
/* var max =80;
for(var i=0;i<arr.length;i++){   
    var element = arr[i];
    // console.log(element);
    if(element>max){
        max=element;
        console.log('max is large',max);
       }  
} */



// Find large number of an Arry

/* for(let i=0;i<arr.length;i++){
    element = arr[i];
    
    if(element<80){
        continue;
    }
    console.log(element);
}
 */

/* let max =80;
for(element of arr){

     if(element>80){
        max=element;
        console.log(max);
     }
    
} */
// console.log(max);








/* function multiplyNumber(num1,num2,num3){
    
    let totalMultiplyNumber = num1 * num2 * num3;
    console.log(totalMultiplyNumber); 
}

let firstOne = 4;
let secondOne = 5;
let thirdOne = 3;
let totalMultiplyNumberIs = multiplyNumber(firstOne,secondOne,thirdOne); */

let shoppingCart ={
    
    latopPrice:112000,
    phonePrice:22000,
    headPhonePrice:15000
}

shoppingCart.headPhonePrice=2000;
// console.log(shoppingCart);




// Feet To Inch
function feetToInch(feet){
    let inch = feet * 12;
    
    return inch;
}

    let feetIs = 20;
    // console.log(feetToInch(feetIs));




function centimeterToMeter(centimeter){
    let meter = centimeter * 100;
    
    return meter;
}

    let centimeterIs = 2000;
    console.log(centimeterToMeter(centimeterIs));