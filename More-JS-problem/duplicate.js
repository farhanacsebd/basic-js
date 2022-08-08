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


