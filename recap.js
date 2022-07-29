let list=[21,46,87,09,38,58,12,3,09,79,22]

// let numberofList=list.length;

let numberofList=list.indexOf(87);

list[5]=666;

list.pop();

list.push(534);


list.shift();

list.unshift();


// console.log(numberofList);


console.log(list);


if(list < 8){
    console.log("array lenth is to much");
}

else{
    console.log("added some valus");
}

var atlist=1;

while(atlist<10){
    console.log(atlist);
    atlist++;
}
