/*
problem no. 1 (marks: 10)

print the numbers from 1 to 10 one after the another.
১ থেকে ১০ পর্যন্ত ১ঘর পর পর সংখ্যা গুলো প্রিন্ট করো।
for example: ১১ থেকে ২০ পর্যন্ত, ১ ঘর পরপর এর  আউটপুট হবে, ১১, ১৩, ১৫, ১৭, ১৯।
এখানে, 
১১ এর পর ১২ হবে না, ১৩ হবে।
১৩ এর পর ১৪ হবে না, ১৫ হবে।

problem no. 2 (marks: 20)

print all even number from 10 to 20.
১০ থেকে ২০ পর্যন্ত সকল জোড় সংখ্যা প্রিন্ট করো।

problem no. 3  (marks: 30)

print the sum of all even number from 10 to 20.
১০ থেকে ২০ পর্যন্ত সকল জোড় সংখ্যার যোগফল প্রিন্ট করো।

problem no. 4 (marks: 40)

count total odd number from 15 to 25.
১৫ থেকে ২৫ পর্যন্ত সর্বমোট কয়টি বিজোড় সংখ্যা আছে, সেই সংখ্যাটা প্রিন্ট করো।

for example: ২ থেকে ১০ পর্যন্ত মোট বিজোড় আছে 4 টি। তাই আউটপুট হবে 4. 
 */



// problem no. 1 

for(let i = 1;i<10;i+=2){
    // console.log(i);
}

// problem no. 2

for(let i = 10;i<=20;i+=2){
    // console.log(i);
}

// problem no. 3

let sum =0;
for(let i = 10;i<=20;i+=2){
   sum = sum + i;    
}
// console.log(sum);

// problem no. 4

let house=[];
for(let i = 15;i<=25;i+=2){
    // console.log(i);
    if(house.indexOf(i)==-1){
    house.push(i);
}
}
// console.log(house.length);

// two way to slove this problem


let count=0;
for(let i = 15;i<=25;i++){
    // console.log(i);
    
    if(i % 2 != 0){
        count++;
    }
  
}
console.log(count);
