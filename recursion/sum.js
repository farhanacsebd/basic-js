function sum(i){
    if(i==0){
        return i;
    }
    else{
        return sum(i-1) + i;
    }
}

console.log(sum(6));