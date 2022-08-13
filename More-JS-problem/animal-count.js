const firstRestAnimals = 10;
const secondRestAnimals = 50;
const restAnimals = 100;

function animalCount(miles){
    if(miles<=10){
        count = miles * firstRestAnimals;
        return count;
    } 
    else if (miles <= 20){
        first10miles= 10 * firstRestAnimals;
        restMiles = miles - 10;
        secondCountAnimel = restMiles * secondRestAnimals;
        total20RestMilesAnimels = first10miles + secondCountAnimel;
        return total20RestMilesAnimels;
    }
    else{
        first10miles = 10 * firstRestAnimals;
        second10miles = 10 * secondRestAnimals;
        restAnimalsTotal = miles - 20;
        thirdCoundAnimals = restAnimalsTotal * restAnimals;
        totalRestMilesAnimels = first10miles + second10miles +thirdCoundAnimals;
        return totalRestMilesAnimels;
    }
}

const animal = animalCount(30);
console.log(animal);
