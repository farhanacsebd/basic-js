// function fact(n){
//     if(n==1){
//         return 1;
//     }
//     return n* fact(n-1);
// }

// var myfactorial=fact(5);
// console.log(myfactorial);



// function factorial(n){

//     if(n==1){
//         return 1;
//     }
//     return n * fact(n-1) 
// }


// herfactorial=factorial(7);

// console.log(herfactorial);




function getfactorial(n){

    if(n==1){
        return 1;
    }

    return n * getfactorial (n - 1);
}

var factorialNumber =getfactorial(10);
console.log(factorialNumber);