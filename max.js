var first = 234;
var secend = 311;
var third = 444;

// var max=Math.max(first,secend,third);
// console.log(max);

function lagerNumber(num1,num2,num3){
    if (num1 > num2){
        return num1;
    }
    else if(num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}


var larger=lagerNumber(234,311,444)
console.log(larger);

