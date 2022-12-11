//Prime Number from 1 to ?(any number you want)
let numberTo = 100;
const arr = []; //Creating an Empty List for keeping all prime numbers
for (let index = 2; index <= numberTo; index++) {
  // 1 is not a prime number it is excluded and loop is started with 2 to numberTo.
  for (var i = 2; i < index; i++) {
    if (index % i == 0) {
      break;
    }
    /*
    اینجا گفتیم اگر ایندکس 
    رو به تقسیم کردی از حلقه
    فور  در بیا بیرون*/
  }
  if (index === i) {
    arr.push(index);
    /* 
       حالا اینجا بررسی میکنیم ببینیم
      که اون ای با ایندکس برابر بوده؟ 
    */
  }
}
console.log(arr.join(" "));
