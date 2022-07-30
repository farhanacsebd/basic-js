function getfactorial(number){
    var fact =1;
    var i=number;
    while(i>=1){
        fact =fact * i;

        i--;
    }

    return fact;
}

    var thisvalue =7;
    var factorialNumber=getfactorial(thisvalue);
    console.log(factorialNumber);





// function getfactorial2(number){
//     var fact =1;
//     for(var i=number;i>=1; i--){
//         fact =fact * i;

//     }
//     return fact;
// }

//     var thisvalue =7;
//     var number=getfactorial2(thisvalue);
//     console.log(number);