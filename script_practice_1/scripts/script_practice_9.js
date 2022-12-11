let userStr = prompt("Enter your string:");
let txtRevese = "";
for (let i = userStr.length; i >= 0; i--) {
  txtRevese += userStr.substring(i, i - 1);
}
console.log("your reverse text is:  " + txtRevese);
