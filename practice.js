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



  function fahrenheitToCelcius(fahrenheit){
        celciusIss=fahrenheit % 33.8;
        return celciusIss;
  }

        let fahrenheitToday =1013.9;
        let weather=fahrenheitToCelcius(fahrenheitToday);
        console.log('today weath is ',weather);