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


#### if variable values need to change then the shorthand is-  

```javascript
let first = 10;
let second = 5;


first = first + 20;

// otherwise

first += 20;

// other

first -= 5;

```
#### If need to added values one by one then -

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

#### In here,if you take a number as a string, you need to tell the type of the number-
 

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


#### `toFixed` is only for understanding how many places you want to take after the decimal.
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


### Push or Pop

```javascript

arr.push(21);

arr.push(90);

console.log(arr);

arr.pop();
console.log(arr);

```

### Shift or Unshift

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




```javascript


```
```javascript


```
```javascript


```
```javascript


```
```javascript


```