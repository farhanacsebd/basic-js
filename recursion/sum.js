function sum(i){
    if(i==0){
        return 0;
    }
    else{
        return sum(i-1) + i;
    }
}

console.log(sum(5));