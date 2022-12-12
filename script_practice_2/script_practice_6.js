/////////////////
//  first way  //
/////////////////

let numbersArray = [1, 13, 22, 123, 49];

let temp = 0;
for (let index = 0; index < numbersArray.length; index++) {
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[index] > numbersArray[i]) {
      temp = numbersArray[index];
      numbersArray[index] = numbersArray[i];
      numbersArray[i] = temp;
    }
  }
}
console.log("sorted Array is", numbersArray);
console.log("Maximume Array element is", numbersArray[0]);

///////////////////////////////////
//    secound way of sorting     //
///////////////////////////////////

// let numbersArray = [1, 13, 22, 123, 49];
// numbersArray.sort(function (a, b) {
//   return a - b;
// });
// console.log("sorted array", numbersArray);
// console.log("min array element", numbersArray[0]); //this means first min element
// console.log("secound minimume array elements", numbersArray[1]); //this means secound min element

//////////////////////////////
//        max element       //
//////////////////////////////
// let max = -Infinity;
// let numbersArray = [1, 13, 22, 123, 49, 150];
// let i = 0;

// let arrayLength = numbersArray.length;

// for (i = 0; i < arrayLength; i++) {
//   if (numbersArray[i] > max) {
//     max = numbersArray[i];
//   }
// }

// console.info(max);

//////////////////////////////
//        min element       //
//////////////////////////////
// let min = Infinity;
// let numbersArray = [1, 13, 22, 123, 49, 150];
// let i = 0;

// let arrayLength = numbersArray.length;

// for (i = 0; i < arrayLength; i++) {
//   if (numbersArray[i] < min) {
//     min = numbersArray[i];
//   }
// }

// console.info(min);
/////////////////////////////////////
//   max & min using destructure   //
/////////////////////////////////////
// const numbersArray = [1, 13, 22, 123, 49, 150];
// let minEl = Math.min(...numbersArray); // 1
// let maxEl = Math.max(...numbersArray); // 3
// console.log("Array max element", maxEl);
// console.log("Array min element", minEl);
