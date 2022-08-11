// variable
let first =2;
let second =4;

let total =second / first;

// console.log(typeof first);

 total = true;

// console.log(typeof total);


let nameIs = 'Farhana';
// console.log(typeof nameIs);

let firstName = 'Jim';
let secondName = 'kim';
let fullName = 'Jim' + " " + 'kim';
// console.log(fullName);

let price ="43.30";
let prce1 ="33.11";
let priceIs =parseFloat(price);
let price1Is =parseFloat(prce1);
let totalPriceIs= priceIs + price1Is;
// console.log(totalPriceIs);


let eggPrice ='20';
let lemonPrice = '10';
let totalEggLemonPrice = eggPrice + lemonPrice;
// console.log(parseInt(totalEggLemonPrice));

let arr =[22,33,55,234,74,78,99,13,18,67,9];

let arrIs =arr.length;

let arrIndex = arr.indexOf(44);

let arrayIndex = arr[4];
// console.log(arrayIndex);


arr[3] = 77;
arr.push(21);
arr.push(90);
// console.log(arr);

let lastItem = arr.pop();
// console.log(arr);


// console.log(lastItem);

arr.shift();
arr.unshift(45);
// console.log(arr);

let arrlistItem = arr.pop();

// console.log(arr);
// console.log(arrlistItem);


// function result(marks){
//     if(marks>=80 && marks<=100){
//         console.log('Congratulations,You got A+');
//     }
//     else if(marks>=70 && marks<=79){
//         console.log('You got A');
//     }
//     else if(marks>=60 && marks<=69){
//         console.log('Your got A-');
//     }
//     else if(marks>=55 && marks<=59){
//         console.log('Your got B+');
//     }
//     else if(marks>=50 && marks<=54){
//         console.log('Your got B-');
//     }
//     else {
//         console.log('You are fail');
//     }
   
// }


// let marksIs=77;
// totalmarks=result(marksIs);


// miles to kilometer


function miletokilomer(mile){
    
    let km=mile*1.6093;
    return km;

}

let mile =10;
// console.log(miletokilomer(mile));




// inch to feet

function inchtofeet(inches){
    let feet =inches / 12;
    return feet;

}

    let inchesIs = 140;
    // console.log(inchtofeet(inchesIs));


// nested condition


// let barger  = 550;
// let pizza = 980;

// mybudget = 1000;

// let haizine = false;

// if(mybudget > pizza){
//     if(haizine==true){
//         console.log("I can buy this food");
//     }
//     else{
//         console.log("I can't to buy this.");
//     }
// }



// for loop


let number=[22,64,102,77,88,95,32,101,08,66,79,82,38,21];

/* for(let i=0;i<number.length;i++){
   let element=number[i];
    // console.log(element);

    if(element > 100){
        break;
    }
    console.log(element);
}
 */


/* for(let i=0;i<number.length;i++){
    let element=number[i];
     // console.log(element);
 
     if(element > 100){
         continue;
     }
     console.log(element);
 }
 */

// EVEN OR ODD NUMBERS

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
}
    }

let numbers=120;
// console.log(isEven(numbers));




function isOdd(numberIs){
    if(numberIs % 2 ==1){
     return true;    
    }
    else{
        return false;
    }
}
 let theOddNumber = 1221;
//  console.log(isOdd(theOddNumber));




function myNumber(thenumber){
    if(thenumber % 2 != 0){
     return true;    
    }
    else{
        return false;
    }
}
 let theNumberIs = 1221;
//  console.log(myNumber(theNumberIs));



// Factorial number for loop



// let factorial =1;
// for(let i=1;i<7;i++){
//     factorial = factorial * i;
// }
//     console.log(factorial);


// Factorial number while loop


// let fact =1;
// let i=1;
// while(i<7){
//     fact = fact * i;
//     i++;
// }
//     console.log(fact);




// Factorial number function for loop 

function factorial(numberisThe){
    let fact =1;
for(let i=1;i<numberisThe;i++){
    fact = fact * i;
}
   return fact;
}

