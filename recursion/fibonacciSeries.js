function fibonacci(i){
    if(i == 0){
        return i;
    }
    else if(i == 1){
        return i;
    }
    else{
        return fibonacci(i-1) + fibonacci(i-2);
    }
}

console.log(fibonacci(6));