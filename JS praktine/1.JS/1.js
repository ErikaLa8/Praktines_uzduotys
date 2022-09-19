1.1 


const carResult = cars.filter( car => car.Miles_per_Gallon);

console.log(carResult)


1.2


const carResult1 = cars.filter( car => !car.Miles_per_Gallon);

console.log(carResult1);


1.3


const resultCylinder = cars.filter( car => car.Cylinders === 8 && car.Miles_per_Gallon >= 15);

console.log(resultCylinder);


1.4


const resultHorsepower = cars;
result4.forEach( (car) => {
    let kW = Math.round(car.Horsepower * 0.7457)
    car.Kilowatts = kW;
})

console.log(resultHorsepower);


1.5


const resultWeight = cars.sort( (a,b) => a.Weight_in_lbs - b.Weight_in_lbs);

console.log(resultWeight);

1.6


let madeInUS = 0;
let madeElsewhere = 0;
const resultUS = () => cars.forEach( el => el.Origin === "USA" ? madeInUS++ : madeElsewhere++ );

resultUS();

console.log(`Made in US: ${madeInUS} out of ${cars.length}.`);
console.log(`Made Elsewhere: ${madeElsewhere} out of ${cars.length}.`);