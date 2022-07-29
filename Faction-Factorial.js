// function getfactorial(factorial){
//      var factorial=1;
//      for(var i =1;i<=7;i++){
//         factorial=factorial*i;
//      }
//      console.log(factorial);
//      return 0;
// }

// var valuoffactorial=getfactorial()




function letfactorial(number){
     var factor=1;
     for(var i =1;i<=number;i++){
        factor=factor*i;
     }
     
     return factor;
}

var valuofthis=letfactorial(7)
console.log("This is the factorial number:",valuofthis);



function factorialNumber(value){
    var getfactorial =1;
    var i = 1;
    while(i<=value){
        getfactorial =getfactorial*i;
        i++;
        
    }
    
    return getfactorial;
}

var thevalue=7;
var thisvalue=factorialNumber(thevalue);
console.log(thisvalue);





function factorialNumber(){
    var getfactorial =1;
    var i = 1;
    while(i<=7){
        getfactorial =getfactorial*i;
        i++;
        
    }
    console.log(thisvalue);
    return getfactorial;
}


var thisvalue=factorialNumber(thevalue);


