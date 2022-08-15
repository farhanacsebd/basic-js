let numbers=[32,44,67,11,101,35,76,90,04,40,61];

   /*  let max =numbers[0];
    for(element of numbers){
        if(element>max){
            max = element;
            
        }
        
    } */
    // console.log(max);
 
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



/* function factorial(n){
    if(n==1){
        return 1;
    }
    return n * factorial(n-1);      // n! = n * (n-1)!
}

let myFactorial = factorial(5);
console.log(myFactorial); */


/* let stringIs ='How are You?';
let reverse = '';
for(let element of stringIs){
    // console.log(element);
    reverse = element + reverse ;
    
}
console.log(reverse); */

let arrayIs=['jodu','modu','kodu','vodu','billu','sillu','killu','millu','jodu','modu','kodu','vodu','billu','sillu','killu','millu'];
let duplicate = [];

for(letter of arrayIs){
    // console.log(letter);
    if(duplicate.indexOf(letter)==-1){
        duplicate.push(letter);
        
    }
}
// console.log(duplicate);



const firstAnimalCount = 10;
const secondAnimalCount = 20;
const thirdAnimalCount = 100;

function animalCount(miles){
    if(miles <= 10){
        const firstCountAnimals =  miles * 10;
        return firstCountAnimals;
    }
    else if(miles <=20){
        const firstCountAnimals =  firstAnimalCount * 10;
        const secoundCounMilas = miles - 10;
        const scoundCountAnimals = secoundCounMilas * secondAnimalCount;
        const secoundTotalCountAmimals = firstCountAnimals + scoundCountAnimals;
        return secoundTotalCountAmimals;
    }

    else{
        const firstCountAnimals =  firstAnimalCount * 10;
        const scoundCountAnimals = 10 * secondAnimalCount;
        const thirdCountMiles = miles - 20;
        const thirdCountAnimals = thirdCountMiles * thirdAnimalCount;
        const totalCountAnimals = firstCountAnimals + scoundCountAnimals + thirdCountAnimals;
        return totalCountAnimals;
    }
       
}

const animals = animalCount(24);
// console.log(animals);

/* for(element of numbers){
    // console.log(element);
    if(element < 80){
        continue;
    }
    console.log(element);
} */

// let max =80;
/* for(let element of numbers){
    // console.log(element);
    if(element > 80){
        max = element;
        console.log(max);
    }
    
} */


function bestFriend(frdNames){
   let friend=frdNames[0];
    for(let nameIs of frdNames){
    //  console.log(nameIs);
    if(nameIs.length > friend.length){
        friend = nameIs;
    }
    }
   return friend;
}

let arrayName = bestFriend(['tuki','Kuttush','Piku','Putul',"piyo",'Nimki']);
console.log(arrayName);