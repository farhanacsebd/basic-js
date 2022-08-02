var first = 234;
var secend = 11;
var third = 433;


var small=Math.min(first,secend,third);
// console.log(small);


// var first = 234;
// var secend = 311;
// var third = 444;

// var max=Math.max(first,secend,third);
// console.log(max);


function smallestNumber(first,secend,third){
    if((first<secend) && (first<third)){
        return first;
    }
    else if ((secend<first) && (secend<third)){
        return secend;
    }
    else{
        return third;
    }
}

var smallest = smallestNumber(11,553,234)
console.log(smallest);
