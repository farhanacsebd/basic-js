// function leapYear(year){
//     if(year % 4 == 0){
//         return true;
//     }
//     return false;
// }

// const yearNumber = 2110;
// const thoseYear = leapYear(yearNumber);
// console.log('this is my leap year',thoseYear);



function leapYear(year){
    if((year%4 == 0 && year%100 !=0)||year%400 ==0){
        return true;
    }
    return false
}

const yearNumberadded=2020;
const thisYear = leapYear(yearNumberadded);
console.log("this is the year",thisYear);