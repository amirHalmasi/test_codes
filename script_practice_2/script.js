"use strict";
let showPractice = function (click) {
  if (`${click}` == 9) {
    document.querySelector(".runBox").classList.remove("hide");
    document.querySelector(".runBox").classList.add("show");
  } else {
    document.querySelector(".runBox").classList.remove("show");
    document.querySelector(".runBox").classList.add("hide");
  }
  let scriptPractice = practice(`${click}`);
  document.querySelector("a").href = `./script_practice_${click}.js`;
  document.querySelector("iframe").src = `./script_practice_${click}.js`;
  document.querySelector(".scriptResult").innerHTML = scriptPractice;
};

function practice(key) {
  let x;
  switch (key) {
    case "1":
      x = practice_1();
      break;
    case "2":
      x = practice_2();
      break;
    case "3":
      x = practice_3();
      break;
    case "4":
      x = practice_4();
      break;
    case "5":
      x = practice_5();
      break;
    case "6":
      x = practice_6();
      break;
    case "7":
      x = practice_7();
      break;
    case "8":
      x = practice_8();
      break;
    case "9":
      x = practice_9();
      break;
    case "10":
      x = practice_10();
      break;

    default:
      x = "break;";
  }
  return x;
}
function practice_1() {
  let arr = [];
  const numberTo = 1000;
  for (let index = 0; index <= numberTo; index++) {
    if (index % 2 == 0) {
      arr[index] = "";
      arr[index] += ` ${index} is an even number`;
      arr;
    }
  }
  return arr.join("<br>");
}

function practice_2() {
  let arr = [];
  const numberTo = 1000;
  for (let index = 1; index <= numberTo; index++) {
    if (index % 2 == 1) {
      arr[index] = "";
      arr[index] += ` ${index} is an odd number`;
      arr;
    }
  }
  return arr.join("<br>");
}
function practice_3() {
  let sum = 0;
  let numbersArray = [1, 13, 22, 123, 49];
  for (let index = 0; index < numbersArray.length; index++) {
    sum += numbersArray[index];
  }
  return "Sumof array elements is: " + sum;
}
function practice_4() {
  let numbersArray = [1, 13, 22, 123, 49];
  let beforeArr = numbersArray.join(" , ");
  for (let index = 0; index < numbersArray.length; index++) {
    delete numbersArray[index];
  }
  let afterArr = numbersArray.join(" , ");
  return (
    `before changing: ${beforeArr}` + "<br>" + `after changing: ${afterArr}`
  );
}
function practice_5() {
  let stringTra = [];
  for (let i = 0; i < 8; i++) {
    stringTra[i] = " ";
    for (let j = 1; j <= i + 1; j++) {
      stringTra[i] += j;
      stringTra[i] += "  "; //optional
    }
  }
  return stringTra.join("<br>");
}
function practice_6() {
  let numbersArray = [1, 13, 22, 123, 49];
  let beforeArr = numbersArray.join(" , ");
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
  return (
    "Before sorting array: " +
    beforeArr +
    "<br>" +
    "Sorted array is: " +
    numbersArray.join(",") +
    "<br>" +
    "Maximume array element is: " +
    numbersArray[0]
  );
}
function practice_7() {
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
  return (
    "Sorted array is: " +
    numbersArray.join(",") +
    "<br>" +
    "Maximume array element is: " +
    numbersArray[numbersArray.length - 1]
  );
}
function practice_8() {
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
  return (
    "Sorted array is: " +
    numbersArray.join(",") +
    "<br>" +
    "Secound Minimume array element is: " +
    numbersArray[numbersArray.length - 2]
  );
}
function practice_9(userStr = "this is default text") {
  let txtRevese = " ";
  for (let i = userStr.length; i >= 0; i--) {
    txtRevese += userStr.substring(i, i - 1);
  }
  return (
    "Your entered text is:" +
    userStr +
    "<br>" +
    "Your reverse text is:  " +
    txtRevese
  );
}

function userInput() {
  let userStr = document.querySelector("#textInput").value;
  let txtRevese = " ";
  for (let i = userStr.length; i >= 0; i--) {
    txtRevese += userStr.substring(i, i - 1);
  }
  document.querySelector(".scriptResult").innerHTML =
    "Your entered text is:" +
    userStr +
    "<br>" +
    "Your reverse text is:  " +
    txtRevese;
}
function practice_10() {
  let numbersArray = [1, 13, 22, 13, 49];
  let num = [];
  for (let index = 0; index < numbersArray.length; index++) {
    let repeat = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      if (numbersArray[index] == numbersArray[i]) {
        repeat++;
        num[index] = " ";
        num[index] += `element ${index} repeat`;
        num[index] += repeat;
      }
    }
  }
  return (
    "This is our array" + numbersArray.join(",") + "<br>" + num.join("<br>")
  );
}
// const consolePrint = function (array1, array2) {
//   for (let index = 0; index < array1.length; index++) {
//     console.log(`element ${array1[index]} repeat ${array2[index]} times. `);
//   }
// };

// consolePrint(numbersArray, num);
