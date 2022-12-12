var inputNum = Number(prompt("enter any number you want"));
let max = 2 * inputNum - 1; //odd number formul
let repeatTimes = inputNum;
let arrTxt = [];
let index;
let backWard = 1;
let oddNumbers;
for (index = 1; index <= max; index++) {
  arrTxt[index] = "";
  oddNumbers = 2 * index - 1;
  if (index >= inputNum) {
    arrTxt[index] += ` `.repeat(index - inputNum + 1);
    if (index == inputNum) {
      arrTxt[index] += "*".repeat(oddNumbers);
      //   arrTxt[index] += "\n";
    } else {
      let n = max - index;
      arrTxt[index] += "*".repeat(2 * n + 1);
      //   arrTxt[index] += "\n";
      // backWard *= 2;
    }
  } else {
    arrTxt[index] += ` `.repeat(repeatTimes);
    arrTxt[index] += "*".repeat(2 * index - 1);
    // arrTxt[index] += "\n";
    repeatTimes--;
  }
}

console.log(arrTxt.join("\n"));
