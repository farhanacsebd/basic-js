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
        secondCountAnimals = restMiles * secondRestAnimals;
        total20RestMilesAnimals = first10miles + secondCountAnimals;
        return total20RestMilesAnimals;
    }
    else{
        first10miles = 10 * firstRestAnimals;
        second10miles = 10 * secondRestAnimals;
        restAnimalsTotal = miles - 20;
        thirdCoundAnimals = restAnimalsTotal * restAnimals;
        totalRestMilesAnimals = first10miles + second10miles +thirdCoundAnimals;
        return totalRestMilesAnimals;
    }
}

const animal = animalCount(24);
console.log(animal);
