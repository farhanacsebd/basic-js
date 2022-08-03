function largerElement(number){
    let larger = 0;
    for(let i=0;i<number.length;i++){
        let element =number[i];
      if (element > larger){
        larger = element;
      }

    }
    return larger;
}


console.log(largerElement([43,24,65,86,99,78,34,32]));