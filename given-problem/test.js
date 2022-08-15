// problem no. 1 

for(let i = 1;i<10;i+=2){
    // console.log(i);
}

// problem no. 2

for(let i = 10;i<=20;i+=2){
    // console.log(i);
}

// problem no. 3

let sum =0;
for(let i = 10;i<=20;i+=2){
   sum = sum + i;
//    console.log(sum);
    
}

// problem no. 4

let house=[];
for(let i = 15;i<=25;i+=2){
    console.log(i);
    if(house.indexOf(i)==-1){
    house.push(i);
}
}
console.log(house);
console.log(house.length);
