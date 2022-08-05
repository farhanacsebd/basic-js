var first = 234;
var second = 11;
var third = 433;


var small=Math.min(first,second,third);
// console.log(small);


// var first = 234;
// var second = 311;
// var third = 444;

// var max=Math.max(first,second,third);
// console.log(max);


// function smallestNumber(first,second,third){
//     if((first<second) && (first<third)){
//         return first;
//     }
//     else if ((second<first) && (second<third)){
//         return second;
//     }
//     else{
//         return third;
//     }
// }

// var smallest = smallestNumber(11,553,234)
// console.log(smallest);




function smallestNumber(first,second,third,fourth){

    if((first<second) && (first<third) && (first<fourth)){

        return first;

    }

    else if((second<first) && (second<third) && (second<fourth)){
        
        return second;

    }

    else if((third<first) && (third<second) && (third<fourth)){

        return third;

    }

    else fourth;

}


    console.log((smallestNumber(44,65,675,234))); 