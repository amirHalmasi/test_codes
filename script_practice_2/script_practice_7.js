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
console.log("minimume Array element is", numbersArray[numbersArray.length - 1]);
