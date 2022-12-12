let sum = 0;
let numbersArray = [1, 13, 22, 123, 49];
for (let index = 0; index < numbersArray.length; index++) {
  let string_num = numbersArray[index].toString();
  for (let i = 0; i < string_num.length; i++) {
    let num = Number(string_num[i]);
    sum += num;
  }
}
console.log(sum);
