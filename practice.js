const x=30;
const y=20;
const z=x+y;
// console.log(z);


// while loop

var i=1;
while(i<=100){
    // console.log(i);
    i++;
}


// for loop

for(let i=1; i<=100;i++){
    // console.log(i);
}


for(var i=51;i<=80;i+=2){
    // console.log(i);
}




// while loop

var i=51;
while(i<=80){
    // console.log(i);
    i+=2
}


// function

function numbers(num1,num2,num3){
    let valueIs =num1+num2+num3;
    return valueIs;
}

let fist=10;
let secend=20;
let third=30;

let resultIs=numbers(10,20,30)

// console.log(resultIs);



// celcius to Fahrenheit


// function celciusToFahrenheit(celcius){
//     let fahrenheitIs=celcius * 33.8;
//     return fahrenheitIs;
// }

//   let celciusIs=30;
//   let weatherIs = celciusToFahrenheit(celciusIs);

//   console.log('today's fahrenheit:',weatherIs);




//   function fahrenheitToCelcius(fahrenheit){
//         celciusIss=fahrenheit % 33.8;
//         return celciusIss;
//   }

//         let fahrenheitToday =1013.9;
//         let weather=fahrenheitToCelcius(fahrenheitToday);
//         console.log('today weath is ',weather);



// function AcademicReuslt(result){
//     if(result>=80 && result<=100){
//         console.log("Wow,Great You get A+");
//     }
//     else if(result>=70 && result<=79){
//         console.log("That is A");
//     }
//     else if(result>=60 && result<=69){
//         console.log("That is A-");
//     }
//     else if(result>=55 && result<=59){
//         console.log("That is B+");
//     }
//     else if(result>=45 && result<=54){
//         console.log("That is B-");
//     }

//     else{
//         console.log("fail");
//     }
//     // console.log(result);
//     return AcademicReuslt;
// }

//     theresult=AcademicReuslt(66)
    // console.log(theresult);



// even odd function

// function oddNumber(number){
//     if (number%2==0){
       
//         return true;

//     }
//       return false;
// }

//     var theamount =331;

//     var callthefunction=oddNumber(theamount)

//     // console.log(callthefunction);

// function theNumber(num1){
//     if(num1%2!=0){
//         return true;
//     }
    
//     return false;

// }

// var myNumber= 320;
// var theNumberis=theNumber(myNumber);

// console.log(theNumberis);




// function thisNumber(num2){
//     if(num2 % 2 == 1){
//         return true;
//     }

//     return false;
// }

// var numbersIs=thisNumber(444);
// // console.log(numbersIs);


// function thatsNumber(num){
//     if (num %2 !==1){
//         return true;
//     }

//     return false;
// }

// var thisNumberIs=thatsNumber(332);
// // console.log(thisNumberIs);




// // leap year


// function leapYear(year){
//     if ((year  % 4 ==0 && year % 100 !=0) || year% 400 ==0){
        
//        return true;

//     }

//     return false;
// }

//     var theYear = 2000;
//     var thisYear = leapYear(theYear);
    // console.log(thisYear);





    // (year % 4 ==0) && (year % 100 !=0) || (year % 400 ==0)

    // (year % 4 == 0) && (year % 100 !=0) || (year % 400 ==0)





    // factorial

//   var factorial = 1;

//   var i=1;
 
 
//   while(i<=5){
//         factorial=factorial*i;
      
//         i++;
//     }

//      // console.log(factorial);
   
   
//     var factorial = 1;
  
  
//     for(var i=1;i<=5;i++){
   
//     factorial=factorial*i;
    
//   }
//   console.log(factorial);



// function fact(number){
//     let fact = 1;
//     let a = 1;
//     while(a<=number){
//         fact=fact*a;
//         a++;
//     }
//     return fact;
// }

// var getFact =7;
// var myNumber=fact(getFact);
// console.log(myNumber);





// function factorial(num){

//     var factorial =1;

//     for(var i=1; i<=num; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }


//     var numValu = 10;
//     var theNumber = factorial(numValu);
//     console.log(theNumber);


// function factorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(i<=number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// let getNumber = 7;
// let theNumberis = factorial(getNumber);
// console.log("valu is",theNumberis);




// function factorial(num){
//     factorial =num;
//     for(let i = num; i>=1 ;i--){
//         factorial = factorial * i;
//     }
//     return factorial;
// }


// let getNumber =7;
// let thevalue=factorial(getNumber);
// console.log(thevalue);




function fact(num){
    let fact = num;
    let i=num;
    while(i>=1){
        fact = fact * i;
        i--;
    }
    return fact;
}

    let myNumber=5;
    let theNumber= fact(myNumber);
    console.log(theNumber);
  


