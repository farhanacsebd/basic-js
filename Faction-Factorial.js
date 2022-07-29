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