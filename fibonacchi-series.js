// function fibo(num){
//     let fibo = [0,1];
//     for(let i =2;i<=num;i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
        
//     }
//         return fibo;
// }

// console.log(fibo(13));




function fibo(num){
    let fibo = [0,1];
    let i =2;
    while(i<=num){
        fibo[i] = fibo[i-1] + fibo[i-2];
        i++
    }
        return fibo;
}

console.log(fibo(13));



