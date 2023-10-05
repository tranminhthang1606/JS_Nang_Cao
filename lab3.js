//LAB3.2: (SECTION	11: WORKING	WITH	ARRAY > CODING	CHALLENGE	#1)

const checkDogs = (dogsJulia, dogsKate) => {
  let correctJuliaDogs = dogsJulia;
  correctJuliaDogs.splice(0, 2);
  correctJuliaDogs.splice(-2);
  let dogsJuliandKate = [...correctJuliaDogs, ...dogsKate];
  dogsJuliandKate.forEach((years, i) => {
    if (years >= 3) {
      console.log(`chó số ${i + 1} là người lớn và ${years} tuổi`);
    } else {
      console.log(`chó số ${i + 1} vẫn là chó con �`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//LAB3.3: (SECTION	11: WORKING	WITH	ARRAY > CODING	CHALLENGE	#2)

const calcAverageHumanAge = (ages) => {
  let humanAges = ages.map((age) => {
    if (age <= 2) {
      return age * 2;
    } else {
      return 16 + age * 4;
    }
  });
  let adultDogs = humanAges.filter((age) => {
    return age > 18;
  });
  let averageAge =
    adultDogs.reduce((prev, curr) => {
      return prev + curr;
    }, 0) / adultDogs.length;
  averageAge = averageAge.toFixed(0);
  return averageAge;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//LAB3.4: (SECTION	11: WORKING	WITH	ARRAY > CODING	CHALLENGE	#4)

//ex1.
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
dogs.forEach((dog) => {
  dog.recommendedFood = dog.weight * 0.75 * 28;
});
//ex2.
const checkFood = () => {
  let SarahDog = dogs.find((dog) => {
    return dog.owners.includes("Sarah");
  });
  console.log(
    `Sarah's dog is eating too ${
      SarahDog.curFood > SarahDog.recommendedFood ? "much" : "little"
    }`
  );
};

checkFood();
// ex3.
const ownersEatTooMuch = dogs
  .filter((dog) => {
    return dog.curFood > dog.recommendedFood;
  })
  .map((dog) => {
    return dog.owners;
  })
  .flat();

const ownersEatTooLittle = dogs
  .filter((dog) => {
    return dog.curFood < dog.recommendedFood;
  })
  .map((dog) => {
    return dog.owners;
  })
  .flat();
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//ex4.
const toStringOwners = (arr) => {
  return arr.join(" and ");
};
console.log(toStringOwners(ownersEatTooMuch) + "'s dogs eat too much!");
console.log(toStringOwners(ownersEatTooLittle) + "'s dogs eat too little!");

//ex5
console.log(
  dogs.some((dog) => {
    return dog.curFood == dog.recommendedFood;
  })
);

//ex6
let checkMatchDogsFood = dogs.some((dog) => {
  return (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  );
});
console.log(checkMatchDogsFood);

//ex7

if (checkMatchDogsFood) {
  console.log(
    dogs.filter((dog) => {
      return (
        dog.curFood > dog.recommendedFood * 0.9 &&
        dog.curFood < dog.recommendedFood * 1.1
      );
    })
  );
} else {
  console.log("Ko co cho");
}

//ex8

let newDogs = dogs.sort((a, b) => {
    return a.recommendedFood - b.recommendedFood;
})
console.log(newDogs)

