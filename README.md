# Basic JavaScript



#### Check the value using typeof :
```javascript

const specialName = 'taSMI';
console.log(typeof specialName);

const specialNumber = 431;
console.log(typeof specialNumber);


const theNumber = true;
console.log(typeof theNumber);

```


### Mathmatical Operation in JS :


#### Mathmatical operator is - +,-,*,/,%
```javascript

const first = 10;
const second = 5;
const totalsum = first + second;
console.log(totalsum);

const totalMinus = first - second;
console.log(totalMinus);

const totalMultiply = first * second;
console.log(totalMultiply);

const totaldevide = first % second;
console.log(totaldevide);

const totalquotient = first / second;
console.log(totalquotient);


```

### Short Hand mathmatical operation is :


- if variable values need to change then the shorthand is-  

```javascript
let first = 10;
let second = 5;


first = first + 20;

// otherwise

first += 20;

// other

first -= 5;

```



- If need to added values one by one then -

```javascript

first++ ;

// or

first-- ;

```

### Concatenation of strings with strings :

```javascript
let firstName = 'Jim';
let secondName = 'kim';
let fullName = 'Jim' + " " + 'kim';
console.log(fullName);
```

- In here,if you take a number as a string, you need to tell the type of the number-
 

```javascript

let price ="43.30";
let prce1 ="33.11";
let priceIs =parseFloat(price);
let price1Is =parseFloat(prce1);

let totalPriceIs= priceIs + price1Is;

console.log(totalPriceIs);


// parseInt is-


let eggPrice ='20';
let lemonPrice = '10';
let totalEggLemonPrice = eggPrice + lemonPrice;
console.log(parseInt(totalEggLemonPrice));

```


- `toFixed` is only for understanding how many places you want to take after the decimal.
```javascript

let price ="43.30";
let prce1 ="33.11";

let totalPriceIs= priceIs * price1Is;
console.log(parseFloat(totalPriceIs(toFixed(2))));

```

## Array

### List of Simple Arrays:
#### Array is a one kind of list.The list is counted as 0,1,2,3.......

```javascript

let arr =[22,33,55,234,74,78,99,13,18,67,9];


// To find the length of the list using length 

let arrIs =arr.length;
console.log(arr);

// To find the position using indexOf

let arrIndex = arr.indexOf(44);
console.log(arrIndex);


// If want to keep the new value of the list

arr[3] = 77;
console.log(arr);

// If want to know the value position 

let arrayIndex = arr[4];
console.log(arrayIndex);

```


### Push or Pop:

```javascript

arr.push(21);

arr.push(90);

console.log(arr);

arr.pop();
console.log(arr);

```

### Shift or Unshift:

```javascript

arr.shift();

arr.unshift(45);

console.log(arr); 
```

- If you want to remove an item from the list and see it again in the list then use `listItem`.

```javascript

let arrlistItem = arr.pop();

console.log(arr);                        // after pop value will show
console.log(arrlistItem);                     //before pop value will show

```

## Comparision Javascript

#### Comarision have 6 items < , > , == , != , && , || .
- != ,It's means not equal. console.log(5 != 6) .
- && ,It's means 2 conditions must be fulfilled .
- || ,It's means It's means only one conditions must be fulfilled .


#### Make conditional decision , if - else , comparision -

```javascript
var myJob =true;
var mybudget=432000;
var myflat=true;
var myHouse=false;

if((myJob == true && myflat == false) || mybudget > 500000){
    console.log("they give him");
}

else {
    console.log("they will kill you");
}


```

### Nasted Condition :
#### It means place another else if inside the else if .
```javascript
var mybudget = 1000;
var bun=10;

var packed=false;

if (bun==10 && mybudget>10){
    if(packed==true){
        console.log("you can buy this product");
    }
    else{
        console.log('no need to buy');
    }
}
else{
    console.log('need to take air');
}

```

### Switch Case:
```javascript

var fruts ='Yellow';

switch(fruts){
    case 'Orange':
        console.log('orange are 50kg');

        break;

    case 'Red':
        console.log('Apple are 80kg');
        
        break;
    
    case 'Pink':
        console.log('Dragon are 400kg');

        break;

    case 'Yollow':
        console.log('Lemon are 29kh');

    default:
        console.log('this is another fruts');    
    }


```


## For & While Loop
### For Loop :
```javascript

for(var i = 0; i < 7; i++){
    console.log(i);
}

// even number

for(var i=0 ; i<100; i+=6){
    console.log(i);
}


// odd number
for (var a = 1; a<100; a+=4){
console.log(a);
}

```
### While Loop :
```javascript
var number=1;

while(number<=10){
    console.log(number);
    number++;
}

// odd numbers

var num1 = 1;

while(num1<20){
    console.log(num1);
    num1=num1 + 2;
}

// even number


var num1=2;

while(num1<=20){
    console.log(num1);
    num1 += 4;
}

```
#### while for loop break and continue
- break 
```javascript
let i = 1;
while(i<10){
    console.log(i);
    if(i==5){
        break;
    }
    i++;
}

// another





let number=[22,64,77,88,95,32,101,08,66,79,82,38,21];

for(let i=0;i<number.length;i++){
   let element=number[i];
    // console.log(element);

    if(element > 100){
        break;
    }
    console.log(element);
}

```
- continue 

