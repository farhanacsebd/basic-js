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
// using for loop 
let numbers=[32,44,67,11,101,35,76,90,04,40,61];

    let max =numbers[0];
    for(element of numbers){
        if(element>max){
            max = element;   
        }
    }
    console.log(max);



// using function:

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
### Factorial Recursive: 

```javascript
function factorial(n){
    if(n==1){
        return 1;
    }
    return n * factorial(n-1);      // n! = n * (n-1)!
}

let myFactorial = factorial(5);
console.log(myFactorial);
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

## Math or Random Number:
#### absulate: 
- In this case, both plus and minus will be positive.
```javascript
var myNumber =6;
var output = Math.abs(myNumber);
console.log(output);

var herNumber =-7;

var valuIs=Math.abs(herNumber);
console.log(valuIs);
```
#### ceiling:
- Whatever number is after the point will take the top number.
```javascript
var number = 21.44;
var theNumber=Math.ceil(number);
console.log(theNumber);
```
#### floor:
- It will take the following numbers.
```javascript
var thisnumber = 3.32;
var valuIs = Math.floor(thisnumber);
console.log(valuIs);
```
####  round:
- It returns an integer value. Gives higher or lower value depending on the point.
```javascript
var num = 4.5;
var numof=Math.round(num);
console.log(numof);
```
#### random:
- Random 0 to 1 will be rotated 10 times.
```javascript
var numberof =3;
numberofvalue=Math.random()*10;
console.log(numberofvalue);
```
## Object-
#### In here,variable call the object or values call the object property.
```javascript
let computer ={price:430000,storage :"15gb",color:"Black"processor: "Intel i6"}
console.log(computer);
```
- If want to see property value then-
```javascript
console.log(computer.price);

```
- Here is different way to set the values-
```javascript
var property-Name ="price";
computer[property-Name] =50000;
console.log(computer.price);

// other one


computer.price = 45000;
console.log(computer.price);


// other one

computer["price"]=47000;
console.log(computer.price);
```
# Module 21 Is 
### 2. Remove duplicate:
```javascript
const name =['abul','babul','sabul','dabul','jabul','gabul','abul','babul','sabul','dabul','jabul']


function removeDuplicate(name){

    unique=[];

    for(element of name){
        // console.log(element);
        if(unique.indexOf(element)==-1){
            unique.push(element);
        }
    }
    return unique;
}

console.log(removeDuplicate(name));




```
### 3.String Reverce
```javascript
let greetings='How are you?';
let reverse ='';

for(element of greetings){
    // console.log(element);
    reverse = element + reverse ;
    console.log(reverse);
}

```
### 6. Write foo,bar,foobar
```javascript
for(let i=1; i<=50 ; i++){
    
    if((i % 3 == 0) && i % 5 == 0){
        console.log('foobar');
    }
    else if(i % 3 == 0){
        console.log('foo');
    }
    else if(i % 5 == 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
}

```
### 7.array of object:
`find the cheapest value`
```javascript
let phones=[
    {name:'Walton m32',price:30000,camera:10,storage:32},
    {name:'Samsung s5',price:45000,camera:15,storage:64},
    {name:'shaomi m3',price:13500,camera:8,storage:32},
    {name:'Oppo A2',price:32000,camera:10,storage:32},
    {name:'Nokia N95',price:8000,camera:5,storage:8},
    {name:'htc h81',price:25000,camera:10,storage:32}
];
let cheapest =phones[0];

for(phone of phones){
    // console.log(phone);
    if(phone.price<cheapest.price){
        cheapest=phone;
    }
   
}
console.log(cheapest);

``` 
### 8.totalquantity with cost.
```javascript
let products =[
    {name:"laptop",price:43000, quantity : 1},
    {name:"Sungless",price:500, quantity : 6},
    {name:"shoe",price:2000, quantity : 3},
    {name:"watch",price:4000, quantity : 2},
    {name:"dress",price:1200, quantity : 4}
]

let totalprice=0;

for(let product of products){
    let productTotal = product.price * product . quantity;
    totalprice = totalprice+ productTotal;
}
    console.log(totalprice);
```
### 9.Animals Counting
```javascript
const firstRestAnimals = 10;
const secondRestAnimals = 50;
const restAnimals = 100;

function animalCount(miles){
    if(miles<=10){
        count = miles * firstRestAnimals;
        return count;
    } 
    else if (miles <= 20){
        first10miles= 10 * firstRestAnimals;
        restMiles = miles - 10;
        secondCountAnimals = restMiles * secondRestAnimals;
        total20RestMilesAnimals = first10miles + secondCountAnimals;
        return total20RestMilesAnimals;
    }
    else{
        first10miles = 10 * firstRestAnimals;
        second10miles = 10 * secondRestAnimals;
        restAnimalsTotal = miles - 20;
        thirdCoundAnimals = restAnimalsTotal * restAnimals;
        totalRestMilesAnimals = first10miles + second10miles +thirdCoundAnimals;
        return totalRestMilesAnimals;
    }
}

const animal = animalCount(24);
console.log(animal);
```

# Recursive
#### Recursive have 2 rules.
- The function calls itself twice.
- while or for both must follow stopping condision.
### sum:
```javascript
function sum(i){
    if(i==0){
        return 0;
    }
    else{
        return sum(i-1) + i;
    }
}

console.log(sum(5));
```

### factorial:
```javascript
function factorial(n){
    if(n==1){
        return 1;
    }
    else{
        return n * factorial(n-1)
    }
}

const fact = factorial(5);
console.log(fact);
```
### Fibonacci Series:
```javascript
function fibonacci(i){
    if(i == 0){
        return 0;
    }
    else if(i == 1){
        return 1;
    }
    else{
        return fibonacci(i-1) + fibonacci(i-2);
    }
}

console.log(fibonacci(8));
```