let getfactorial=8;
// console.log(factorial(getfactorial));



// Factorial number function while loop 

function getTheFactorial(numberBig){
    
    factorial = 1;

    let i=1;

    while(i<numberBig){

        factorial = factorial * i;
       
        i++;
    }
    return factorial;
}


    let myFactorial=getTheFactorial(10);
    // console.log(myFactorial);


// factorial decrementing loop

function theFactorial(myNumber){
    let factIs = 1;
    for(let i=myNumber; i>=1; i--){

        factIs = factIs * i;

    }
    return factIs;
}


    let getFact = theFactorial(8);
    // console.log(getFact);


function factorialIs(theNumber){
    
   let theFact = 1 ;

   let i = theNumber;

   while(i>=1){

    theFact = theFact * i;

    i--;

   }
   return theFact;   
}

    let theFactIs = factorialIs(8);
    // console.log(theFactIs);





// Brake or Continue 

// let i = 1;
// while(i<10){
//     console.log(i);
//     if(i==5){
//         break;
//     }
//     i++;
// }


let numberIs=[11,22,55,74,75,99,101,35,89,33]

// let a =0;
// while(a<numberIs.length){
//      let elementIs=numberIs[a];
//     console.log(elementIs);

//     if(elementIs>100){
//         break;
//     }
//     a++;
// }



// for(let a = 0;a<numberIs.length;a++){
//     let elementIs = numberIs[a];
//     if(elementIs > 90){
//         continue;
//     }
//     console.log(elementIs);
// }


// let i = 0;
// while(i<numberIs.length){
//     elementIs = numberIs[i];
//     if(elementIs>80){
//         continue;
//     }
//     console.log(elementIs);
//     i++;
// }



// min max value

/* const a =345;
const b =243;
const c =660;
const max = Math.max(a,b,c);
const min = Math.min(a,b,c);
console.log(max,min);
console.log(min); */


function largestNumber(number){
    let max = number[0];
    for(let i=0;i<number.length;i++){
        element = number[i];
        if(element > max){
            max = element;
        }
       
    }
    return max;
}


let getLargestNumber = largestNumber([11,22,55,74,75,99,101,35,89,33]);
// console.log(getLargestNumber);


function smallestNumber(number){
    let min = number[0];
    for(let i=0;i<number.length;i++){
        let elementIs = number[i];
        if(elementIs<min){
            min=elementIs;
        }
    }
    return min;
}

let getSmallestNumber = smallestNumber([11,22,55,74,75,99,101,35,89,33]);
// console.log(getSmallestNumber);



function sumNumber(number){
    let sum = 0;
    for(let i = 0; i<number.length; i++){
       let element = number[i];
        sum =sum + element;
    }
    return sum;
}

let getSumNumber =sumNumber(numberIs);
// console.log(getSumNumber);



// fibonacchi

function fibo(number){
    let fibonacchi =[0,1];
    for(let i =2;i<number;i++){
        fibonacchi[i] = fibonacchi[i-1] + fibonacchi[i-2];
    }
    return fibonacchi;
}

 let fiboIs = fibo(10);
//  console.log(fiboIs);



//  foo,bar,foobar


/* for(let i =1;i<=50;i++){
    if(i % 3 ==0 && i % 5 == 0){
        console.log('foobar');
    }
    if(i % 3 ==0 ){
        console.log('foo');
    }
    if(i % 5 ==0 ){
        console.log('bar');
    }
    else{
        console.log(i);
    }
} */



// remove duplicate

/* let names = ['abul','babul','sabul','dabul','jabul','gabul','abul','babul','sabul','dabul','jabul'];

function duplicate(names){
    
    unique = [];
    
    for(element of names){

            console.log(element);
            
       if(unique.indexOf(element)==-1){
        unique.push(element);
       }
    }
    return unique;
}

let uniqueNames = duplicate(names)
console.log(uniqueNames); */