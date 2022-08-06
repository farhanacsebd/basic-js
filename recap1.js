// variable
let first =2;
let second =4;

let total =second / first;

console.log(typeof first);

 total = true;

console.log(typeof total);


let nameIs = 'Farhana';
console.log(typeof nameIs);





let arr =[22,33,55,234,74,78,99,13,18,67,9];

let arrIs =arr.length;

let arrIndex = arr.indexOf(44);

arr[3] = 77;
arr.push(21);
arr.push(90);

// arr.pop();

arr.shift();
arr.unshift(45);

let arrlistItem = arr.pop();

console.log(arr);
console.log(arrlistItem);


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
    
    let km=mile*1000;
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


// let number=[122,64,77,88,95,32,08,66,79,82,38,21];

// for(let i=0;i<number.length;i++){
//    let element=number[i];
//     // console.log(element);

//     if(number > 90){
//         break;
//     }
//     // console.log(element);
// }


function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
}
    }

let numbers=120;
console.log(isEven(numbers));
