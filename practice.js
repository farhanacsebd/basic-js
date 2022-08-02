const number = -5;
const output = Math.abs(number);
// console.log(output); 


const myNumber =43.43;
const floor =Math.floor(myNumber);
// console.log(floor);



const herNumber =43.43;
const ans =Math.ceil(myNumber);
// console.log(ans);


const hisNumber = 64.454;
const thatIs = Math.round(hisNumber);
// console.log(thatIs);


const theNumber =32.343;
const thatans=Math.random(theNumber)*10;
// console.log(thatans);




function leapyear(year){
    if((year % 4 ==0 && year % 100 != 0) || year % 400 == 0 ){
        return true;
    }
    else{
        return false;
    }
}


// console.log((leapyear(2200)));



function thisnumber(num1,num2){
    if(num1 % 2 == 0){
        return true;
    }

    return false;
}

 const value=31;
 var thevalue=thisnumber(value);
 console.log(thevalue);




function thisIsnumber(num1,num2){
    if(num1 % 2 != 0){
        return true;
    }

    return false;
}

 const isvalue=31;
 var theisvalue=thisIsnumber(isvalue);
 console.log(theisvalue);



function thisisnumber(num1,num2){
    if(num1 % 2 != 1){
        return true;
    }

    return false;
}

 const isValue=31;
 var theisValue=thisisnumber(isValue);
 console.log(theisValue);


function thisnumberIs(num1,num2){
    if(num1 % 2 == 1){
        return true;
    }

    return false;
}

 const valueIs=300;
 var theValueIs=thisnumberIs(valueIs);
 console.log(theValueIs);