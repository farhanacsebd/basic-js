function factorial(n){
    if(n==1){
        return n;
    }
    else{
        return n * factorial(n-1)
    }
}

const fact = factorial(7);
console.log(fact);