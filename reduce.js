import { brands, dogs } from './data';

// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce


export const getSneaks = (brands) => {
  return brands.reduce(
    (oldBrands, newBrand) => [...oldBrands, ...newBrand.shoes], []
  );
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce

export const getAverageAge = (dogs) => {
  return dogs.reduce(
    (totalAge, newDog) => totalAge + newDog.age, 0  
  ) / dogs.length;
};