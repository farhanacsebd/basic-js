// let numbers =[33,56,87,93,04,67,22,19];

// let sum =0;

// for(let i=0;i<numbers.length;i++){

//     element = numbers[i];
//     sum=sum + element;
//     console.log(sum);
// }








function array(numbers){
    let sum =0;
    for(i=0;i<numbers.length;i++){
       let element = numbers[i];
        sum=sum + element;
    }
    
        return sum;
}

let total=array([33,223,555,665,123,54,23]);
console.log(total);
