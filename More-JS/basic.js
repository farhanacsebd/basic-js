let numbers=[32,44,67,11,101,35,76,90,04,40,61];

   /*  let max =80;
    for(element of numbers){
        if(element>max){
            max = element;
            console.log(max);
        }
        
    } */
 
   /*  function biggerNumber(numbers){
        let i = 0;
        let largest=numbers[0];
        while( i<numbers.length ){
    
            element = numbers[i];
            
                if(element>largest){
                    largest = element;
                }
            
            i++;
        }
        return largest;
    }
    
    
    console.log(biggerNumber([32,23,54,76,90,04,17,77])); */


// duplicate js
const names =['abul','babul','sabul','dabul','jabul','gabul','abul','babul','sabul','dabul','jabul']


function duplicateNames(name){
    let originName=[];
    for(element of name){
       if(originName.indexOf(element)==-1){
       originName.push(element);
       
       }
    }
    return originName;
}
// console.log(duplicateNames(names));;



function factorial(n){
    if(n==1){
        return 1;
    }
    return n * factorial(n-1);      // n! = n * (n-1)!
}

let myFactorial = factorial(5);
console.log(myFactorial);