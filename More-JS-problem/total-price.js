let products =[
    {name:"laptop",price:43000, quantity : 1},
    {name:"Sungless",price:500, quantity : 6},
    {name:"shoe",price:2000, quantity : 3},
    {name:"watch",price:4000, quantity : 2},
    {name:"dress",price:1200, quantity : 4}
]
// let cheapest=products[0];
let totalprice=0;

/* for(product of products){

   if(product.price<cheapest.price){
    cheapest = product;
   }
}
    console.log(cheapest); */

for(let product of products){
    let productTotal = product.price * product . quantity;
    totalprice = totalprice+ productTotal;
}
    console.log(totalprice);