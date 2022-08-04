function fibo(num){
    let fibo = [0,1];
    for(let i =2;i<=num;i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
        
    }
        return fibo;
}

console.log(fibo(13));




// const fibo=[0,1];

// for(i=2;i<=7;i++){
//  fibo[i] = fibo[i-1] + fibo[i-2];  
// console.log(fibo);
// }
