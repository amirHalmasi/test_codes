//1st way

// let numbersArray = [1, 13, 22, 123, 49];
// for (let index = 0; index < numbersArray.length; index++) {
//   numbersArray[index] = null;
// }
// console.log(numbersArray);

//didn't work correctly☝

//********************************************** */
//2nd way

// let numbersArray = [1, 13, 22, 123, 49];
// for (let index = 0; index < numbersArray.length; index++) {
//   delete numbersArray[index];
// }

// console.log(numbersArray);

//*********************************************** */
//3rd way

// let numbersArray = [1, 13, 22, 123, 49];
// numbersArray.splice(0, 5);
// console.log(numbersArray);
