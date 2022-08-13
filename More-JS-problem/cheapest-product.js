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