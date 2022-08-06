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


function result(marks){
    if(marks>=80 && marks<=100){
        console.log('Congratulations,You got A+');
    }
    else if(marks>=70 && marks<=79){
        console.log('You got A');
    }
    else if(marks>=60 && marks<=69){
        console.log('Your got A-');
    }
    else if(marks>=55 && marks<=59){
        console.log('Your got B+');
    }
    else if(marks>=50 && marks<=54){
        console.log('Your got B-');
    }
    else {
        console.log('You are fail');
    }
   
}


let marksIs=77;
totalmarks=result(marksIs);


