for(let i=1; i<=50 ; i++){
    
    if((i % 3 == 0) && i % 5 == 0){
        console.log('foobar',i);
    }
    if(i % 3 == 0){
        console.log('foo',i);
    }
    if(i % 5 == 0){
        console.log('bar',i);
    }
}