// Math.abs

let mathabs=-5;
let mathIs=Math.abs(mathabs);
console.log(mathIs);

// Math.floor

const floor = 34.7;
const resultFloor = Math.floor(floor);
console.log(resultFloor);

// Math.ceil


const ceilIs = 54.44;
const resultceil = Math.ceil(ceilIs);
console.log(resultceil);


// Math.random
// Math.round
const randomIs = 54.23;
const resultRandom = Math.random(randomIs)*100;
const rounded =Math.round(resultRandom);
console.log(rounded);


//swap


let first = 5;
let second = 7;

// let temp = first;
// first = second;
// second = temp;

// console.log(first,second);



[first,second] = [second,first];
console.log(first,second);



// sum for loop


let numbers =[33,56,87,93,04,67,22,19];


sum = 0;
for(let i=0 ;i<numbers.length; i++){
    element = numbers[i];
    sum =sum + element;
    console.log(sum);
}




function sumarray(number){
    sum = 0;
for(let i=0 ;i<number.length; i++){
    element = number[i];
    sum =sum + element;
    console.log(sum);
}
}

sumarray([33,56,87,93,04,67,22,19])