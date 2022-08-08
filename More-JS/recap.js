let list=[21,46,87,09,38,58,12,3,09,79,22]

// let numberofList=list.length;

let numberofList=list.indexOf(87);

list[5]=666;

list.pop();

list.push(534);


list.shift();

list.unshift();


// console.log(numberofList);


// console.log(list);


// if(list < 8){
//     console.log("array lenth is to much");
// }

// else{
//     console.log("added some valus");
// }

// var atlist=5;

// while(atlist<=100){
//     console.log(atlist);
//     atlist=atlist+5;
// }


// for(var a = 1; a <=100; a+=5){
//     console.log(a);
// }


// for (var a = 5; a<=50; a+=5){
//     console.log(a);}


function numbers(num1,num2){
    console.log('its run');

    let total=num1+num2;
    
    return total;
}

let fistnum =20;
let secondnum=4;

let equations=numbers(fistnum,secondnum)

console.log(equations);