```javascript
for(let i=0;i<number.length;i++){
    let element=number[i];
     // console.log(element);
 
     if(element > 100){
         continue;
     }
     console.log(element);
 }

```
## Function
### even odd using function:
- number % 2 != 0 ; odd
- number % 2 == 0 ; even
- number % 2 != 1 ; even
- number % 2 == 1 ; odd


```javascript
// EVEN OR ODD NUMBERS

function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
}
    }

let numbers=120;
console.log(isEven(numbers));




function isOdd(numberIs){
    if(numberIs % 2 ==1){
     return true;    
    }
    else{
        return false;
    }
}
 let theOddNumber = 1221;
 console.log(isOdd(theOddNumber));




function myNumber(thenumber){
    if(thenumber % 2 != 0){
     return true;    
    }
    else{
        return false;
    }
}
 let theNumberIs = 1221;
 console.log(myNumber(theNumberIs));


```

### Unit convert using function:

```javascript
// miles to kilometer


function miletokilomer(mile){
    
    let km=mile*1.6093;
    return km;

}

let mile =10;
console.log(miletokilomer(mile));




// inch to feet

function inchtofeet(inches){
    let feet =inches / 12;
    return feet;

}

    let inchesIs = 140;
    console.log(inchtofeet(inchesIs));

```
### sum array function:
```javascript
let numberIs=[11,22,55,74,75,99,101,35,89,33]


function sumNumber(number){
    let sum = 0;
    for(let i = 0; i<number.length; i++){
       let element = number[i];
        sum =sum + element;
    }
    return sum;
}

let getSumNumber =sumNumber(numberIs);
console.log(getSumNumber);

```
## min max value:

```javascript
const a =345;
const b =243;
const c =660;
const max = Math.max(a,b,c);
const min = Math.min(a,b,c);
console.log(max,min);
// console.log(min);
```
### min max using function -
- max is- 
```javascript
function largestNumber(number){
    let max = number[0];
    for(let i=0;i<number.length;i++){
        element = number[i];
        if(element > max){
            max = element;
        }
       
    }
    return max;
}


let getLargestNumber = largestNumber([11,22,55,74,75,99,101,35,89,33]);
console.log(getLargestNumber);

```


- min is- 

```javascript
function smallestNumber(number){
    let min = number[0];
    for(let i=0;i<number.length;i++){
        let elementIs = number[i];
        if(elementIs<min){
            min=elementIs;
        }
    }
    return min;
}

let getSmallestNumber = smallestNumber([11,22,55,74,75,99,101,35,89,33]);
console.log(getSmallestNumber);
```


## Found LeapYear :
```javascript
function leapYear(year){
    if((year%4 == 0 && year%100 !=0)||year%400 ==0){
        return true;
    }
    return false
}

const yearNumberadded=2020;
const thisYear = leapYear(yearNumberadded);
console.log("this is the year",thisYear);

```

## Factorial Number

` 1!=1!
  2!=2*1!
  3!=3*2*1!
  4!=4*3*2*1!
  5!=5*4*3*2*1!
`
- n! = n*(n-1)
- defoltvalue = 0;
#### Factorial number for loop -
```javascript
let factorial =1;
for(let i=1;i<7;i++){
    factorial = factorial * i;
}
    console.log(factorial);

```
#### Factorial number while loop -
```javascript
let fact =1;
let i=1;
while(i<7){
    fact = fact * i;
    i++;
}
    console.log(fact);


```
#### Factorial number function for loop -
```javascript
function factorial(numberisThe){
    let fact =1;
for(let i=1;i<numberisThe;i++){
    fact = fact * i;
}
   return fact;
}

let getfactorial=8;
console.log(factorial(getfactorial));
```

#### Factorial number function while loop -
```javascript
function getTheFactorial(numberBig){
    
    factorial = 1;

    let i=1;

    while(i<numberBig){

        factorial = factorial * i;
       
        i++;
    }
    return factorial;
}


    let myFactorial=getTheFactorial(10);
    console.log(myFactorial);

```
### factorial decrementing loop:
```javascript
function theFactorial(myNumber){
    let factIs = 1;
    for(let i=myNumber; i>=1; i--){

        factIs = factIs * i;

    }
    return factIs;
}


    let getFact = theFactorial(8);
    console.log(getFact);


function factorialIs(theNumber){
    
   let theFact = 1 ;

   let i = theNumber;

   while(i>=1){

    theFact = theFact * i;

    i--;

   }
   return theFact;   
}

    let theFactIs = factorialIs(8);
    console.log(theFactIs);
```
### Fibonacci Series:
`0,1,1,2,3,5,8,13,21,34,55.......`
```javascript
function fibo(number){
    let fibonacchi =[0,1];
    for(let i =2;i<number;i++){
        fibonacchi[i] = fibonacchi[i-1] + fibonacchi[i-2];
    }
    return fibonacchi;
}

 let fiboIs = fibo(10);
 console.log(fiboIs);
```

### Swap:
```javascript
let first=5;
let second=77;
console.log(first,second);

let temp = first;
first=second;
second=temp;
console.log(first,second);
```




### Destructuring
```javascript
[first,second]=[second,first];
console.log(first,second);
```




```javascript









```
```javascript


```