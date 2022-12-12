let numbersArray = [1, 13, 22, 13, 49];
let num = [];

const consolePrint = function (array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    console.log(`element ${array1[index]} repeat ${array2[index]} times. `);
  }
};

for (let index = 0; index < numbersArray.length; index++) {
  let repeat = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[index] == numbersArray[i]) {
      repeat++;
      num[index] = repeat;
    }
  }
}
consolePrint(numbersArray, num);
